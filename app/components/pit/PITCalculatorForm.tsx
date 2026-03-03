'use client';

import { useState, ChangeEvent } from 'react';
import { PITInput, RegionType } from '../../utils/pit-calculator';
import { formatCurrency, parseCurrency } from '../../utils/format';

interface PITCalculatorFormProps {
    onCalculate: (input: PITInput) => void;
}

export default function PITCalculatorForm({ onCalculate }: PITCalculatorFormProps) {
    const [type, setType] = useState<'gross' | 'net'>('gross');
    const [salaryStr, setSalaryStr] = useState<string>('15,000,000');
    const [insuranceType, setInsuranceType] = useState<'on_salary' | 'on_custom_amount'>('on_salary');
    const [customInsuranceStr, setCustomInsuranceStr] = useState<string>('');
    const [region, setRegion] = useState<RegionType>(1);
    const [dependents, setDependents] = useState<number>(0);

    const handleSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawVal = e.target.value;
        const num = parseCurrency(rawVal);
        setSalaryStr(formatCurrency(num).replace('₫', '').trim());
    };

    const handleCustomInsuranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawVal = e.target.value;
        const num = parseCurrency(rawVal);
        setCustomInsuranceStr(formatCurrency(num).replace('₫', '').trim());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate({
            type,
            salary: parseCurrency(salaryStr),
            insuranceType,
            customInsuranceAmount: parseCurrency(customInsuranceStr),
            region,
            dependents,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/40 dark:bg-black/40 border border-white/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
            {/* Glossy overlay effect */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-3xl" />

            <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-sm">
                Tính Thuế Thu Nhập Cá Nhân
            </h1>

            {/* Type Switcher */}
            <div className="flex bg-white/20 dark:bg-black/20 p-1 rounded-xl mb-8 relative border border-white/20">
                <button
                    type="button"
                    onClick={() => setType('gross')}
                    className={`flex-1 py-3 text-center rounded-lg font-medium transition-all duration-300 z-10 ${type === 'gross'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-white/10'
                        }`}
                >
                    Tính NET (Từ Gross)
                </button>
                <button
                    type="button"
                    onClick={() => setType('net')}
                    className={`flex-1 py-3 text-center rounded-lg font-medium transition-all duration-300 z-10 ${type === 'net'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-white/10'
                        }`}
                >
                    Tính GROSS (Từ Net)
                </button>
            </div>

            <div className="space-y-6">
                {/* Salary Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Thu nhập {type === 'gross' ? 'Gross' : 'Net'} (VND)
                    </label>
                    <input
                        type="text"
                        value={salaryStr}
                        onChange={handleSalaryChange}
                        className="w-full text-xl p-4 bg-white/50 dark:bg-black/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-semibold text-gray-900 dark:text-white"
                        placeholder="Ví dụ: 15,000,000"
                        required
                    />
                </div>

                {/* Insurance Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Đóng bảo hiểm</label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center space-x-3 bg-white/30 dark:bg-black/30 p-4 border border-white/20 rounded-xl cursor-pointer hover:bg-white/40 transition-colors">
                            <input
                                type="radio"
                                name="insuranceType"
                                value="on_salary"
                                checked={insuranceType === 'on_salary'}
                                onChange={() => setInsuranceType('on_salary')}
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-800 dark:text-gray-200 font-medium">Trên lương chính thức</span>
                        </label>
                        <label className="flex items-center space-x-3 bg-white/30 dark:bg-black/30 p-4 border border-white/20 rounded-xl cursor-pointer hover:bg-white/40 transition-colors">
                            <input
                                type="radio"
                                name="insuranceType"
                                value="on_custom_amount"
                                checked={insuranceType === 'on_custom_amount'}
                                onChange={() => setInsuranceType('on_custom_amount')}
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-800 dark:text-gray-200 font-medium">Mức cố định</span>
                        </label>
                    </div>
                </div>

                {insuranceType === 'on_custom_amount' && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Mức lương đóng bảo hiểm (VND)
                        </label>
                        <input
                            type="text"
                            value={customInsuranceStr}
                            onChange={handleCustomInsuranceChange}
                            className="w-full p-4 bg-white/50 dark:bg-black/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white"
                            placeholder="VD: 5,000,000"
                            required={insuranceType === 'on_custom_amount'}
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Vùng áp dụng</label>
                        <select
                            value={region}
                            onChange={(e) => setRegion(Number(e.target.value) as RegionType)}
                            className="w-full p-4 bg-white/50 dark:bg-black/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white appearance-none"
                        >
                            <option value={1}>Vùng I (4.960.000đ)</option>
                            <option value={2}>Vùng II (4.410.000đ)</option>
                            <option value={3}>Vùng III (3.860.000đ)</option>
                            <option value={4}>Vùng IV (3.450.000đ)</option>
                        </select>
                    </div>

                    {/* Dependents */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Số người phụ thuộc</label>
                        <input
                            type="number"
                            min="0"
                            value={dependents}
                            onChange={(e) => setDependents(Number(e.target.value))}
                            className="w-full p-4 bg-white/50 dark:bg-black/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white"
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/25 active:scale-95 border border-white/10"
            >
                TÍNH TOÁN
            </button>
        </form>
    );
}
