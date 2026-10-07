"use client";

import React, { useState } from "react";
import Image from "next/image";

export function DistributionEnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    companyName: "",
    emailAddress: "",
    cityState: "",
    businessType: "",
    approxDistributionArea: "",
    messageRequirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "distribution",
          ...formData,
        }),
      });
    } catch {
      // Fallback submission
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-[#F7F1DF] py-8 sm:py-12 md:py-14 px-3 sm:px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto bg-[#F7F1DF] rounded-3xl sm:rounded-[36px] p-2 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column - Product Showcase Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-[540px] relative">
              <Image
                src="/images/distribution-products.png"
                alt="Popsmagic Seasoned & Salted Makhana Products Range"
                width={952}
                height={1076}
                priority
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Form & Submit */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* White Form Card */}
            <div className="bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-9 shadow-sm border border-zinc-100">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#05382B] tracking-tight mb-1">
                Distribution Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mb-6 font-medium">
                Fill in the details below and our team will get back to you with you soon.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                  <svg
                    className="w-16 h-16 text-emerald-600 fill-none stroke-current animate-bounce"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#05382B]">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md">
                    We have received your details. Our distribution team will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Company / Business Name */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter your business name"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* City/State */}
                    <div className="sm:col-span-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        City/State
                      </label>
                      <input
                        type="text"
                        name="cityState"
                        required
                        value={formData.cityState}
                        onChange={handleChange}
                        placeholder="Enter City/state"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Business Type */}
                    <div className="sm:col-span-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Business Type
                      </label>
                      <div className="relative">
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] appearance-none bg-white cursor-pointer pr-10"
                        >
                          <option value="" disabled>
                            Select Business Type
                          </option>
                          <option value="distributor">Distributor</option>
                          <option value="wholesaler">Wholesaler</option>
                          <option value="super_stockist">Super Stockist</option>
                          <option value="retail_chain">Retail Chain</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-900">
                          <svg
                            className="w-5 h-5 text-zinc-900 fill-none stroke-current"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Approx Distribution area */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Approx Distribution area
                      </label>
                      <input
                        type="text"
                        name="approxDistributionArea"
                        value={formData.approxDistributionArea}
                        onChange={handleChange}
                        placeholder="Enter your distribution area"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Message / Requirements */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Message / Requirements
                      </label>
                      <input
                        type="text"
                        name="messageRequirements"
                        value={formData.messageRequirements}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button aligned below form card inside or outside container */}
                  <div className="mt-6 flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#05382B] hover:bg-[#074636] active:scale-[0.99] text-white font-medium text-xs sm:text-sm md:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70 group cursor-pointer"
                    >
                      {loading ? "Submitting..." : "Submit distribution Enquiry"}
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-none stroke-current transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
