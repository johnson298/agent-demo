export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
};

export const parseCurrency = (value: string): number => {
  const numericString = value.replace(/[^0-9]/g, "");
  return numericString ? parseInt(numericString, 10) : 0;
};
