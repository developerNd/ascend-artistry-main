import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PainSection from "@/components/PainSection";
import BreakthroughSection from "@/components/BreakthroughSection";
import TransformationSection from "@/components/TransformationSection";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Create bottom nav element and append to body
    const bottomNavElement = document.createElement('div');
    bottomNavElement.id = 'hnlp-bottom-nav';
    bottomNavElement.innerHTML = `
      <div style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
        border-top: 1px solid rgba(234, 179, 8, 0.3);
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
        width: 100vw;
        margin: 0;
        padding: 0;
      ">
        <div style="max-width: 1200px; margin: 0 auto; padding: 8px 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 20px; font-weight: bold; color: #059669;">₹99</span>
                <span style="font-size: 16px; color: #dc2626; text-decoration: line-through;">₹9,997</span>
              </div>
              <div style="font-size: 11px; color: #6b7280; font-weight: 500;">
                Limited Time Offer - Save 70%
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
              <div style="
                background-color: rgba(234, 179, 8, 0.2);
                color: #eab308;
                border: 1px solid rgba(234, 179, 8, 0.3);
                font-size: 11px;
                padding: 2px 6px;
                border-radius: 9999px;
                display: inline-block;
              ">
                30 Days Program
              </div>
              <button 
                onclick="window.open('https://pages.razorpay.com/pl_O4RbvDz7we10PA/view', '_blank', 'noopener,noreferrer')"
                style="
                  background: linear-gradient(to right, #059669, #10b981);
                  color: white;
                  border: none;
                  border-radius: 6px;
                  padding: 6px 20px;
                  font-weight: bold;
                  font-size: 13px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                "
                onmouseover="this.style.transform='scale(1.05)'"
                onmouseout="this.style.transform='scale(1)'"
              >
                ENROLL NOW
              </button>
              <div style="font-size: 11px; color: #6b7280; font-weight: 500;">
                + Lifetime Access
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(bottomNavElement);
    
    // Cleanup function
    return () => {
      const existingNav = document.getElementById('hnlp-bottom-nav');
      if (existingNav) {
        document.body.removeChild(existingNav);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pb-24">
      <HeroSection />
      <StorySection />
      <PainSection />
      <BreakthroughSection />
      <TransformationSection />
      <OfferSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
