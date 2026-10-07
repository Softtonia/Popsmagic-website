import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config";

export interface AnnouncementBarProps {
  discountText?: string;
  discountHighlight?: string;
  ctaText?: string;
  ctaLink?: string;
  freeShippingText?: string;
}

export function AnnouncementBar({
  discountText = "ON YOUR FIRST ORDER",
  discountHighlight = "GET 10% OFF",
  ctaText = "SHOP NOW →",
  ctaLink = "/shop",
  freeShippingText = "Free Shipping on Orders Above ₹499",
}: AnnouncementBarProps) {
  return (
    <div className="w-full bg-[#05382b] text-white text-xs py-2 px-4 border-b-2 border-[#ebb439] relative z-40">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Left: Social Media Links */}
        <div className="hidden md:flex items-center gap-3 text-zinc-300">
          <a
            href={siteConfig.links.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ebb439] transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <span className="w-px h-3.5 bg-emerald-800/80" />

          <a
            href={siteConfig.links.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ebb439] transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Center: Promotional Banner with Botanical Vines & CTA */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center">
          {/* Decorative Vine (Left) */}
          <span className="hidden lg:inline-flex items-center text-emerald-400/80 text-sm select-none">
            🍃 🍊 🎃 🌿
          </span>

          <div className="flex items-center gap-2.5 flex-wrap justify-center font-medium tracking-wide">
            <span className="uppercase">
              <strong className="text-[#ebb439] font-extrabold mr-1">
                {discountHighlight}
              </strong>
              {discountText}
            </span>

            <Link
              href={ctaLink}
              className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#ebb439] hover:bg-[#d89f26] text-[#05382b] font-bold text-[11px] tracking-wider transition-transform hover:scale-105 shadow-sm ml-1"
            >
              {ctaText}
            </Link>
          </div>

          {/* Decorative Vine (Right) */}
          <span className="hidden lg:inline-flex items-center text-emerald-400/80 text-sm select-none">
            🌿 🎃 🍊 🍃
          </span>
        </div>

        {/* Right: Free Shipping Offer */}
        <div className="hidden sm:flex items-center gap-2 text-emerald-100/90 font-medium">
          <svg
            className="w-4 h-4 text-[#ebb439] fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <span>{freeShippingText}</span>
        </div>
      </div>
    </div>
  );
}
