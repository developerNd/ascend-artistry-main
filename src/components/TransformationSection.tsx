import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Users, CheckCircle, TrendingUp } from "lucide-react";
import transformationImage from "@/assets/transformation.jpg";

const TransformationSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Clients full doubt में आते हैं",
      description: "शुरुआत में उन्हें trust build करना मुश्किल लगता है।"
    },
    {
      icon: CheckCircle,
      title: "आप उन्हें System और Strategy explain करते हो",
      description: "Marketing + Psychology के साथ confidence से।"
    },
    {
      icon: CheckCircle,
      title: "वो खुद बोलते हैं — \"Yes, I want to start!\"",
      description: "Trust automatically develop हो जाता है।"
    },
    {
      icon: CheckCircle,
      title: "Deal close होती है बिना push किए",
      description: "Natural, effortless selling process बन जाता है।"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="animate-float absolute top-10 left-20 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
        <div className="animate-float absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Your Transformation
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gradient">सोचो आपके साथ क्या होगा</span>
              <br />
              <span className="text-foreground">जब आपके पास MSR System होगा</span>
            </h2>
          </div>

          {/* Transformation Visual */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 animate-slide-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                The Perfect Client Conversion Flow:
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 glass p-3 sm:p-4 rounded-xl border border-primary/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                        ✅ {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in mt-8 lg:mt-0">
              <img 
                src={transformationImage}
                alt="Success transformation journey" 
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Success metrics overlay */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 glass p-4 sm:p-6 rounded-2xl border border-accent/30 animate-float">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-foreground">10x</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Sales Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Before vs After */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="glass border-destructive/30 p-6 sm:p-8 animate-slide-up">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl">😔</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">😩 अभी आप</h3>
                <div className="space-y-2 sm:space-y-3 text-left">
                  <p className="text-sm sm:text-base text-muted-foreground">• हर महीने 2–3 clients लाने में struggle करते हैं</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• Clients को convince करने में बहुत time जाता है</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• बार-बार follow up करना पड़ता है</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• Result? कम income + high frustration</p>
                </div>
              </div>
            </Card>

            <Card className="glass border-accent/30 p-6 sm:p-8 animate-slide-up animate-glow">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">🚀 30 दिन बाद</h3>
                <div className="space-y-2 sm:space-y-3 text-left">
                  <p className="text-sm sm:text-base text-accent font-medium">• 10–15 clients easily close होते हैं</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• Clients खुद आपसे guidance मांगते हैं</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• Trust अपने आप बन जाता है</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• Income 10x, confidence 100x</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Biggest Benefit */}
          <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-primary/30 text-center animate-slide-up">
            <Users className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              🧠 और सबसे बड़ा फायदा?
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto">
              Clients को real transformation मिलेगा —
              क्योंकि अब आप जानते होंगे कि उनके लिए क्या best strategy है।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-base sm:text-lg py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12 whitespace-normal max-w-full"
                onClick={() => window.open('https://pages.razorpay.com/pl_O4RbvDz7we10PA/view', '_blank')}
              >
                🔸 मुझे यह Transformation चाहिए
              </Button>
              <Button variant="hero" size="lg" className="text-base sm:text-lg">
                🔸 Success Stories देखें
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
