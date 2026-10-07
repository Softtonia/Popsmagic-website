"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { AuthModal } from "@/components/auth";
import { useCart } from "@/hooks/useCart";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  hasChevron?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    hasChevron: false,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Flavour Makhana",
    href: "/flavored-makhana",
    hasChevron: true,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z" />
        <circle cx="8" cy="8" r="1" />
        <circle cx="12" cy="7" r="1" />
        <circle cx="16" cy="8" r="1" />
      </svg>
    ),
  },
  {
    label: "Plain Makhana",
    href: "/plain-makhana",
    hasChevron: true,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A9 9 0 0 0 20 11V3h-8a9 9 0 0 0-9 9 9 9 0 0 0 8 8z" />
        <path d="M11 20c-3 0-6-3-6-6" />
      </svg>
    ),
  },
  {
    label: "Bulk Order",
    href: "/bulk-order",
    hasChevron: true,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: "Get Distribution",
    href: "/get-distribution",
    hasChevron: true,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L4 16" />
        <path d="M13 9h-2a2 2 0 1 0 0 4h3c.6 0 1.1-.2 1.4-.6L20 8" />
        <path d="M16 11l2 2" />
        <path d="M6 13l2 2" />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    href: "/contact",
    hasChevron: true,
    icon: (
      <svg
        className="w-6 h-6 text-[#05382b] fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();

  const totalCartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="w-full bg-[#faf6ee] dark:bg-[#121c18] border-b border-[#e8dfce]/80 dark:border-zinc-800 sticky top-0 z-30 shadow-xs">
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Left: 2-Line Hamburger Menu Icon (Mobile) & Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1 text-[#05382b] focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {/* 2-line thick hamburger icon matching screenshot */}
              <svg
                className="w-7 h-7 text-[#05382b] fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="3.2"
                strokeLinecap="round"
              >
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-0.5 group">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#05382b] dark:text-emerald-400 font-serif">
                popsmagic<span className="text-[10px] font-sans font-bold align-super ml-0.5">™</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-[#05382b] dark:text-emerald-400 border-b-2 border-[#05382b] dark:border-emerald-400 pb-0.5"
                      : "text-[#05382b]/80 hover:text-[#05382b] dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Utilities: Cart + User Profile Icon */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Cart Icon with Gold Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 text-[#05382b] hover:opacity-80 transition"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#05382b] fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="absolute -top-1.5 -right-2 bg-[#ebb439] text-[#05382b] text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
                {totalCartCount}
              </span>
            </button>

            {/* User Profile Icon - Triggers AuthModal */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="p-1 text-[#05382b] hover:opacity-80 transition"
              aria-label="Account"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#05382b] fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Matching Screenshot 2) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#faf6ee] dark:bg-[#121c18] flex flex-col p-6 animate-in slide-in-from-left duration-250 overflow-y-auto">
          {/* Top Close Button (Large X) */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#05382b] dark:text-zinc-200 hover:opacity-80"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-9 h-9 text-[#05382b] fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items List */}
          <nav className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-[#e8dfce] dark:border-zinc-800 text-[#05382b] dark:text-zinc-100 font-medium text-lg px-2 transition-colors ${
                    isActive ? "font-bold text-[#05382b]" : "hover:text-black"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>

                  {item.hasChevron && (
                    <svg
                      className="w-5 h-5 text-[#05382b] dark:text-zinc-400 fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer Account Link */}
          <div className="pt-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#05382b] text-white text-base font-semibold rounded-xl shadow-md"
            >
              <span>Account / Sign In</span>
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal (Login / Signup Popup) */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
