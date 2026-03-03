'use client';

import { useState } from 'react';
import PITCalculatorForm from '../components/pit/PITCalculatorForm';
import PITResultComponent from '../components/pit/PITResult';
import { PITInput, PITResult, calculatePIT } from '../utils/pit-calculator';

export default function PITPage() {
    const [result, setResult] = useState<PITResult | null>(null);

    const handleCalculate = (input: PITInput) => {
        const calculationResult = calculatePIT(input);
        setResult(calculationResult);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E0EAFC] via-[#CFDEF3] to-[#E0EAFC] dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364] flex justify-center py-12 px-4 transition-colors duration-500">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            <div className="relative w-full max-w-5xl z-10 flex flex-col gap-8">
                <PITCalculatorForm onCalculate={handleCalculate} />
                {result && (
                    <div className="transition-all duration-500 ease-out transform translate-y-0 opacity-100">
                        <PITResultComponent result={result} />
                    </div>
                )}
            </div>
        </div>
    );
}
