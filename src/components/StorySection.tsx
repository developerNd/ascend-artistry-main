import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, MessageSquare } from "lucide-react";
import struggleSales from "@/assets/struggle-sales.jpg";

const StorySection = () => {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gradient">The Story</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              हर Wellness Coach की यही कहानी है...
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 animate-slide-up">
              <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/20">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  जब मैंने Wellness Business start किया था…
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  मैं super excited था। Products मस्त थे और income opportunity भी बहुत शानदार लग रही थी।
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  लेकिन हर बार Month के End में सिर्फ Leads की बिना
                  <span className="text-destructive font-bold"> Failure देखता हूँ। </span>
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 glass p-3 sm:p-4 rounded-xl border border-destructive/20">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">Client कहते हैं आपका Product बोहोत महंगा है।</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 glass p-3 sm:p-4 rounded-xl border border-destructive/20">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">Quality Lead कहाँ से लेकर आऊं?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 glass p-3 sm:p-4 rounded-xl border border-destructive/20">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">कब से सोच रहा हूँ Next Level Qualify करने का।</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in mt-8 lg:mt-0">
              <img 
                src={struggleSales} 
                alt="Struggling with sales and client questions"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* The Painful Reality */}
          <Card className="glass border-destructive/30 p-6 sm:p-8 mb-8 sm:mb-12 animate-slide-up">
            <div className="flex items-start gap-3 sm:gap-4">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  और मेरे पास कोई Solution ही नहीं था।
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  में बस वही कर रहा था जो अभी तक मुझे मेरे Sponser ने सिखाया था। लेकिन फिर भी कोई Customer नहीं बन रहा था ।
                </p>
                <p className="text-lg sm:text-xl font-semibold text-destructive">
                  और मैं सोचने लगा… "शायद यह मेरे लिए नहीं है।"
                </p>
              </div>
            </div>
          </Card>

          {/* The Realization */}
          <div className="text-center space-y-4 sm:space-y-6 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              लेकिन फिर मुझे एहसास हुआ...
            </h3>
            <div className="glass p-6 sm:p-8 rounded-2xl border border-accent/30 max-w-2xl mx-auto">
              <TrendingDown className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                Problem  मुझ में नहीं थी, Problem थी की मेरे पास 
                <span className="text-accent font-bold"> सही Marketing & Sales Strategy नहीं थी।</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
