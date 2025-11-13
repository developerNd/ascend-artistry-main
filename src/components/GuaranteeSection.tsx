import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle, HeartHandshake } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              100% Risk-Free Guarantee
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gradient">आपको कोई Risk नहीं है</span>
            </h2>
          </div>

          {/* Guarantee Card */}
          <Card className="glass border-2 border-accent/30 p-6 sm:p-8 lg:p-12 text-center mb-12 sm:mb-16 animate-slide-up animate-glow">
            <div className="space-y-6 sm:space-y-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                3 दिन के अंदर Guarantee
              </h3>
              
              <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  अगर आपको लगे कि MSR System आपके लिए काम नहीं कर रहा,
                </p>
                <p className="text-xl sm:text-2xl font-bold text-accent">
                  तो 3 दिन के अंदर — पूरे पैसे वापस।
                </p>
                <p className="text-base sm:text-lg text-muted-foreground">
                  💬 No questions asked. No hassle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-sm sm:text-base text-foreground font-medium">3 Days Trial</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  <span className="text-sm sm:text-base text-foreground font-medium">Full Refund</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Why We Can Offer This */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="glass border-primary/30 p-6 sm:p-8 text-center animate-slide-up">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Proven Results
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  87% coaches ने देखा है instant growth — उनकी confidence और client conversion दोनों में।
                </p>
              </div>
            </Card>

            <Card className="glass border-accent/30 p-6 sm:p-8 text-center animate-slide-up">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Quality System
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  System को बनाया गया है top marketers और successful wellness coaches की proven strategies से।
                </p>
              </div>
            </Card>

            <Card className="glass border-primary-glow/30 p-6 sm:p-8 text-center animate-slide-up sm:col-span-2 lg:col-span-1">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto">
                  <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Our Commitment
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  हमारा goal simple है — आपका business scale करना, सिर्फ Sevice बेचना नहीं।
                </p>
              </div>
            </Card>
          </div>

          {/* Final Assurance */}
          <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-primary/30 text-center animate-slide-up">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              हमें पूरा भरोसा है कि यह MSR System आपकी life बदल देगा
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              इसीलिए हम दे रहे हैं आपको complete peace of mind —
              Try कीजिए, और अगर आपको growth या clarity महसूस नहीं होती, तो पूरे पैसे वापस।
            </p>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-12"
              onClick={() => window.open('https://pages.razorpay.com/pl_O4RbvDz7we10PA/view', '_blank')}
            >
              🟡 Start Your Risk-Free MSR Journey Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
