"use client";

import React, { useState } from "react";

export interface FlavorOption {
  id: string;
  name: string;
  badgeBg: string;
  icon: string;
}

const FLAVORS: FlavorOption[] = [
  { id: "cheese-burst", name: "Cheese Burst", badgeBg: "bg-amber-500", icon: "🧀" },
  { id: "peri-peri", name: "Peri-Peri", badgeBg: "bg-red-600", icon: "🌶️" },
  { id: "caramel-bliss", name: "Caramel Bliss", badgeBg: "bg-amber-700", icon: "🍯" },
  { id: "tangy-tomato", name: "Tangy Tomato", badgeBg: "bg-rose-600", icon: "🍅" },
  { id: "pudina-magic", name: "Pudina Magic", badgeBg: "bg-emerald-600", icon: "🌿" },
  { id: "roasted", name: "Roasted", badgeBg: "bg-green-700", icon: "🍿" },
  { id: "cream-onion", name: "Cream & Onion", badgeBg: "bg-emerald-800", icon: "🧅" },
];

export function BulkOrderStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Business Details
    fullName: "",
    companyName: "",
    mobileNumber: "",
    emailAddress: "",
    businessType: "",

    // Step 2: Requirement Details
    selectedFlavors: ["cheese-burst"] as string[],
    estimatedQuantity: "",
    purchaseFrequency: "",
    packagingRequirement: "",
    packSize: "100g",

    // Step 3: Delivery Details
    state: "",
    deliveryCity: "",
    deliveryDate: "",
    targetPrice: "",
    gstRequired: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFlavorSelect = (flavorId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedFlavors.includes(flavorId);
      if (exists) {
        return {
          ...prev,
          selectedFlavors: prev.selectedFlavors.filter((f) => f !== flavorId),
        };
      } else {
        return {
          ...prev,
          selectedFlavors: [...prev.selectedFlavors, flavorId],
        };
      }
    });
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="b2b-form" className="w-full py-12 sm:py-16 bg-[#FAF6EE] dark:bg-[#0b1410] text-[#05382B] dark:text-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Outer White Card Container matching reference image */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] sm:rounded-[2.5rem] border border-[#e5dfd3] dark:border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* STEP PROGRESS INDICATOR HEADER */}
          <div className="flex items-center justify-center max-w-xl mx-auto mb-10 sm:mb-14 relative">
            
            {/* Step 1 Node */}
            <div className="flex flex-col items-center relative z-10">
              <button
                type="button"
                onClick={() => currentStep > 1 && setCurrentStep(1)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center transition-all ${
                  currentStep === 1
                    ? "bg-[#05382B] text-white shadow-lg scale-110"
                    : currentStep > 1
                    ? "bg-[#05382B] text-white"
                    : "bg-white border-2 border-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700"
                }`}
              >
                {currentStep > 1 ? "✓" : "1"}
              </button>
              <span className={`text-xs sm:text-sm font-bold mt-2.5 ${currentStep >= 1 ? "text-[#05382B] dark:text-emerald-400" : "text-zinc-400"}`}>
                Business
              </span>
            </div>

            {/* Connecting Line 1-2 */}
            <div className={`flex-1 h-[2px] mx-2 sm:mx-4 transition-colors ${currentStep >= 2 ? "bg-[#05382B] dark:bg-emerald-500" : "bg-zinc-200 dark:bg-zinc-700"}`} />

            {/* Step 2 Node */}
            <div className="flex flex-col items-center relative z-10">
              <button
                type="button"
                onClick={() => currentStep > 2 && setCurrentStep(2)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center transition-all ${
                  currentStep === 2
                    ? "bg-[#05382B] text-white shadow-lg scale-110"
                    : currentStep > 2
                    ? "bg-[#05382B] text-white"
                    : "bg-white border-2 border-zinc-300 text-[#05382B] dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
                }`}
              >
                {currentStep > 2 ? "✓" : "2"}
              </button>
              <span className={`text-xs sm:text-sm font-bold mt-2.5 ${currentStep >= 2 ? "text-[#05382B] dark:text-emerald-400" : "text-zinc-400"}`}>
                Requirement
              </span>
            </div>

            {/* Connecting Line 2-3 */}
            <div className={`flex-1 h-[2px] mx-2 sm:mx-4 transition-colors ${currentStep >= 3 ? "bg-[#05382B] dark:bg-emerald-500" : "bg-zinc-200 dark:bg-zinc-700"}`} />

            {/* Step 3 Node */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center transition-all ${
                  currentStep === 3
                    ? "bg-[#05382B] text-white shadow-lg scale-110"
                    : "bg-white border-2 border-zinc-300 text-[#05382B] dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
                }`}
              >
                3
              </div>
              <span className={`text-xs sm:text-sm font-bold mt-2.5 ${currentStep >= 3 ? "text-[#05382B] dark:text-emerald-400" : "text-zinc-400"}`}>
                Delivery
              </span>
            </div>

          </div>

          {/* SUBMISSION CONFIRMATION SCREEN */}
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 max-w-lg mx-auto animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">
                🎉
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#05382B] dark:text-white">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Our B2B team has received your inquiry. A wholesale manager will contact you at <strong className="text-[#05382B] dark:text-emerald-400">{formData.emailAddress || formData.mobileNumber || "your contact number"}</strong> within 2-4 business hours with custom pricing.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="bg-[#05382B] hover:bg-[#03281f] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div>

              {/* STEP 1: BUSINESS DETAILS */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-200">
                  
                  {/* Left Column: Form Fields */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#05382B] dark:text-white tracking-tight">
                        Tell Us About Your Business
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                        Share your business details so our B2B team can understand your requirements.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          WhatsApp / Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="Enter mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          placeholder="Enter your business email"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Business Type */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        >
                          <option value="">Select business type</option>
                          <option value="distributor">Distributor / Wholesaler</option>
                          <option value="retailer">Retailer / Supermarket</option>
                          <option value="gifting">Corporate Gifting / HR</option>
                          <option value="horeca">HoReCa (Hotel, Restaurant, Cafe)</option>
                          <option value="ecommerce">E-commerce Seller</option>
                          <option value="exporter">Exporter</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Continue Button */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 bg-[#05382B] hover:bg-[#03281f] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition"
                      >
                        <span>Continue</span>
                        <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Visual Card */}
                  <div className="lg:col-span-5 bg-[#E4EFE0] dark:bg-[#13231a] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center min-h-[420px] relative overflow-hidden border border-[#d3e5cb] dark:border-emerald-950">
                    <div className="space-y-2">
                      <p className="font-script text-3xl sm:text-4xl text-[#05382B] dark:text-emerald-400 font-bold">
                        Let's Grow Together
                      </p>
                    </div>

                    {/* Storefront Visual Graphic */}
                    <div className="my-6 relative flex flex-col items-center">
                      <div className="text-6xl sm:text-7xl">🏪</div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-3xl">🍿</span>
                        <span className="text-3xl">🫙</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#05382B] dark:text-emerald-200 max-w-xs leading-relaxed">
                      From local stores to large chains – we supply makhana for every business.
                    </p>
                  </div>

                </div>
              )}

              {/* STEP 2: REQUIREMENT DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#05382B] dark:text-white tracking-tight">
                      Tell Us What You Need
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                      Choose your preferred products and estimated bulk quantity.
                    </p>
                  </div>

                  {/* Flavor Selection Grid */}
                  <div>
                    <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-3 uppercase tracking-wider">
                      Product / Flavour Required
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                      {FLAVORS.map((flavor) => {
                        const isSelected = formData.selectedFlavors.includes(flavor.id);

                        return (
                          <div
                            key={flavor.id}
                            onClick={() => toggleFlavorSelect(flavor.id)}
                            className={`rounded-2xl p-3 flex flex-col items-center justify-between text-center cursor-pointer transition-all border ${
                              isSelected
                                ? "bg-[#E4EFE0] border-[#05382B] shadow-md dark:bg-emerald-950 dark:border-emerald-500"
                                : "bg-white border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700"
                            }`}
                          >
                            <div className="w-12 h-16 rounded-xl bg-amber-100 dark:bg-zinc-700 flex flex-col items-center justify-center my-2 shadow-xs border border-amber-200">
                              <span className="text-xl">{flavor.icon}</span>
                              <span className="text-[7px] font-black uppercase text-amber-900 dark:text-amber-200 mt-1">
                                POPS
                              </span>
                            </div>

                            <span className="text-xs font-extrabold text-[#05382B] dark:text-zinc-100 leading-tight mb-2">
                              {flavor.name}
                            </span>

                            {/* Checkbox Icon */}
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold border transition ${
                              isSelected ? "bg-[#05382B] border-[#05382B] text-white" : "border-zinc-300 bg-white"
                            }`}>
                              {isSelected && "✓"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Requirements Controls Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                    
                    {/* Estimated Quantity */}
                    <div>
                      <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                        Estimated Quantity
                      </label>
                      <select
                        name="estimatedQuantity"
                        value={formData.estimatedQuantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                      >
                        <option value="">Select quantity</option>
                        <option value="< 50kg">&lt; 50 kg</option>
                        <option value="50-100kg">50 - 100 kg</option>
                        <option value="100-500kg">100 - 500 kg</option>
                        <option value="500kg-1ton">500 kg - 1 Ton</option>
                        <option value="> 1ton">&gt; 1 Ton</option>
                      </select>
                    </div>

                    {/* Purchase Frequency */}
                    <div>
                      <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                        Purchase Frequency
                      </label>
                      <select
                        name="purchaseFrequency"
                        value={formData.purchaseFrequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                      >
                        <option value="">Select frequency</option>
                        <option value="one-time">One-Time Order</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                      </select>
                    </div>

                    {/* Packaging Requirement */}
                    <div>
                      <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                        Packaging Requirement
                      </label>
                      <select
                        name="packagingRequirement"
                        value={formData.packagingRequirement}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                      >
                        <option value="">Select packaging</option>
                        <option value="standard-jars">Standard Retail Jars</option>
                        <option value="pouch-pack">Pouch Packing</option>
                        <option value="bulk-loose">Bulk Loose Packing (10kg Bags)</option>
                        <option value="custom-white-label">Custom White-Label / Private Label</option>
                      </select>
                    </div>

                    {/* Preferred Pack Size */}
                    <div>
                      <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                        Preferred Pack Size
                      </label>
                      <div className="flex items-center gap-2 pt-0.5">
                        {["100g", "250g", "500g"].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, packSize: size }))}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition ${
                              formData.packSize === size
                                ? "bg-[#05382B] text-white border-[#05382B]"
                                : "bg-white text-[#05382B] border-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-2 bg-white text-[#05382B] border border-[#05382B] hover:bg-emerald-50 px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition"
                    >
                      <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
                      </svg>
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 bg-[#05382B] hover:bg-[#03281f] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition"
                    >
                      <span>Continue</span>
                      <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: DELIVERY DETAILS */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmitForm} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-200">
                  
                  {/* Left Column: Form Fields */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#05382B] dark:text-white tracking-tight">
                        Almost Done!
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                        Provide Your delivery details and any special requirements.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* State */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          State
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        >
                          <option value="">Select State</option>
                          <option value="Delhi NCR">Delhi NCR</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Delivery City */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Delivery City
                        </label>
                        <input
                          type="text"
                          name="deliveryCity"
                          value={formData.deliveryCity}
                          onChange={handleInputChange}
                          placeholder="Enter City"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Expected Delivery Date */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Expected Delivery Date
                        </label>
                        <input
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        />
                      </div>

                      {/* Target Price / Budget */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          Target Price / Budget per kg
                        </label>
                        <select
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        >
                          <option value="">Enter expected price</option>
                          <option value="budget">Economy (&lt; ₹300 / kg)</option>
                          <option value="standard">Standard (₹300 - ₹500 / kg)</option>
                          <option value="premium">Premium Gourmet (&gt; ₹500 / kg)</option>
                        </select>
                      </div>

                      {/* GST Invoice Required */}
                      <div>
                        <label className="block text-xs font-bold text-[#05382B] dark:text-zinc-200 mb-1">
                          GST Invoice Required ?
                        </label>
                        <select
                          name="gstRequired"
                          value={formData.gstRequired}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#05382B]"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes - GST Invoice Required</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 bg-white text-[#05382B] border border-[#05382B] hover:bg-emerald-50 px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition"
                      >
                        <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
                        </svg>
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-[#05382B] hover:bg-[#03281f] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition"
                      >
                        <span>Submit</span>
                        <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Visual Card */}
                  <div className="lg:col-span-5 bg-[#E4EFE0] dark:bg-[#13231a] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center min-h-[420px] relative overflow-hidden border border-[#d3e5cb] dark:border-emerald-950">
                    <div className="space-y-2">
                      <p className="font-script text-3xl sm:text-4xl text-[#05382B] dark:text-emerald-400 font-bold leading-tight">
                        Better Snacks Bigger Opportunities
                      </p>
                    </div>

                    {/* Delivery Truck Visual Graphic */}
                    <div className="my-6 relative flex flex-col items-center">
                      <div className="text-6xl sm:text-7xl">🚚</div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-3xl">🍿</span>
                        <span className="text-3xl">📦</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#05382B] dark:text-emerald-200 max-w-xs leading-relaxed">
                      we're here to support your business with quality makhana and flexible solutions.
                    </p>
                  </div>

                </form>
              )}

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
