import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "../ui/MaterialIcon";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
} from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 px-6 hidden md:block">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Nothing But Healthy – Home">
            <Image
              src="/logo.png"
              alt="Nothing But Healthy logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
            <span className="font-headline text-xl font-extrabold text-primary uppercase tracking-widest leading-tight">
              Nothing But
              <br />
              Healthy
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm max-w-sm">
            Ahmedabad&apos;s daily fruit bowl &amp; cold-pressed juice
            subscription. Hand-cut at 4 AM, delivered before 9 AM. Farm-fresh,
            zero preservatives.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-on-surface">
            Links
          </h5>
          <ul className="space-y-2 text-sm text-on-surface-variant font-medium">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-primary transition-colors">
                Subscription Plans
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-primary transition-colors">
                Corporate Orders
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-sm uppercase tracking-widest text-on-surface">
            Get in touch
          </h5>
          <ul className="space-y-3 text-sm text-on-surface-variant font-medium">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MaterialIcon icon="chat" size="18px" className="text-primary" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-[18px] h-[18px] text-primary" />
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <MaterialIcon icon="chat" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/20">
        <p className="text-on-surface-variant text-xs text-center">
          &copy; {new Date().getFullYear()} Nothing But Healthy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
