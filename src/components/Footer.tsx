import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage = 'English',
  onLanguageChange,
}) => {
  const [selectedLang, setSelectedLang] = useState(currentLanguage);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const footerLinks = [
    { label: 'Meta', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Locations', href: '#' },
    { label: 'Popular', href: '#' },
    { label: 'Instagram Lite', href: '#' },
    { label: 'Meta AI', href: '#' },
    { label: 'Muse', href: '#' },
    { label: 'Threads', href: '#' },
    { label: 'Contact Uploading & Non-Users', href: '#' },
    { label: 'Meta Verified', href: '#' },
  ];

  const languages = [
    'English',
    'Español',
    'Français',
    'Deutsch',
    'Português (Brasil)',
    'Italiano',
    '日本語',
    '한국어',
    '中文',
    'Nederlands',
  ];

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
    onLanguageChange?.(lang);
  };

  return (
    <footer className="w-full bg-[#1f1f20] border-t border-[#2d3036] py-7 px-6 lg:px-12 select-none z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-3.5 text-center">
        {/* Line 1: Links distributed horizontally */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[12px] text-[#737880]"
          aria-label="Instagram Directory Links"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => e.preventDefault()}
              className="hover:underline hover:text-[#9ea4ad] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Line 2: Language Selector & Copyright matching reference image */}
        <div className="flex items-center justify-center gap-4 text-[12px] text-[#737880] relative">
          {/* Language Selector */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="inline-flex items-center gap-1 hover:text-[#9ea4ad] transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isLangOpen}
            >
              <span>{selectedLang}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-44 rounded-xl bg-[#1c2127] border border-[#2e353f] shadow-2xl py-1.5 z-50 max-h-60 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleSelectLang(lang)}
                      className={`w-full text-left px-3.5 py-1.5 text-xs transition-colors ${
                        selectedLang === lang
                          ? 'text-white font-semibold bg-[#0064e0]/20'
                          : 'text-[#9ea8b3] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Copyright */}
          <span>© 2026 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};
