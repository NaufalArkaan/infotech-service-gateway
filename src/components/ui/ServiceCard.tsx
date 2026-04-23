import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-[#212B36] border border-[#2D3748] p-md rounded-xl transition-all duration-300 hover:border-[#F04D32] hover:translate-y-[-4px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-sm">
          <div className="w-12 h-12 bg-[#161C24] border border-[#2D3748] rounded flex items-center justify-center text-[#F04D32] group-hover:bg-[#F04D32] group-hover:text-white transition-colors">
            <span translate="no" className="material-symbols-outlined notranslate text-3xl">{service.icon}</span>
          </div>
          {service.isNewDomain && (
            <span className="bg-[#F04D32]/10 text-[#F04D32] font-label-caps text-[10px] px-2 py-1 rounded-full uppercase">
              New Domain
            </span>
          )}
        </div>
        <h3 className="font-h3 text-h3 text-on-surface mb-xs">{service.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {service.description}
        </p>
      </div>
      <a 
        href={service.url}
        className="mt-md pt-sm border-t border-[#2D3748] flex flex-wrap items-center justify-between text-[#F04D32] font-label-caps gap-2 cursor-pointer no-underline break-words"
      >
        <span translate="no" className="notranslate flex-1 min-w-0 break-words">{service.displayUrl}</span>
        <span translate="no" className="material-symbols-outlined notranslate text-sm shrink-0">open_in_new</span>
      </a>
    </div>
  );
}
