import React, { useState } from 'react';
import { MetaLogo } from './MetaLogo';
import { Eye, EyeOff, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface LoginFormProps {
  onOpenForgotPassword?: () => void;
  onOpenCreateAccount?: () => void;
  onOpenFacebookLogin?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onOpenForgotPassword,
  onOpenCreateAccount,
  onOpenFacebookLogin,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const isFormFilled = identifier.trim().length > 0 && password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password) return;

    setIsLoading(true);
    setFeedback(null);

    // Realistic login verification simulation
    setTimeout(() => {
      setIsLoading(false);
      if (password.length < 6) {
        setFeedback({
          type: 'error',
          message: 'Your password must be at least 6 characters long.',
        });
      } else {
        setFeedback({
          type: 'success',
          message: `Welcome back, ${identifier.trim()}! Logged in successfully.`,
        });
      }
    }, 1100);
  };

  return (
    <div className="w-full h-full min-h-[680px] flex flex-col justify-between items-center py-12 lg:py-16 px-6 sm:px-10 bg-[#1f1f20] select-none">
      {/* Top spacer */}
      <div className="w-full h-2" />

      {/* Centered Form Container matching reference screenshot */}
      <div className="w-full max-w-[420px] mx-auto flex flex-col justify-center">
        {/* Title: "Log into Instagram", 16px, bold, white, left-aligned */}
        <div className="mb-5">
          <h2 className="text-[16px] font-bold text-white tracking-normal text-left">
            Log into Instagram
          </h2>
        </div>

        {/* Feedback alert if any */}
        {feedback && (
          <div
            className={`mb-4 px-4 py-3 rounded-[14px] text-xs flex items-center justify-between border ${
              feedback.type === 'success'
                ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/70 border-rose-500/40 text-rose-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              )}
              <span>{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="p-1 hover:opacity-75 transition-opacity"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          {/* Field 1: Mobile number, username or email */}
          <div className="relative group">
            <input
              type="text"
              id="identifier-input"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Mobile number, username or email"
              autoComplete="username"
              className="w-full h-[54px] px-4 rounded-[16px] bg-[#16181b] border border-[#303438] text-white text-[14px] placeholder-[#737880] focus:outline-none focus:border-[#52575e] transition-colors"
              required
            />
          </div>

          {/* Field 2: Password */}
          <div className="relative group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              className="w-full h-[54px] pl-4 pr-16 rounded-[16px] bg-[#16181b] border border-[#303438] text-white text-[14px] placeholder-[#737880] focus:outline-none focus:border-[#52575e] transition-colors"
              required
            />
            {password.length > 0 && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8c96a0] hover:text-white transition-colors py-1 px-1.5 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? (
                  <span className="flex items-center gap-1">
                    <EyeOff className="w-3.5 h-3.5" /> Hide
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Show
                  </span>
                )}
              </button>
            )}
          </div>

          {/* Primary Button: "Log in" with dark blue background matching screenshot */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading || !identifier.trim() || !password}
              className={`w-full h-[48px] rounded-[16px] font-semibold text-[14px] flex items-center justify-center transition-all duration-150 select-none ${
                isFormFilled
                  ? 'bg-[#0064e0] text-white hover:bg-[#0070f3] active:scale-[0.99] cursor-pointer shadow-md shadow-[#0064e0]/20'
                  : 'bg-[#004c8f] text-[#8cb9ea] cursor-not-allowed hover:bg-[#00529b]'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Logging in...</span>
                </div>
              ) : (
                'Log in'
              )}
            </button>
          </div>

          {/* "Forgot password?" centered link in white */}
          <div className="text-center pt-3 pb-1">
            <button
              type="button"
              onClick={onOpenForgotPassword}
              className="text-[14px] font-normal text-white hover:underline focus:outline-none"
            >
              Forgot password?
            </button>
          </div>
        </form>

        {/* Wide vertical space matching screenshot */}
        <div className="my-9" />

        {/* Secondary Buttons */}
        <div className="flex flex-col space-y-3">
          {/* Button: Dark grey background with Facebook icon and "Log in with Facebook" */}
          <button
            type="button"
            onClick={onOpenFacebookLogin}
            className="w-full h-[48px] rounded-[16px] bg-[#282b30] hover:bg-[#32363c] active:scale-[0.99] text-white font-semibold text-[14px] flex items-center justify-center gap-2.5 transition-colors duration-150 cursor-pointer shadow-sm"
          >
            {/* Facebook circle icon */}
            <div className="w-5 h-5 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white translate-x-[0.5px] translate-y-[1px]"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <span>Log in with Facebook</span>
          </button>

          {/* Button: Transparent with blue border and "Create new account" */}
          <button
            type="button"
            onClick={onOpenCreateAccount}
            className="w-full h-[48px] rounded-[16px] bg-transparent border border-[#0064e0] hover:bg-[#0064e0]/10 active:scale-[0.99] text-[#0095f6] font-semibold text-[14px] flex items-center justify-center transition-colors duration-150 cursor-pointer"
          >
            Create new account
          </button>
        </div>
      </div>

      {/* Bottom of Right Column: Meta logo in white with text "Meta" */}
      <div className="pt-6 pb-2 flex items-center justify-center">
        <MetaLogo size={22} textColor="text-white" />
      </div>
    </div>
  );
};
