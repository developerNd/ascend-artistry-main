import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "पहले मैं हर महीने सिर्फ 2 clients से बात करता था, अब 40–69 qualified leads खुद contact करते हैं।",
      author: "Ravi Verma",
      location: "Wellness Coach – Ahmedabad",
      rating: 5,
      result: "25x Lead Growth"
    },
    {
      quote: "पहले sales call में nervous हो जाता था, अब strategy और script से हर call पर clarity रहती है।",
      author: "Neha Thakur", 
      location: "Wellness Coach – Indore",
      rating: 5,
      result: "Confidence & Conversion Boost"
    },
    {
      quote: "MSR System सीखने के बाद clients खुद मुझसे guidance मांगते हैं — अब मैं अपनी team का top closer हूँ।",
      author: "Arjun Mehta",
      location: "Wellness Coach – Bangalore", 
      rating: 5,
      result: "Authority Positioning"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Successful Coaches"
    },
    {
      icon: TrendingUp,
      number: "10x",
      label: "Average Growth"
    },
    {
      icon: Star,
      number: "87%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="animate-float absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Real Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gradient">क्या कहते हैं</span>
              <br />
              <span className="text-foreground">हमारे Successful Coaches</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="glass border-primary/30 p-6 sm:p-8 text-center animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass border-accent/30 p-6 sm:p-8 animate-slide-up hover:border-accent/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/30 absolute -top-1 sm:-top-2 -left-1 sm:-left-2" />
                    <p className="text-sm sm:text-base text-foreground leading-relaxed pl-4 sm:pl-6">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-block">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs sm:text-sm">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {testimonial.result}
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="pt-3 sm:pt-4 border-t border-border">
                    <div className="text-sm sm:text-base font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Aspirational Section */}
          <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-accent/30 text-center animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              आपकी भी यही story बन सकती है!
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              सिर्फ 30 दिन बाद, आप भी confidently clients को science, psychology और logic से convert कर पाएंगे।
              आपकी success story भी इसी page पर feature होगी 🚀
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-accent">30 Days</div>
                <div className="text-sm sm:text-base text-muted-foreground">System Creation Duration</div>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-accent">Lifetime</div>
                <div className="text-sm sm:text-base text-muted-foreground">Knowledge & Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
