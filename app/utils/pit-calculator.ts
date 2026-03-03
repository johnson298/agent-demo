export type RegionType = 1 | 2 | 3 | 4;

export interface PITInput {
  type: "gross" | "net";
  salary: number;
  insuranceType: "on_salary" | "on_custom_amount";
  customInsuranceAmount: number; // Used only if insuranceType is 'on_custom_amount'
  region: RegionType;
  dependents: number;
}

export interface TaxBracket {
  level: number;
  from: number;
  to: number | null;
  rate: number;
  amount: number;
}

export interface PITResult {
  grossSalary: number;
  netSalary: number;
  insuranceBHXH: number;
  insuranceBHYT: number;
  insuranceBHTN: number;
  totalInsurance: number;
  personalDeduction: number;
  dependentDeduction: number;
  totalDeduction: number;
  taxableIncome: number;
  totalTax: number;
  taxBrackets: TaxBracket[];
}

export const BASE_SALARY = 2_340_000;
export const REGION_MIN_WAGES: Record<RegionType, number> = {
  1: 4_960_000,
  2: 4_410_000,
  3: 3_860_000,
  4: 3_450_000,
};

export const PERSONAL_DEDUCTION = 11_000_000;
export const DEPENDENT_DEDUCTION = 4_400_000;

const TAX_TIERS = [
  { level: 1, maxInc: 5_000_000, rate: 0.05, maxTaxInTier: 250_000 },
  { level: 2, maxInc: 10_000_000, rate: 0.1, maxTaxInTier: 500_000 },
  { level: 3, maxInc: 18_000_000, rate: 0.15, maxTaxInTier: 1_200_000 },
  { level: 4, maxInc: 32_000_000, rate: 0.2, maxTaxInTier: 2_800_000 },
  { level: 5, maxInc: 52_000_000, rate: 0.25, maxTaxInTier: 5_000_000 },
  { level: 6, maxInc: 80_000_000, rate: 0.3, maxTaxInTier: 8_400_000 },
  { level: 7, maxInc: Infinity, rate: 0.35, maxTaxInTier: Infinity },
];

function calculateTaxDetails(taxableIncome: number) {
  let totalTax = 0;
  const taxBrackets: TaxBracket[] = [];

  let previousLimit = 0;
  for (const tier of TAX_TIERS) {
    if (taxableIncome > previousLimit) {
      const taxableInTier = Math.min(
        taxableIncome - previousLimit,
        tier.maxInc - previousLimit,
      );
      const taxAmount = taxableInTier * tier.rate;

      taxBrackets.push({
        level: tier.level,
        from: previousLimit,
        to: tier.maxInc === Infinity ? null : tier.maxInc,
        rate: tier.rate * 100, // as percentage
        amount: taxAmount,
      });

      totalTax += taxAmount;
      previousLimit = tier.maxInc;
    } else {
      break;
    }
  }

  return { totalTax, taxBrackets };
}

function calculateGrossToNet(gross: number, input: PITInput): PITResult {
  const insuranceBase =
    input.insuranceType === "on_custom_amount"
      ? input.customInsuranceAmount
      : gross;

  const maxBHXH_BHYT = BASE_SALARY * 20;
  const maxBHTN = REGION_MIN_WAGES[input.region] * 20;

  const actualBaseBHXH_BHYT = Math.min(insuranceBase, maxBHXH_BHYT);
  const actualBaseBHTN = Math.min(insuranceBase, maxBHTN);

  const insuranceBHXH = actualBaseBHXH_BHYT * 0.08;
  const insuranceBHYT = actualBaseBHXH_BHYT * 0.015;
  const insuranceBHTN = actualBaseBHTN * 0.01;
  const totalInsurance = insuranceBHXH + insuranceBHYT + insuranceBHTN;

  const dependentDeduction = input.dependents * DEPENDENT_DEDUCTION;
  const totalDeduction = PERSONAL_DEDUCTION + dependentDeduction;

  const preTaxIncome = gross - totalInsurance;
  const taxableIncome = Math.max(0, preTaxIncome - totalDeduction);

  const { totalTax, taxBrackets } = calculateTaxDetails(taxableIncome);

  const netSalary = preTaxIncome - totalTax;

  return {
    grossSalary: gross,
    netSalary: netSalary,
    insuranceBHXH,
    insuranceBHYT,
    insuranceBHTN,
    totalInsurance,
    personalDeduction: PERSONAL_DEDUCTION,
    dependentDeduction,
    totalDeduction,
    taxableIncome,
    totalTax,
    taxBrackets,
  };
}

export function calculatePIT(input: PITInput): PITResult {
  if (input.type === "gross") {
    return calculateGrossToNet(input.salary, input);
  }

  // Net to gross via Binary Search for precision and simplicity of handling maximum ceilings on insurances
  let low = input.salary;
  let high = input.salary * 3; // Gross should not realistically exceed 3x Net within normal brackets
  const EPSILON = 1;

  let bestResult: PITResult = calculateGrossToNet(input.salary, input);

  for (let i = 0; i < 60; i++) {
    // 60 iterations of binary search is extremely accurate
    const mid = (low + high) / 2;
    bestResult = calculateGrossToNet(mid, input);

    if (Math.abs(bestResult.netSalary - input.salary) <= EPSILON) {
      break;
    }

    if (bestResult.netSalary > input.salary) {
      high = mid;
    } else {
      low = mid;
    }
  }

  // Clean up minor float inaccuracy
  bestResult.grossSalary = Math.round(bestResult.grossSalary);

  return calculateGrossToNet(bestResult.grossSalary, input);
}
