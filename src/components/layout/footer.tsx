import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF6EE] dark:bg-[#121c18] border-t border-[#e8dfce]/80 dark:border-zinc-800 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <Link href="/" className="inline-block group mb-3">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#05382b] dark:text-emerald-400 font-serif">
                popsmagic<span className="text-[12px] font-sans font-bold align-super ml-0.5">™</span>
              </span>
            </Link>
            <p className="text-[#05382b]/85 dark:text-zinc-300 text-[14px] leading-relaxed font-normal">
              Popsmagic brings a delicious twist to everyday snacking with crunchy, flavour-packed makhana made for every mood. From classic roasted to exciting flavours, snack smarter, crunchier, and happier with Popsmagic.
            </p>
          </div>

          {/* Column 2: Shop Categories */}
          <div>
            <h3 className="text-[17px] font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-4">
              Shop Categories
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#05382b]/85 dark:text-zinc-300">
              <li>
                <Link href="/categories" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Bundles & Combos
                </Link>
              </li>
              <li>
                <Link href="/flavored-makhana" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Classic Salted
                </Link>
              </li>
              <li>
                <Link href="/bulk-order" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/flavored-makhana" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Roasted Makhana
                </Link>
              </li>
              <li>
                <Link href="/plain-makhana" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Plain Makhana
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-[17px] font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-4">
              Important Links
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#05382b]/85 dark:text-zinc-300">
              <li>
                <Link href="/about" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h3 className="text-[17px] font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-4">
              Policies
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#05382b]/85 dark:text-zinc-300">
              <li>
                <Link href="/terms-of-service" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return-cancellation-policy" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Return, refund & cancellation policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Details & Social Icons */}
          <div>
            <h3 className="text-[17px] font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-[13.5px] text-[#05382b]/90 dark:text-zinc-300 leading-snug">
              <p className="font-bold text-[#05382b] dark:text-white text-[14px]">
                Popsmagic Foods Private Limited
              </p>
              <p>
                Moh- Bhagwandas Darbhanga Nagar Nigam, Near by Back of Rain Basera 846004 (Bihar)
              </p>
              <p>
                Reach us at : <span className="font-bold text-[#05382b] dark:text-emerald-400">8076306373</span>
              </p>
              <p>
                GSTIN : <span className="font-bold text-[#05382b] dark:text-emerald-400">10AARCP3424B1ZX</span>
              </p>
              <p>
                <a
                  href="mailto:hello@popsmagic.store"
                  className="text-[#05382b] dark:text-emerald-400 hover:underline font-medium block mt-1"
                >
                  hello@popsmagic.store
                </a>
              </p>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-4 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-zinc-950 transition"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918076306373"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-zinc-950 transition"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.144 4.184 4.187-1.096z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Google"
                className="w-8 h-8 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-zinc-950 transition font-serif font-bold text-sm"
              >
                G
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-zinc-950 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-8 border-t border-[#05382b]/15 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#05382b] dark:text-zinc-400">
          <p>
            © 2026 All rights reserved. <span className="font-bold text-[#05382b] dark:text-emerald-300">Popsmagic Foods Private Limited</span>
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            <Link href="/privacy-policy" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-[#05382b] dark:hover:text-white hover:underline transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
