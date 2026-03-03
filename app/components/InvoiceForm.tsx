"use client";

import React, { useState } from "react";

type InvoiceItem = {
    id: string;
    name: string;
    unit: string;
    quantity: number;
    price: number;
};

export default function InvoiceForm() {
    const [buyerInfo, setBuyerInfo] = useState({
        name: "Hùng",
        company: "",
        address: "",
        taxId: "",
        paymentMethod: "Chuyển khoản",
        account: "",
    });

    const [invoiceInfo, setInvoiceInfo] = useState({
        date: "2025-12-14",
        symbol: "2K25THH",
        number: "8",
        currency: "VND",
        exchangeRate: 1,
    });

    const [items, setItems] = useState<InvoiceItem[]>([
        {
            id: "1",
            name: "Toán 7",
            unit: "Khóa",
            quantity: 1,
            price: 400000,
        },
    ]);

    const sellerInfo = {
        name: "CÔNG TY CP MẮT BÃO INVOCIE",
        taxId: "0302712571-999",
        address: "12A Núi Thành, Phường Tân Bình, Tp HCM",
        phone: "0903615059",
        bankAccount: "0071003931964, Ngân Hàng Vietcombank TP.HCM",
    };

    const handleItemChange = (
        id: string,
        field: keyof InvoiceItem,
        value: string | number
    ) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
        );
    };

    const addItem = () => {
        setItems((prev) => [
            ...prev,
            {
                id: Math.random().toString(36).substr(2, 9),
                name: "",
                unit: "",
                quantity: 1,
                price: 0,
            },
        ]);
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalAmount = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    // Helper to format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: invoiceInfo.currency,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-4 md:p-8 font-sans text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
            <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-white">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                            HÓA ĐƠN BÁN HÀNG
                        </h1>
                        <p className="text-indigo-100 text-lg opacity-90">Sales Invoice</p>
                    </div>
                    <div className="mt-8 md:mt-0 glassmorphism p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full md:w-auto shadow-sm">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            <div className="text-sm text-indigo-100">Ký hiệu (Symbol):</div>
                            <input
                                className="bg-transparent border-b border-indigo-200/50 text-white focus:outline-none focus:border-white transition-colors"
                                value={invoiceInfo.symbol}
                                onChange={(e) =>
                                    setInvoiceInfo({ ...invoiceInfo, symbol: e.target.value })
                                }
                            />
                            <div className="text-sm text-indigo-100">Số (No):</div>
                            <input
                                className="bg-transparent border-b border-indigo-200/50 text-white focus:outline-none focus:border-white transition-colors font-medium"
                                value={invoiceInfo.number}
                                onChange={(e) =>
                                    setInvoiceInfo({ ...invoiceInfo, number: e.target.value })
                                }
                            />
                            <div className="text-sm text-indigo-100">Ngày (Date):</div>
                            <input
                                type="date"
                                className="bg-transparent border-b border-indigo-200/50 text-white focus:outline-none focus:border-white transition-colors"
                                value={invoiceInfo.date}
                                onChange={(e) =>
                                    setInvoiceInfo({ ...invoiceInfo, date: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-10 space-y-10">

                    {/* Company & Buyer Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Seller Info */}
                        <div className="space-y-4 p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                Đơn vị bán hàng
                            </h2>
                            <div className="space-y-2 text-sm">
                                <p className="font-bold text-base text-neutral-900 dark:text-white">{sellerInfo.name}</p>
                                <div className="flex gap-2">
                                    <span className="text-neutral-500 w-24">Mã số thuế:</span>
                                    <span className="font-medium">{sellerInfo.taxId}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-neutral-500 w-24">Địa chỉ:</span>
                                    <span>{sellerInfo.address}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-neutral-500 w-24">Điện thoại:</span>
                                    <span>{sellerInfo.phone}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-neutral-500 w-24">Tài khoản:</span>
                                    <span>{sellerInfo.bankAccount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Buyer Info */}
                        <div className="space-y-4 p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm relative group">
                            <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                Thông tin người mua
                            </h2>
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                    <label className="text-sm font-medium text-neutral-500 w-32">Họ tên:</label>
                                    <input
                                        className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        value={buyerInfo.name}
                                        onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                    <label className="text-sm font-medium text-neutral-500 w-32">Tên đơn vị:</label>
                                    <input
                                        className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        value={buyerInfo.company}
                                        onChange={(e) => setBuyerInfo({ ...buyerInfo, company: e.target.value })}
                                        placeholder="Tên công ty (nếu có)"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                    <label className="text-sm font-medium text-neutral-500 w-32">Địa chỉ:</label>
                                    <input
                                        className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        value={buyerInfo.address}
                                        onChange={(e) => setBuyerInfo({ ...buyerInfo, address: e.target.value })}
                                        placeholder="Địa chỉ xuất hóa đơn"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                    <label className="text-sm font-medium text-neutral-500 w-32">Mã số thuế:</label>
                                    <input
                                        className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        value={buyerInfo.taxId}
                                        onChange={(e) => setBuyerInfo({ ...buyerInfo, taxId: e.target.value })}
                                        placeholder="MST"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Settings */}
                    <div className="flex flex-wrap items-center gap-6 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Hình thức TT:</label>
                            <select
                                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                value={buyerInfo.paymentMethod}
                                onChange={(e) => setBuyerInfo({ ...buyerInfo, paymentMethod: e.target.value })}
                            >
                                <option value="Chuyển khoản">Chuyển khoản</option>
                                <option value="Tiền mặt">Tiền mặt</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                            <label className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Tài khoản:</label>
                            <input
                                className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                value={buyerInfo.account}
                                onChange={(e) => setBuyerInfo({ ...buyerInfo, account: e.target.value })}
                                placeholder="Số TK người mua (nếu có)"
                            />
                        </div>
                        <div className="flex items-center gap-4 border-l border-neutral-200 dark:border-neutral-700 pl-6">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Tiền tệ:</label>
                                <input
                                    className="w-20 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm outline-none text-center font-medium"
                                    value={invoiceInfo.currency}
                                    onChange={(e) => setInvoiceInfo({ ...invoiceInfo, currency: e.target.value })}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Tỷ giá:</label>
                                <input
                                    type="number"
                                    className="w-24 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm outline-none text-right font-medium"
                                    value={invoiceInfo.exchangeRate}
                                    onChange={(e) => setInvoiceInfo({ ...invoiceInfo, exchangeRate: Number(e.target.value) })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm border-b border-neutral-200 dark:border-neutral-700">
                                        <th className="py-4 px-4 font-semibold w-16 text-center">STT</th>
                                        <th className="py-4 px-4 font-semibold">Tên hàng hóa, dịch vụ</th>
                                        <th className="py-4 px-4 font-semibold w-24">Đơn vị</th>
                                        <th className="py-4 px-4 font-semibold w-28 text-center">Số lượng</th>
                                        <th className="py-4 px-4 font-semibold w-40 text-right">Đơn giá</th>
                                        <th className="py-4 px-4 font-semibold w-40 text-right">Thành tiền</th>
                                        <th className="py-4 px-4 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                                    {items.map((item, index) => (
                                        <tr key={item.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                                            <td className="py-3 px-4 text-center font-medium text-neutral-500">{index + 1}</td>
                                            <td className="py-3 px-4">
                                                <input
                                                    className="w-full bg-transparent border border-transparent group-hover:bg-white dark:group-hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-700 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all"
                                                    value={item.name}
                                                    onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                                                    placeholder="Nhập tên hàng hóa..."
                                                />
                                            </td>
                                            <td className="py-3 px-4">
                                                <input
                                                    className="w-full bg-transparent border border-transparent group-hover:bg-white dark:group-hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-700 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all"
                                                    value={item.unit}
                                                    onChange={(e) => handleItemChange(item.id, "unit", e.target.value)}
                                                    placeholder="Khoá/Cái"
                                                />
                                            </td>
                                            <td className="py-3 px-4">
                                                <input
                                                    type="number"
                                                    className="w-full text-center bg-transparent border border-transparent group-hover:bg-white dark:group-hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-700 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all"
                                                    value={item.quantity}
                                                    min={1}
                                                    onChange={(e) => handleItemChange(item.id, "quantity", Number(e.target.value))}
                                                />
                                            </td>
                                            <td className="py-3 px-4">
                                                <input
                                                    type="number"
                                                    className="w-full text-right bg-transparent border border-transparent group-hover:bg-white dark:group-hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-700 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all"
                                                    value={item.price}
                                                    onChange={(e) => handleItemChange(item.id, "price", Number(e.target.value))}
                                                />
                                            </td>
                                            <td className="py-3 px-4 text-right font-medium text-neutral-900 dark:text-neutral-100">
                                                {formatCurrency(item.quantity * item.price)}
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-neutral-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100"
                                                    title="Xóa dòng"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200 dark:border-neutral-700">
                            <button
                                onClick={addItem}
                                className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                Thêm dòng mới
                            </button>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div className="w-full md:w-2/3">
                                <div className="mb-2 text-sm text-neutral-500 font-medium">Số tiền viết bằng chữ:</div>
                                <div className="p-4 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 italic text-neutral-700 dark:text-neutral-300 shadow-inner">
                                    Bốn trăm nghìn đồng chẵn {/* In a real app, use a library to convert number to words */}
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 space-y-3">
                                <div className="flex justify-between items-center text-lg font-bold text-neutral-900 dark:text-white border-b-2 border-neutral-800 dark:border-neutral-200 pb-2">
                                    <span>Tổng cộng:</span>
                                    <span className="text-2xl text-blue-600 dark:text-blue-400">{formatCurrency(totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="px-8 py-6 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex justify-end gap-4">
                    <button className="px-6 py-2.5 rounded-xl font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                        Hủy bỏ
                    </button>
                    <button className="px-6 py-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                        Lưu hóa đơn
                    </button>
                </div>

            </div>
        </div>
    );
}
