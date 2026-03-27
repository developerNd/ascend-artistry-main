import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0a0f1e_0%,#0d1530_40%,#0a1628_70%,#0c1220_100%)] flex items-center justify-center font-sans relative overflow-hidden selection:bg-blue-500/30">
      {/* Subtle radial glow in background */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[radial-gradient(ellipse,rgba(30,60,120,0.35)_0%,transparent_70%)] pointer-events-none" />

      {/* Center content */}
      <div className="text-center max-w-[860px] w-full px-6 relative z-10 py-12">
        {/* Gold check icon in circle */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-xl shadow-black/20">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-[clamp(1.75rem,9vw,7.5rem)] font-black text-blue-500 mb-8 leading-[1.1] tracking-tighter">
          Congratulations!
        </h1>

        {/* Status lines */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-3 text-left">
            <div className="flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-slate-200 text-sm sm:text-lg font-medium">
              Payment Successful - You're All Set!
            </span>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4A90D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="text-slate-200 text-sm sm:text-lg font-medium">
              Ready to Schedule Your Strategy Session
            </span>
          </div>
        </div>

        {/* Book Now button */}
        <button
          onClick={() =>
            window.open(
              "https://tools.aiwhatsapp.in/calender/329/166/30%20min",
              "_blank"
            )
          }
          className="bg-[#F5C542] hover:bg-[#f7cf66] text-neutral-900 border-none rounded-full px-8 py-4 sm:px-12 sm:py-[18px] text-lg sm:text-xl font-bold cursor-pointer inline-flex items-center gap-3 shadow-[0_4px_24px_rgba(245,197,66,0.3)] hover:shadow-[0_8px_32px_rgba(245,197,66,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          {/* Calendar icon */}
          <svg
            className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book Now
          {/* Clock icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>
      </div>
    </div>
  );
}