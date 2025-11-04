import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Biography = () => {
  const timeline = [
    {
      year: "Early Years",
      title: "Academic Foundation",
      description: "Completed medical education with distinction, developing a strong foundation in medical sciences and patient care.",
    },
    {
      year: "Medical School",
      title: "MBBS Degree",
      description: "Graduated with a Bachelor of Medicine and Bachelor of Surgery (MBBS) from a prestigious medical institution.",
    },
    {
      year: "Specialization",
      title: "MD in Dermatology",
      description: "Pursued advanced specialization in Dermatology, Venereology, and Leprology, gaining comprehensive expertise in skin diseases.",
    },
    {
      year: "Advanced Training",
      title: "Fellowship Programs",
      description: "Completed specialized training in aesthetic dermatology and dermatologic surgery, mastering advanced cosmetic procedures.",
    },
    {
      year: "Current Practice",
      title: "Consultant Dermatologist",
      description: "Serving as consultant dermatologist at Patan Hospital, Elite Health Clinic, and Shankhamul Healthcare in Kathmandu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Biography</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Journey of excellence in dermatological care
            </p>
          </div>
        </section>

        {/* Biography Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Journey</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Dr. Vikash Paudel's journey in dermatology is marked by dedication, continuous learning, and a passion for helping patients 
                  achieve healthy, beautiful skin. From early academic excellence to becoming one of Kathmandu's most trusted dermatologists, 
                  his career reflects a commitment to excellence and patient-centered care.
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Career Timeline</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-primary shadow-[var(--shadow-card)]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="md:w-32 shrink-0">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                              {item.year}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Professional Memberships & Affiliations</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">Nepal Medical Council (NMC)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">Dermatological Society of Nepal</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">International Society of Dermatology</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">American Academy of Dermatology (International Fellow)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Research Interests</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Clinical Dermatology</h3>
                      <p className="text-sm text-muted-foreground">
                        Investigating novel treatment approaches for common and rare skin conditions
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Aesthetic Procedures</h3>
                      <p className="text-sm text-muted-foreground">
                        Advancing techniques in cosmetic dermatology and minimally invasive procedures
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dermatologic Surgery</h3>
                      <p className="text-sm text-muted-foreground">
                        Developing improved surgical techniques for skin cancer and cosmetic procedures
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Laser Therapy</h3>
                      <p className="text-sm text-muted-foreground">
                        Exploring applications of laser technology in dermatological treatments
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Statement */}
              <div className="bg-muted rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Personal Statement</h2>
                <p className="text-muted-foreground italic leading-relaxed">
                  "My approach to dermatology is rooted in the belief that every patient deserves compassionate, evidence-based care. 
                  I am committed to staying at the forefront of dermatological advancements while never losing sight of the human element 
                  in healthcare. Through continuous learning, research, and patient interaction, I strive to provide the highest standard 
                  of dermatological care to the people of Nepal."
                </p>
                <p className="text-foreground font-semibold mt-4">- Dr. Vikash Paudel</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biography;
