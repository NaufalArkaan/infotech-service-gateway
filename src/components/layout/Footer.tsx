export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#161C24] border-t border-[#2D3748]">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-[#F04D32] font-space-grotesk">
          INFOTECH PRECISION SYSTEMS
        </div>
        <p className="font-space-grotesk text-[10px] tracking-tight text-gray-500 uppercase">
          © 2026 LAB IDENTITY. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-label-caps text-[10px] text-gray-400 mb-1">ADMIN CONTACT</span>
          <a className="font-body-sm text-on-surface hover:text-[#F04D32] transition-colors" href="mailto:admin@infotech.pro">admin@infotech.pro</a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="font-label-caps text-[10px] text-gray-400 mb-1">SUPPORT</span>
          <a className="font-body-sm text-on-surface hover:text-[#F04D32] transition-colors" href="mailto:support@infotech.pro">support@infotech.pro</a>
        </div>
      </div>
      <div className="flex gap-4">
        <a className="font-space-grotesk text-[10px] tracking-tight text-gray-500 hover:text-[#F04D32] transition-colors uppercase" href="#">Privacy Policy</a>
        <a className="font-space-grotesk text-[10px] tracking-tight text-gray-500 hover:text-[#F04D32] transition-colors uppercase" href="#">SLA</a>
        <a className="font-space-grotesk text-[10px] tracking-tight text-gray-500 hover:text-[#F04D32] transition-colors uppercase" href="#">Status</a>
      </div>
    </footer>
  );
}
