import { PITResult as TPITResult } from '../../utils/pit-calculator';
import { formatCurrency } from '../../utils/format';

export default function PITResult({ result }: { result: TPITResult | null }) {
    if (!result) return null;

    return (
        <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 w-full rounded-2xl border border-white/20 shadow-xl p-8 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Chi tiết kết quả</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ResultItem label="Lương Gross" value={result.grossSalary} isHighlight />
                <ResultItem label="Bảo hiểm xã hội (8%)" value={-result.insuranceBHXH} isNegative />
                <ResultItem label="Bảo hiểm y tế (1.5%)" value={-result.insuranceBHYT} isNegative />
                <ResultItem label="Bảo hiểm thất nghiệp (1%)" value={-result.insuranceBHTN} isNegative />
                <div className="col-span-full border-t border-white/20 my-2"></div>
                <ResultItem label="Giảm trừ gia cảnh bản thân" value={-result.personalDeduction} isNegative />
                <ResultItem label="Giảm trừ người phụ thuộc" value={-result.dependentDeduction} isNegative />
                <div className="col-span-full border-t border-white/20 my-2"></div>
                <ResultItem label="Thu nhập tính thuế" value={result.taxableIncome} />
                <ResultItem label="Thuế Thu Nhập Cá Nhân" value={-result.totalTax} isNegative className="text-red-500" />
                <div className="col-span-full border-t border-white/20 my-2"></div>
                <ResultItem label="Lương Net (Thực nhận)" value={result.netSalary} isNet />
            </div>

            {result.taxBrackets.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-white/20 bg-white/20 dark:bg-black/20">
                    <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                        <thead className="bg-white/30 dark:bg-black/40 text-gray-800 dark:text-gray-100">
                            <tr>
                                <th className="px-4 py-3 border-b border-white/10">Bậc</th>
                                <th className="px-4 py-3 border-b border-white/10">Thu nhập tính thuế</th>
                                <th className="px-4 py-3 border-b border-white/10">Thuế suất</th>
                                <th className="px-4 py-3 border-b border-white/10 text-right">Tiền thuế nộp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.taxBrackets.map((bracket, index) => (
                                <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/10 transition-colors">
                                    <td className="px-4 py-3">{bracket.level}</td>
                                    <td className="px-4 py-3">
                                        Đến {bracket.to ? formatCurrency(bracket.to) : 'Trên 80.000.000'}
                                    </td>
                                    <td className="px-4 py-3">{bracket.rate}%</td>
                                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(bracket.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-white/30 dark:bg-black/40 font-semibold text-gray-800 dark:text-gray-100">
                            <tr>
                                <td colSpan={3} className="px-4 py-3 text-right">Tổng cộng tiền Thuế:</td>
                                <td className="px-4 py-3 text-right text-red-600 dark:text-red-400">{formatCurrency(result.totalTax)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}

function ResultItem({
    label,
    value,
    isHighlight,
    isNegative,
    isNet,
    className = '',
}: {
    label: string;
    value: number;
    isHighlight?: boolean;
    isNegative?: boolean;
    isNet?: boolean;
    className?: string;
}) {
    return (
        <div className={`flex justify-between items-center p-3 rounded-lg bg-white/10 dark:bg-white/5 shadow-sm ${className}`}>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{label}</span>
            <span
                className={`font-semibold ${isHighlight
                    ? 'text-lg text-blue-600 dark:text-blue-400'
                    : isNet
                        ? 'text-xl text-green-600 dark:text-green-400'
                        : isNegative
                            ? 'text-red-500 dark:text-red-400'
                            : 'text-gray-900 dark:text-white'
                    }`}
            >
                {isNegative && value > 0 ? '-' : ''}{formatCurrency(Math.abs(value))}
            </span>
        </div>
    );
}
