import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Vikash Paudel</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Leading dermatologist in Kathmandu, dedicated to providing exceptional skin care services
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Dr. Vikash Paudel is a highly qualified and experienced consultant dermatologist practicing in Kathmandu, Nepal. 
                    With extensive training in both medical and aesthetic dermatology, Dr. Paudel brings a comprehensive approach to skin care, 
                    combining clinical expertise with the latest advancements in dermatological treatments.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently serving as a consultant dermatologist at three prestigious healthcare facilities - Patan Hospital, 
                    Elite Health Clinic, and Shankhamul Healthcare - Dr. Paudel is committed to providing accessible, 
                    high-quality dermatological care to patients across the Kathmandu valley.
                  </p>
                </div>
              </div>

              {/* Education & Training */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Education & Training</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Medical Degree</h3>
                      <p className="text-muted-foreground">
                        MBBS - Bachelor of Medicine and Bachelor of Surgery
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Specialization</h3>
                      <p className="text-muted-foreground">
                        MD Dermatology - Advanced training in dermatology, venereology, and leprology
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Additional Training</h3>
                      <p className="text-muted-foreground">
                        Advanced certification in aesthetic dermatology and cosmetic procedures
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Specialized training in dermatologic surgery and laser treatments
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Practice */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Current Practice</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Areas of Expertise</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Medical Dermatology - diagnosis and treatment of skin diseases</li>
                        <li>Aesthetic Dermatology - cosmetic procedures and skin rejuvenation</li>
                        <li>Dermatologic Surgery - surgical treatment of skin conditions</li>
                        <li>Acne and Scar Management</li>
                        <li>Hair Disorders</li>
                        <li>Nail Conditions</li>
                        <li>Laser Treatments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Practice Locations */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Practice Locations</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Patan Hospital</h3>
                      <p className="text-sm text-muted-foreground">Lagankhel, Lalitpur</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Elite Health Clinic</h3>
                      <p className="text-sm text-muted-foreground">Kathmandu</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Shankhamul Healthcare</h3>
                      <p className="text-sm text-muted-foreground">Shankhamul, Kathmandu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Philosophy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Philosophy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Paudel believes in a holistic approach to dermatological care, combining evidence-based medical treatments 
                  with personalized care plans. His practice philosophy emphasizes patient education, preventive care, and the use 
                  of the latest technologies to achieve optimal outcomes. He is committed to staying at the forefront of dermatological 
                  advancements through continuous learning and professional development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
