"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, initialMode = "signup" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Form fields state
  const [signupData, setSignupData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: true,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">

      {/* Outer Modal Card Container matching attached screenshot */}
      <div className="relative w-full max-w-5xl rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#FAF5EC] dark:bg-[#0f1915] p-3 sm:p-6 lg:p-8 border border-[#e5dac8] dark:border-emerald-950 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">

        {/* Floating Background Makhana Seeds */}
        <div className="absolute top-4 left-4 text-3xl opacity-70 pointer-events-none transform -rotate-12">
          🍿
        </div>
        <div className="absolute top-6 right-16 text-3xl opacity-70 pointer-events-none transform rotate-12">
          🍿
        </div>
        <div className="absolute bottom-6 left-6 text-3xl opacity-60 pointer-events-none">
          🍿
        </div>
        <div className="absolute bottom-8 right-6 text-4xl opacity-70 pointer-events-none transform rotate-45">
          🍿
        </div>

        {/* Close Button (X) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-800 text-[#0A392B] dark:text-emerald-400 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition border border-black/5"
          aria-label="Close Auth Modal"
        >
          <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ------------------ SIGNUP MODE ------------------ */}
        {mode === "signup" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">

            {/* LEFT COLUMN: Visual Graphic Banner Card */}
            <div className="lg:col-span-6 bg-[#0A392B] dark:bg-emerald-950 rounded-[1.8rem] sm:rounded-[2rem] p-6 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] border border-emerald-900 shadow-lg">

              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Surrounding Floating Jars Visual */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* Floating Flavor Jars */}
                <div className="absolute top-2 left-4 text-2xl animate-pulse">🧀</div>
                <div className="absolute top-4 right-6 text-2xl">🍅</div>
                <div className="absolute bottom-12 left-6 text-2xl">🌶️</div>
                <div className="absolute bottom-8 right-8 text-2xl">🧅</div>

                {/* Center Model Graphic & Pouch */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-28 h-36 rounded-2xl bg-amber-400 text-[#0A392B] p-3 shadow-2xl flex flex-col items-center justify-between border-2 border-white/60 transform -rotate-3">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#0A392B] text-white px-2 py-0.5 rounded-full">
                      POPSMAGIC
                    </span>
                    <div className="text-4xl">🍿</div>
                    <span className="text-[9px] font-extrabold uppercase bg-black/20 text-white px-2 py-0.5 rounded-full">
                      Peri-Peri
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-serif tracking-tight text-amber-300">
                      Better Snacking!
                    </h4>
                    <p className="text-xs text-white/80 max-w-xs font-medium">
                      One crunch at a time with 100% natural gourmet makhana.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Signup Form */}
            <div className="lg:col-span-6 bg-[#EBF2E4]/80 dark:bg-zinc-900/90 rounded-[1.8rem] sm:rounded-[2rem] p-6 sm:p-8 border border-[#d6e4cc] dark:border-zinc-800 space-y-5">

              {/* Brand Header */}
              <div className="space-y-1">
                <span className="text-2xl font-black font-serif tracking-tight text-[#0A392B] dark:text-emerald-400">
                  popsmagic<span className="text-[10px] font-sans align-super">™</span>
                </span>

                <h2 className="text-3xl sm:text-4xl font-black font-sans text-zinc-900 dark:text-white tracking-tight leading-tight">
                  Create your<br />account...
                </h2>

                <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Join us for <strong className="text-zinc-900 dark:text-white">better snacking</strong>, one crunch at a time.
                </p>
              </div>

              {/* Input Fields */}
              <div className="space-y-3.5 pt-1">

                {/* 1. First Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                    placeholder="First Name"
                    className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base pointer-events-none">
                    👤
                  </span>
                </div>

                {/* 2. Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base pointer-events-none">
                    ✉️
                  </span>
                </div>

                {/* 3. Set Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    placeholder="Set Password"
                    className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base hover:text-zinc-600"
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                </div>

                {/* 4. Confirm Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base hover:text-zinc-600"
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                </div>

                {/* Checkbox Terms */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={signupData.agreeTerms}
                    onChange={(e) => setSignupData({ ...signupData, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#0A392B] focus:ring-[#0A392B] accent-[#0A392B]"
                  />
                  <label htmlFor="agreeTerms" className="text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-snug">
                    By signing up, you are agree to our{" "}
                    <strong className="text-[#0A392B] dark:text-emerald-400 font-bold hover:underline cursor-pointer">
                      Terms & Conditions
                    </strong>{" "}
                    and{" "}
                    <strong className="text-[#0A392B] dark:text-emerald-400 font-bold hover:underline cursor-pointer">
                      Privacy Policy
                    </strong>
                  </label>
                </div>

              </div>

              {/* Create Account CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-[#0A392B] hover:bg-[#06291e] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm sm:text-base tracking-wide shadow-md transition duration-200 active:scale-98"
                >
                  Create Account
                </button>
              </div>

              {/* Already have an account link */}
              <div className="text-center text-xs font-medium text-zinc-600 dark:text-zinc-400 pt-1">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-[#0A392B] dark:text-emerald-400 font-bold underline hover:opacity-80"
                >
                  Sign In
                </button>
              </div>

            </div>

          </div>
        )}

        {/* ------------------ LOGIN MODE ------------------ */}
        {mode === "login" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">

            {/* LEFT COLUMN: Login Form */}
            <div className="lg:col-span-6 bg-[#EBF2E4]/80 dark:bg-zinc-900/90 rounded-[1.8rem] sm:rounded-[2rem] p-6 sm:p-8 border border-[#d6e4cc] dark:border-zinc-800 space-y-5">

              {/* Header */}
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl font-black font-sans text-zinc-900 dark:text-white tracking-tight leading-tight">
                  Login to<br />your account ...
                </h2>
                <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Your favourite crunch is just a step away.
                </p>
              </div>

              {/* Inputs */}
              <div className="space-y-4 pt-2">

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0A392B] dark:text-emerald-400 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder="Enter Your Email Address"
                      className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base pointer-events-none">
                      ✉️
                    </span>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0A392B] dark:text-emerald-400 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      placeholder="Enter Password"
                      className="w-full px-4 py-3 pr-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A392B]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-base hover:text-zinc-600"
                    >
                      {showPassword ? "👁️" : "🙈"}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div>
                  <button
                    type="button"
                    className="text-xs font-bold text-[#0A392B] dark:text-emerald-400 hover:underline"
                  >
                    Forgot Password ?
                  </button>
                </div>

              </div>

              {/* LOGIN CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-[#0A392B] hover:bg-[#06291e] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm sm:text-base tracking-wider uppercase shadow-md transition duration-200 active:scale-98"
                >
                  LOGIN
                </button>
              </div>

              {/* Don't have an account link */}
              <div className="text-center text-xs font-medium text-zinc-600 dark:text-zinc-400 pt-1">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="text-[#0A392B] dark:text-emerald-400 font-bold underline hover:opacity-80"
                >
                  Sign Up
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Visual Graphic Banner Card */}
            <div className="lg:col-span-6 rounded-[1.8rem] sm:rounded-[2rem] p-6 bg-[#0A392B] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] border border-emerald-900 shadow-lg">

              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="w-28 h-36 rounded-2xl bg-emerald-600 text-white p-3 shadow-2xl flex flex-col items-center justify-between border-2 border-white/60 transform rotate-3">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                    POPSMAGIC
                  </span>
                  <div className="text-4xl">🍿</div>
                  <span className="text-[9px] font-extrabold uppercase bg-black/30 px-2 py-0.5 rounded-full">
                    Cream & Onion
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold font-serif tracking-tight text-emerald-300">
                    Welcome Back!
                  </h4>
                  <p className="text-xs text-white/80 max-w-xs font-medium">
                    Your favourite crunch is just a step away.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
