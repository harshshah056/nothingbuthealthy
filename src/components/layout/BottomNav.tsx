"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialIcon from "../ui/MaterialIcon";
import { MOBILE_NAV_LINKS } from "@/utils/constants";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-3xl bg-surface/90 backdrop-blur-xl shadow-[0_-8px_32px_0_rgba(26,28,25,0.06)]">
      <div className="flex justify-around items-center h-20 px-4 pb-[env(safe-area-inset-bottom)]">
        {MOBILE_NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white rounded-full px-4 py-1.5 scale-110"
                  : "text-outline"
              }`}
            >
              <MaterialIcon icon={link.icon} />
              <span className="font-label text-[10px] font-bold uppercase tracking-tighter">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
