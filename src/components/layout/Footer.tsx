import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1117] border-t border-[#2D3748] pt-16 pb-8 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F04D32]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/Lab_logo.png" 
                alt="Infotech Lab Logo" 
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Information Technology Laboratory (Infotech) is a center for research, development, and technological exploration under the Informatics Department, University of Muhammadiyah Malang.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A222C] flex items-center justify-center text-gray-400 hover:bg-[#F04D32] hover:text-white transition-all border border-[#2D3748] hover:border-[#F04D32]">
                <span translate="no" className="material-symbols-outlined notranslate text-[20px]">language</span>
              </a>
              <a href="https://instagram.com/labit.umm" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1A222C] flex items-center justify-center text-gray-400 hover:bg-[#F04D32] hover:text-white transition-all border border-[#2D3748] hover:border-[#F04D32]">
                <span translate="no" className="material-symbols-outlined notranslate text-[20px]">photo_camera</span>
              </a>
              <a href="mailto:lab.informatika.umm@gmail.com" className="w-10 h-10 rounded-full bg-[#1A222C] flex items-center justify-center text-gray-400 hover:bg-[#F04D32] hover:text-white transition-all border border-[#2D3748] hover:border-[#F04D32]">
                <span translate="no" className="material-symbols-outlined notranslate text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-space-grotesk font-bold text-white tracking-wider text-sm uppercase mb-2">Quick Links</h4>
            <Link href="/" className="text-gray-400 hover:text-[#F04D32] text-sm transition-colors w-fit">Home</Link>
            <Link href="/profile" className="text-gray-400 hover:text-[#F04D32] text-sm transition-colors w-fit">Laboratory Profile</Link>
            <a href="#" className="text-gray-400 hover:text-[#F04D32] text-sm transition-colors w-fit">Services & Facilities</a>
            <a href="#" className="text-gray-400 hover:text-[#F04D32] text-sm transition-colors w-fit">Announcements</a>
          </div>

          {/* Contact & Address */}
          <div className="flex flex-col gap-4">
            <h4 className="font-space-grotesk font-bold text-white tracking-wider text-sm uppercase mb-2">Contact Us</h4>
            <div className="flex items-start gap-3">
              <span translate="no" className="material-symbols-outlined notranslate text-[#F04D32] text-[18px] mt-0.5">location_on</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                GKB III 6th Floor<br />
                University of Muhammadiyah Malang<br />
                Jl. Raya Tlogomas No. 246, Malang
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span translate="no" className="material-symbols-outlined notranslate text-[#F04D32] text-[18px]">mail</span>
              <a href="mailto:lab.informatika.umm@gmail.com" className="text-gray-400 hover:text-[#F04D32] text-sm transition-colors">
                lab.informatika.umm@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2D3748] flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="font-space-grotesk text-xs text-gray-500 uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} Infotech Laboratory UMM. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a className="font-space-grotesk text-xs text-gray-500 hover:text-[#F04D32] transition-colors uppercase tracking-wider" href="#">Privacy Policy</a>
            <a className="font-space-grotesk text-xs text-gray-500 hover:text-[#F04D32] transition-colors uppercase tracking-wider" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
