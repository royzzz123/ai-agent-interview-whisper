
import React from "react";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { ContainerScroll, ContainerScrollText, ContainerScrollImage } from "@/components/ui/container-scroll";
import { HeroSection } from "@/components/ui/hero-section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Footer } from "@/components/ui/footer";
import { AnimatedText, FadeIn } from "@/components/ui/motion";
import { MobileMenu } from "@/components/mobile-menu";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-black/90 to-black">
      {/* Background effects */}
      <GridBackgroundDemo />
      
      {/* Navigation */}
      <nav className="relative z-50 py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <img src="/gobot-logo.png" alt="GoBot Logo" className="h-10 w-auto" />
            </a>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-gray-300 hover:text-skyBlue transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-skyBlue transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-skyBlue transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-skyBlue transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-5 py-2 text-white hover:text-skyBlue transition-colors">Sign In</button>
              <button className="px-5 py-2 bg-skyBlue text-deepPurple font-medium rounded-lg hover:bg-skyBlue/90 transition-all">Get Started</button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Section 1: Container Scroll Animation */}
      <section id="how-it-works">
        <ContainerScroll
          titleComponent={
            <div className="max-w-3xl mx-auto">
              <AnimatedText 
                text="Transform Your Interview Preparation" 
                className="text-4xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-2"
              />
              <FadeIn delay={0.4}>
                <p className="text-gray-300 mt-6 text-xl">
                  Our AI-powered agent provides realistic interview simulations and personalized feedback
                </p>
              </FadeIn>
            </div>
          }
        >
          <div className="relative flex flex-col items-center w-full">
            <ContainerScrollText>
              <FadeIn delay={0.2} direction="up">
                <div className="flex flex-col items-center justify-center h-full p-6 md:p-10 rounded-2xl bg-deepPurple/30 backdrop-blur-sm border border-skyBlue/20 mb-16">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Interview Game-Changer</h3>
                  <p className="text-lg text-gray-300 max-w-2xl text-center">
                    GoBot uses advanced AI to simulate realistic interviews, providing immediate feedback and helping you improve with each session.
                  </p>
                </div>
              </FadeIn>
            </ContainerScrollText>
            
            <ContainerScrollImage 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
              alt="GoBot Interview Simulation" 
            />
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
              {[
                { 
                  title: "AI-Powered", 
                  description: "Lifelike conversations with adaptive questioning based on your responses", 
                  color: "bg-gradient-to-br from-skyBlue/20 to-boldPurple/20" 
                },
                { 
                  title: "Personalized", 
                  description: "Tailored feedback and improvement suggestions for your specific needs", 
                  color: "bg-gradient-to-br from-softYellow/20 to-skyBlue/20" 
                },
                { 
                  title: "Comprehensive", 
                  description: "Covers technical, behavioral, and situational questions for any role", 
                  color: "bg-gradient-to-br from-boldPurple/20 to-softYellow/20" 
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.2 * i} direction="up">
                  <div className={`${item.color} p-6 rounded-xl border border-white/10`}>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </section>
      
      {/* Section 2: Hero Section */}
      <section id="features">
        <HeroSection />
      </section>
      
      {/* Section 3: Bento Grid */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-deepPurple/20 via-deepPurple/50 to-deepPurple/80 -z-10"></div>
        <BentoGrid title="Powerful Interview Preparation Features">
          {[
            {
              title: "Industry-Specific Questions",
              description: "Tailored questions for tech, finance, healthcare, and more to prepare you for your specific field.",
              delay: 0.1,
              bgClass: "bg-gradient-to-br from-skyBlue/20 to-boldPurple/20"
            },
            {
              title: "Real-time Feedback",
              description: "Get immediate insights on your responses, body language, and speaking style as you practice.",
              delay: 0.2,
              bgClass: "bg-gradient-to-br from-boldPurple/20 to-softYellow/20"
            },
            {
              title: "Speech Analysis",
              description: "Our AI analyzes your tone, pace, and clarity to help you communicate more effectively.",
              delay: 0.3,
              bgClass: "bg-gradient-to-br from-softYellow/20 to-skyBlue/20"
            },
            {
              title: "Answer Templates",
              description: "Access proven frameworks for answering common questions across different interview types.",
              delay: 0.4,
              bgClass: "bg-gradient-to-br from-skyBlue/20 to-mutedViolet/20"
            },
            {
              title: "Interview Recording",
              description: "Record your practice sessions and review them later to track your improvement over time.",
              delay: 0.5,
              bgClass: "bg-gradient-to-br from-mutedViolet/20 to-skyBlue/20"
            },
            {
              title: "Mock Interviews",
              description: "Simulate full interview experiences with varying difficulty levels to build your confidence.",
              delay: 0.6,
              bgClass: "bg-gradient-to-br from-softYellow/20 to-boldPurple/20"
            },
          ].map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              delay={item.delay}
              bgClass={item.bgClass}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              }
            />
          ))}
        </BentoGrid>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-deepPurple/50 to-deepPurple/90 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ace Your Next Interview?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers who have transformed their interview performance with GoBot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-skyBlue text-deepPurple font-medium rounded-lg hover:bg-skyBlue/90 transition-all">
                  Get Started Free
                </button>
                <button className="px-8 py-3 bg-transparent border border-skyBlue text-skyBlue font-medium rounded-lg hover:bg-skyBlue/10 transition-all">
                  View Demo
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
