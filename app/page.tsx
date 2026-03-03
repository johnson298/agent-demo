import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-[Inter,sans-serif]">
      {/* Top Banner */}
      <div className="bg-yellow-600/20 text-yellow-400 text-sm py-2 px-4 flex justify-between items-center border-b border-white/5">
        <div>0778 164 777</div>
        <div>
          <span className="animate-pulse font-medium">★ LỘ TRÌNH SỬ DỤNG TÍN DỤNG THÔNG MINH ★</span>
        </div>
        <div className="hidden md:block">contact@daotaotindung.com</div>
      </div>

      {/* Header */}
      <header className="px-6 py-4 flex justify-center lg:justify-between items-center bg-[#0a0a0a] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 tracking-tighter">
          HVTD EDUHUB
        </div>
        <nav className="hidden lg:flex gap-8 text-sm uppercase font-bold tracking-wide text-gray-300">
          <Link href="#" className="hover:text-yellow-400 transition-colors">Nhắc nợ</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">Trung gian</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">Cộng đồng</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">Hỗ trợ</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">Tư vấn</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="inline-block px-5 py-2 border border-yellow-500/30 rounded-full bg-yellow-500/5 text-yellow-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            Đặc quyền cộng đồng HVTD-EDUHUB
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight">
            LỘ TRÌNH SỬ DỤNG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-sm">
              TÍN DỤNG THÔNG MINH
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            Hệ thống hóa kiến thức tài chính. Biến rủi ro thành cơ hội, xây dựng nền tảng tài chính cá nhân vững chắc vượt qua các giai đoạn khó khăn.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 relative z-10">
            {['KHÔNG CẦN NHẬP THẺ', 'KHÔNG GIỚI HẠN THỜI GIAN', 'KHÔNG SPAM'].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 p-5 bg-gradient-to-b from-[#111] to-black rounded-[1.5rem] border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.05)] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 flex items-center justify-center border border-yellow-500/10 shadow-inner">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] font-black text-white/90 uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Sub-card */}
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-yellow-500/20 transition-all duration-1000" />

          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex gap-6 border-b border-white/10 pb-4">
              <button className="text-yellow-400 font-bold border-b-2 border-yellow-400 pb-2 px-2 text-lg">Đăng ký ngay</button>
              <button className="text-gray-500 font-bold hover:text-white pb-2 px-2 text-lg transition-colors">Đăng nhập</button>
            </div>

            <button className="w-full py-4 rounded-2xl border border-white/20 hover:bg-white/5 flex items-center justify-center gap-3 transition-colors font-bold text-[15px]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Tiếp tục với Google
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs font-bold uppercase tracking-widest">hoặc bằng email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <input type="text" placeholder="Họ và tên" className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/20 focus:outline-none focus:border-yellow-500 focus:bg-black transition-colors" />
            <input type="email" placeholder="Email của bạn" className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/20 focus:outline-none focus:border-yellow-500 focus:bg-black transition-colors" />
            <input type="text" placeholder="Số điện thoại (Nhận mã ưu đãi)" className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/20 focus:outline-none focus:border-yellow-500 focus:bg-black transition-colors" />

            <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black text-lg hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all mt-2">
              ĐĂNG KÝ VÀO XEM NGAY
            </button>
          </div>
        </div>
      </section>

      {/* Media & Details */}
      <section className="max-w-5xl mx-auto px-6 py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="aspect-video rounded-[3rem] bg-[#0a0a0a] border border-white/10 overflow-hidden relative flex items-center justify-center group cursor-pointer mb-24 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-black/80 mix-blend-overlay"></div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center pl-2 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(234,179,8,0.3)] cursor-pointer z-10">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">LỘ TRÌNH 100+ VIDEO</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </div>

        <div className="space-y-6 relative z-10">
          {/* Stage 01 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0f0f0f] to-black border border-white/5 hover:border-yellow-500/30 transition-colors shadow-xl group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 font-bold text-xs uppercase tracking-widest rounded-lg mb-4 border border-yellow-500/20">Stage 01</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Hiểu rõ bản chất & Điểm tín dụng CIC</h3>
                <p className="text-gray-400 text-lg max-w-2xl font-medium">Luật chơi thật sự của các ngân hàng. Cách vận hành điểm số, dọn dẹp nợ xấu và các chiến lược nòng cốt.</p>
              </div>
              <div className="text-left md:text-right shrink-0 bg-white/5 p-4 rounded-2xl w-full md:w-auto">
                <div className="text-4xl font-black text-white mb-1">8 <span className="text-lg text-gray-500 font-bold tracking-normal uppercase">Videos</span></div>
                <div className="text-yellow-400 font-bold text-lg">91 phút</div>
              </div>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0f0f0f] to-black border border-white/5 hover:border-yellow-500/30 transition-colors shadow-xl group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 font-bold text-xs uppercase tracking-widest rounded-lg mb-4 border border-yellow-500/20">Stage 02</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Xây dựng hồ sơ không cần chứng minh thu nhập</h3>
                <p className="text-gray-400 text-lg max-w-2xl font-medium">Tuyệt chiêu tạo nên Profile đẹp trong mắt ngân hàng để dễ dàng giải ngân nhanh chóng.</p>
              </div>
              <div className="text-left md:text-right shrink-0 bg-white/5 p-4 rounded-2xl w-full md:w-auto">
                <div className="text-4xl font-black text-white mb-1">12 <span className="text-lg text-gray-500 font-bold tracking-normal uppercase">Videos</span></div>
                <div className="text-yellow-400 font-bold text-lg">285 phút</div>
              </div>
            </div>
          </div>

          {/* Stage 03 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0f0f0f] to-black border border-white/5 hover:border-yellow-500/30 transition-colors shadow-xl group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 font-bold text-xs uppercase tracking-widest rounded-lg mb-4 border border-yellow-500/20">Stage 03</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Đỉnh cao xử lý nợ & Phản hồi Thẩm định</h3>
                <p className="text-gray-400 text-lg max-w-2xl font-medium">Các kịch bản khó nhất và cách vượt qua bộ phận thẩm định khắt khe của ngân hàng 1 cách an toàn.</p>
              </div>
              <div className="text-left md:text-right shrink-0 bg-white/5 p-4 rounded-2xl w-full md:w-auto">
                <div className="text-4xl font-black text-white mb-1">5 <span className="text-lg text-gray-500 font-bold tracking-normal uppercase">Videos</span></div>
                <div className="text-yellow-400 font-bold text-lg">115 phút</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Gallery */}
      <section className="bg-gradient-to-b from-transparent to-[#050505] py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">CÁC SỰ KIỆN ĐÃ TỔ CHỨC</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            <div className="bg-neutral-800 rounded-3xl border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors"></div>
            </div>
            <div className="bg-neutral-900/80 rounded-3xl border border-white/5 overflow-hidden md:col-span-2 md:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 to-black/50"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold text-yellow-400 mb-2 tracking-widest uppercase">Gala Dinner</p>
                <p className="text-2xl font-bold">Hội viên tin dụng Elite 2025</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-3xl border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors"></div>
            </div>
            <div className="bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors"></div>
            </div>
            <div className="bg-neutral-800/80 rounded-3xl border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="bg-black py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
            BẠN CÓ CÂU HỎI VỀ <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-sm">LỘ TRÌNH?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để được giải đáp mọi thắc mắc ngay lập tức và hoàn toàn miễn phí.
          </p>
          <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)]">
            ĐẶT HẸN NGAY
          </button>

          <div className="flex justify-center gap-10 mt-24 pt-10 border-t border-white/10">
            <a href="#" className="text-gray-500 font-bold hover:text-yellow-400 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Facebook
            </a>
            <a href="#" className="text-gray-500 font-bold hover:text-yellow-400 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.64l-4.23-2.12c-.52-.26-1.12-.2-1.58.17l-1.98 1.63c-2.45-1.1-4.48-3.13-5.58-5.58l1.63-1.98c.37-.46.43-1.06.17-1.58L7.36 3C6.9 2.05 5.8 1.62 4.86 1.94L2.83 2.59c-.48.15-.83.58-.83 1.08 0 9.57 7.76 17.33 17.33 17.33.5 0 .93-.35 1.08-.83l.65-2.03c.32-.94-.11-2.04-1.06-2.5z" /></svg>
              Support System
            </a>
            <a href="#" className="text-gray-500 font-bold hover:text-yellow-400 transition-colors flex items-center gap-2">
              Hotline: 0778 164 777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
