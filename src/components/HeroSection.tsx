import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import heroCoach from "@/assets/hero-coach.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="animate-float absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div className="animate-float absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animation-delay-2000"></div>
        <div className="animate-float absolute bottom-20 left-1/3 w-40 h-40 bg-primary-glow/20 rounded-full blur-xl animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">30 दिन में Complete Transformation</span>
              <span className="sm:hidden">30 दिन Transformation</span>
            </Badge>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Kyun 90% Wellness Coaches</span>
                <br />
                <span className="text-foreground">Deal Close नही कर पाते??</span>
              </h1>

              <div className="glass p-4 sm:p-6 rounded-2xl border border-accent/20">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-accent font-semibold">सिर्फ 30 दिन…</span> और clients आपको 
                  <span className="text-primary font-semibold"> 'please मुझे Join करना है'</span> कहेंगे।
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground">
                  यह problem leads की नहीं है, ना marketing tricks की।
                </p>
                <p className="text-lg sm:text-xl font-semibold text-foreground">
                  Problem है एक चीज़ की: <span className="text-accent">Knowledge</span>
                </p>
                <p className="text-base sm:text-lg text-primary-glow font-medium">
                  और याद रखो — अगर आपके 30 customers 30 days में बनना start हो गए, आपके लिए कोई भी Level Qualify करना मुश्किल नहीं है।
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg sm:text-xl py-4 sm:py-6 px-6 sm:px-8"
                onClick={() => window.open('https://rzp.io/rzp/NjZxFD7y', '_blank')}
              >
                <span className="hidden sm:inline">Book Your 30-Day Game-Changing Strategy Call</span>
                <span className="sm:hidden">Book Strategy Call</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 sm:pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Successful Coaches</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">10x</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Average Sales Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in mt-8 lg:mt-0">
            <div className="relative">
              <img 
                src={heroCoach} 
                alt="Confident Health Coach Teaching Nutrition"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Floating testimonial card */}
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 glass p-3 sm:p-4 rounded-xl border border-accent/30 animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm sm:text-base">★</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">"10x growth in just 30 days!"</div>
                    <div className="text-xs text-muted-foreground">Mumbai Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
