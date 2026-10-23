import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { InstagramLogo } from './InstagramLogo';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
  const [target, setTarget] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#1f1f1f] border border-[#33383f] rounded-[24px] p-8 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
            <Lock className="w-8 h-8" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">Trouble logging in?</h3>
        <p className="text-xs text-[#8c96a0] mb-6 leading-relaxed">
          Enter your email, phone, or username and we'll send you a link to get back into your account.
        </p>

        {sent ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-[16px] p-4 text-xs mb-6 flex flex-col items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <p className="font-semibold">Security link sent!</p>
            <p className="text-[11px] text-emerald-200/80">
              We've sent a login link to <span className="font-medium">{target}</span>. Check your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="Email, phone, or username"
              className="w-full h-[52px] px-4 rounded-[14px] bg-[#12161a] border border-[#363a3e] text-white text-sm placeholder-[#8c96a0] focus:outline-none focus:border-[#737b85]"
              required
            />
            <button
              type="submit"
              disabled={loading || !target.trim()}
              className="w-full h-[46px] rounded-[14px] bg-[#0064e0] hover:bg-[#0070f3] text-white font-semibold text-sm transition-colors flex items-center justify-center disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send login link'}
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center">
          <button
            onClick={onClose}
            className="text-xs text-white hover:underline flex items-center gap-1 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ isOpen, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCreated(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#1f1f1f] border border-[#33383f] rounded-[24px] p-8 text-center shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-3">
          <InstagramLogo size={46} />
        </div>

        <h3 className="text-base font-bold text-white mb-1">Create an account</h3>
        <p className="text-xs text-[#8c96a0] mb-5">
          Sign up to see photos and videos from your friends.
        </p>

        {created ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-[16px] p-5 text-xs mb-4 flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            <p className="font-semibold text-sm">Account created for @{username}!</p>
            <p className="text-[11px] text-emerald-200/80">
              Welcome to Instagram! You can now log into your account.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-6 py-2 rounded-xl bg-[#0064e0] text-white font-semibold text-xs hover:bg-[#0070f3]"
            >
              Continue to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-3 text-left">
            <div>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Mobile Number or Email"
                className="w-full h-[50px] px-4 rounded-[14px] bg-[#12161a] border border-[#363a3e] text-white text-xs placeholder-[#8c96a0] focus:outline-none focus:border-[#737b85]"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full h-[50px] px-4 rounded-[14px] bg-[#12161a] border border-[#363a3e] text-white text-xs placeholder-[#8c96a0] focus:outline-none focus:border-[#737b85]"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                placeholder="Username"
                className="w-full h-[50px] px-4 rounded-[14px] bg-[#12161a] border border-[#363a3e] text-white text-xs placeholder-[#8c96a0] focus:outline-none focus:border-[#737b85]"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-[50px] px-4 rounded-[14px] bg-[#12161a] border border-[#363a3e] text-white text-xs placeholder-[#8c96a0] focus:outline-none focus:border-[#737b85]"
                required
              />
            </div>

            <p className="text-[10px] text-[#8c96a0] text-center pt-2 leading-relaxed">
              By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
            </p>

            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full h-[48px] rounded-[14px] bg-[#0064e0] hover:bg-[#0070f3] text-white font-semibold text-xs transition-colors flex items-center justify-center disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sign up'}
            </button>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-[#8c96a0]">
            Have an account?{' '}
            <button
              onClick={onClose}
              className="text-[#0095f6] hover:underline font-semibold"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

interface FacebookLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FacebookLoginModal: React.FC<FacebookLoginModalProps> = ({ isOpen, onClose }) => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  if (!isOpen) return null;

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 1300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#1f1f1f] border border-[#33383f] rounded-[24px] p-8 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#1877f2] mx-auto flex items-center justify-center mb-4 shadow-lg shadow-[#1877f2]/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-white mb-1">Meta Accounts Center</h3>
        <p className="text-xs text-[#8c96a0] mb-6">
          Log into Instagram using your Facebook account credentials.
        </p>

        {connected ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-[16px] p-4 text-xs mb-4 flex flex-col items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <p className="font-semibold">Facebook Account Connected</p>
            <p className="text-[11px] text-emerald-200/80">
              Logged in via Meta Accounts Center. Welcome back!
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl bg-[#0064e0] text-white text-xs font-semibold"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#12161a] border border-[#363a3e] text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-sm font-bold text-white">
                FB
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Continue as Facebook User</p>
                <p className="text-[10px] text-[#8c96a0]">Synced via Meta Accounts Center</p>
              </div>
            </div>

            <button
              onClick={handleConnect}
              disabled={connecting}
              className="w-full h-[48px] rounded-[14px] bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              {connecting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Continue with Facebook'}
            </button>

            <button
              onClick={onClose}
              className="w-full text-xs text-[#8c96a0] hover:text-white py-2"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
