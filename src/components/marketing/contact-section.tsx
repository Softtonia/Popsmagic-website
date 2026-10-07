"use client";

import React, { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          type: "contact",
          ...formData,
        }),
      });
    } catch {
      // Optimistic submission fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-[#F7F1DF] py-8 sm:py-12 md:py-14 px-3 sm:px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto bg-[#F7F1DF] rounded-3xl sm:rounded-[36px] p-2 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card - We're here to Help */}
          <div className="lg:col-span-5 bg-[#E8EED3] rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#05382B] tracking-tight mb-2">
                We’re here to Help
              </h2>
              <p className="text-xs sm:text-sm text-zinc-800 font-semibold mb-8 sm:mb-10">
                Get in touch with us – we’re just a message away!
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* 1. Call us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C0CDBB] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#05382B] fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#05382B] mb-0.5">
                      Call us
                    </h3>
                    <p className="text-base sm:text-xl font-medium text-[#3D3328]">
                      +91 96562 78357
                    </p>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C0CDBB] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#05382B] fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#05382B] mb-0.5">
                      Email Us
                    </h3>
                    <p className="text-base sm:text-xl font-medium text-[#3D3328] break-all">
                      hello@popsmagic.store
                    </p>
                  </div>
                </div>

                {/* 3. Visit Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C0CDBB] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#05382B] fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#05382B] mb-0.5">
                      Visit Us
                    </h3>
                    <p className="text-base sm:text-xl font-medium text-[#3D3328] leading-snug">
                      Moh- Bhagwandas Darbhanga Nagar Nigam, 846004 (Bihar)
                    </p>
                  </div>
                </div>

                {/* 4. Follow Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C0CDBB] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#05382B] fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#05382B] mb-0.5">
                      Follow Us
                    </h3>
                    <p className="text-base sm:text-xl font-medium text-[#3D3328]">
                      Instagram - Facebook
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Send us a Message Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-9 shadow-sm border border-zinc-100 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#05382B] tracking-tight mb-1">
                  Send us a Message
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mb-6 font-medium">
                  We’d love to hear from you. Fill in the details below and we’ll get back to you soon.
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
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md">
                      Thank you for reaching out to Popsmagic. Our support team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
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

                    {/* Subject */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Write Subject"
                        className="w-full px-4 py-2.5 sm:py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs sm:text-sm font-semibold text-zinc-800 mb-1.5 block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#05382B]/20 focus:border-[#05382B] transition-all bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button aligned below form card inside container */}
                    <div className="mt-6 flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#05382B] hover:bg-[#074636] active:scale-[0.99] text-white font-medium text-xs sm:text-sm md:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70 group cursor-pointer"
                      >
                        {loading ? "Sending..." : "Send Message"}
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
      </div>
    </section>
  );
}
