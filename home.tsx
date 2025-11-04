import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Stethoscope, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  const services = [
    {
      title: "Aesthetic Dermatology",
      description: "Advanced cosmetic procedures for skin rejuvenation and enhancement.",
      icon: Stethoscope,
    },
    {
      title: "Skin Surgery",
      description: "Expert surgical treatment for various skin conditions and lesions.",
      icon: Award,
    },
    {
      title: "Acne Treatment",
      description: "Comprehensive acne management with proven treatment protocols.",
      icon: BookOpen,
    },
    {
      title: "Medical Dermatology",
      description: "Diagnosis and treatment of all skin, hair, and nail conditions.",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[image:var(--hero-gradient)] text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <img src={heroImage} alt="Medical clinic" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Expert Dermatology Care in Kathmandu
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Dr. Vikash Paudel - Board-certified dermatologist specializing in aesthetic dermatology and skin surgery. 
                Providing world-class skin care at Patan Hospital, Elite Health Clinic, and Shankhamul Healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments">
                  <Button variant="hero" size="lg">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-[image:var(--section-gradient)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specialized Dermatology Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive skin care solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Dr. Vikash Paudel?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Expert Credentials</h3>
                      <p className="text-muted-foreground">Board-certified dermatologist with extensive training in aesthetic dermatology and skin surgery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Multiple Clinic Locations</h3>
                      <p className="text-muted-foreground">Convenient access at Patan Hospital, Elite Health Clinic, and Shankhamul Healthcare</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Advanced Treatment Options</h3>
                      <p className="text-muted-foreground">Latest technology and evidence-based treatments for optimal results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Patient-Centered Care</h3>
                      <p className="text-muted-foreground">Personalized treatment plans with compassionate, professional care</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Transform Your Skin?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with Dr. Vikash Paudel today and take the first step towards healthier, more beautiful skin.
                </p>
                <Link to="/appointments">
                  <Button size="lg" className="w-full">
                    Book Your Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
