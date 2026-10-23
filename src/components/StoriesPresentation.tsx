import React, { useState } from 'react';
import { InstagramLogo } from './InstagramLogo';
import { Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface FloatingReaction {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

export const StoriesPresentation: React.FC = () => {
  const [floatingReactions, setFloatingReactions] = useState<FloatingReaction[]>([]);
  const [heartBounced, setHeartBounced] = useState(false);
  const [badgeTooltip, setBadgeTooltip] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const spawnReaction = (emoji: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setFloatingReactions((prev) => [...prev, { id, emoji, x, y }]);
    setTimeout(() => {
      setFloatingReactions((prev) => prev.filter((r) => r.id !== id));
    }, 1400);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    setHeartBounced(true);
    setTimeout(() => setHeartBounced(false), 300);

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const id = Date.now() + Math.random();
        setFloatingReactions((prev) => [
          ...prev,
          {
            id,
            emoji: '❤️',
            x: 50 + (Math.random() * 60 - 30),
            y: 350 + (Math.random() * 40 - 20),
          },
        ]);
        setTimeout(() => {
          setFloatingReactions((prev) => prev.filter((r) => r.id !== id));
        }, 1400);
      }, i * 90);
    }
  };

  const handleBubbleClick = (e: React.MouseEvent) => {
    const emojis = ['🔮', '👀', '🤯', '✨', '🔥'];
    emojis.forEach((emoji, i) => {
      setTimeout(() => {
        const id = Date.now() + Math.random();
        setFloatingReactions((prev) => [
          ...prev,
          {
            id,
            emoji,
            x: 210 + (Math.random() * 80 - 40),
            y: 70 + (Math.random() * 30 - 15),
          },
        ]);
        setTimeout(() => {
          setFloatingReactions((prev) => prev.filter((r) => r.id !== id));
        }, 1400);
      }, i * 80);
    });
  };

  return (
    <div className="relative flex flex-col justify-between w-full h-full min-h-[680px] p-8 sm:p-10 lg:p-12 select-none bg-[#1f1f20]">
      {/* Top Left: Official Instagram Logo */}
      <div className="w-full flex items-center justify-between z-10">
        <a
          href="#"
          className="inline-block transition-transform duration-200 hover:scale-105"
          title="Instagram"
          aria-label="Instagram Home"
        >
          <InstagramLogo size={46} />
        </a>
      </div>

      {/* Main Center Area: Exact Headline and Stories Collage from Reference Screenshot */}
      <div className="flex flex-col items-center justify-center my-auto py-2 z-10">
        {/* Exact Headline in 3 lines:
            See everyday
            moments from your
            close friends.
        */}
        <div className="text-center max-w-xl mb-6 lg:mb-9">
          <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-normal tracking-[-0.025em] leading-[1.12] text-white">
            See everyday<br />
            moments from your<br />
            <span className="font-normal bg-gradient-to-r from-[#fb6f4c] via-[#fc4157] to-[#e500a0] bg-clip-text text-transparent">
              close friends
            </span>
            <span className="text-white">.</span>
          </h1>
        </div>

        {/* Stories Composition matching reference screenshot */}
        <div className="relative max-w-[620px] w-full flex items-center justify-center">
          <div className="relative inline-block group">
            {/* High-fidelity cropped collage from the exact reference image */}
            <img
              src="/assets/aistudio/instagram_stories_collage.png"
              alt="See everyday moments from your close friends"
              className={`w-full max-w-[560px] sm:max-w-[600px] h-auto object-contain transition-transform duration-300 ${
                heartBounced ? 'scale-[1.01]' : ''
              }`}
              draggable={false}
            />

            {/* Interactive Hotspot 1: Left 3D Gradient Heart */}
            <button
              type="button"
              onClick={handleHeartClick}
              className="absolute left-[3%] bottom-[38%] w-[18%] h-[20%] rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity focus:outline-none flex items-center justify-center group/heart"
              title="Click to like story"
              aria-label="Like story"
            >
              <div className="w-full h-full rounded-full border border-pink-400/40 bg-pink-500/10 backdrop-blur-[2px] transition-transform duration-150 group-hover/heart:scale-110 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-400 animate-pulse" />
              </div>
            </button>

            {/* Interactive Hotspot 2: Top Emoji Speech Bubble (🔮👀🤯) */}
            <button
              type="button"
              onClick={handleBubbleClick}
              className="absolute left-[20%] top-[4%] w-[22%] h-[18%] rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity focus:outline-none flex items-center justify-center group/bubble"
              title="React with emojis"
              aria-label="React with emojis"
            >
              <div className="w-full h-full rounded-2xl border border-white/40 bg-white/10 backdrop-blur-[2px] transition-transform duration-150 group-hover/bubble:scale-105 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </button>

            {/* Interactive Hotspot 3: Right Close Friends Star Badge (★ ⌵) */}
            <button
              type="button"
              onClick={() => setBadgeTooltip(!badgeTooltip)}
              className="absolute right-[14%] top-[24%] w-[14%] h-[12%] rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity focus:outline-none flex items-center justify-center group/badge"
              title="Close Friends story"
              aria-label="Close Friends story"
            >
              <div className="w-full h-full rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-[2px] transition-transform duration-150 group-hover/badge:scale-105" />
            </button>

            {/* Close Friends Interactive Tooltip */}
            {badgeTooltip && (
              <div className="absolute right-[5%] top-[14%] bg-[#1a2e22] border border-[#00ba38]/60 text-emerald-200 text-xs px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 animate-in fade-in zoom-in-95 z-30">
                <span className="w-2 h-2 rounded-full bg-[#00ba38]" />
                <span>Shared only with <strong>Close Friends</strong></span>
              </div>
            )}

            {/* Interactive Hotspot 4: Center Story Reply Bar */}
            <div
              onClick={(e) => spawnReaction('❤️', e)}
              className="absolute left-[33%] bottom-[6%] w-[42%] h-[12%] rounded-full cursor-pointer hover:bg-white/5 transition-colors"
              title="Tap to send reaction"
            />

            {/* Floating particle animations */}
            {floatingReactions.map((reaction) => (
              <div
                key={reaction.id}
                style={{
                  left: `${reaction.x}px`,
                  top: `${reaction.y}px`,
                }}
                className="absolute pointer-events-none text-2xl z-40 animate-float-reaction select-none"
              >
                {reaction.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="w-full h-2" />
    </div>
  );
};
