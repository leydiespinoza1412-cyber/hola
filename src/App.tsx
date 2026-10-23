/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StoriesPresentation } from './components/StoriesPresentation';
import { LoginForm } from './components/LoginForm';
import { Footer } from './components/Footer';
import {
  ForgotPasswordModal,
  CreateAccountModal,
  FacebookLoginModal,
} from './components/Modals';

export default function App() {
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [isFacebookModalOpen, setIsFacebookModalOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  return (
    <div className="min-h-screen w-full bg-[#1f1f20] text-white flex flex-col justify-between selection:bg-[#0095f6]/30 selection:text-white">
      {/* Main 2-Column Desktop Grid (66.7% Left, 33.3% Right) */}
      <main className="flex-1 w-full flex flex-col lg:flex-row items-stretch">
        {/* Left Column: Instagram Presentation (~66.7% / 2/3 width) */}
        <section
          aria-label="Instagram Close Friends Preview"
          className="w-full lg:w-[66.7%] flex flex-col items-center justify-between lg:border-r border-[#2d3036] bg-[#1f1f20] relative overflow-hidden"
        >
          <StoriesPresentation />
        </section>

        {/* Right Column: Login Form (~33.3% / 1/3 width) - Equalized background color */}
        <section
          aria-label="Instagram Login Form"
          className="w-full lg:w-[33.3%] flex flex-col items-center justify-center bg-[#1f1f20] relative border-t lg:border-t-0 border-[#2d3036]"
        >
          <LoginForm
            onOpenForgotPassword={() => setIsForgotModalOpen(true)}
            onOpenCreateAccount={() => setIsCreateAccountOpen(true)}
            onOpenFacebookLogin={() => setIsFacebookModalOpen(true)}
          />
        </section>
      </main>

      {/* Full-width Footer */}
      <Footer currentLanguage={language} onLanguageChange={setLanguage} />

      {/* Interactive Modals */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />
      <CreateAccountModal
        isOpen={isCreateAccountOpen}
        onClose={() => setIsCreateAccountOpen(false)}
      />
      <FacebookLoginModal
        isOpen={isFacebookModalOpen}
        onClose={() => setIsFacebookModalOpen(false)}
      />
    </div>
  );
}
