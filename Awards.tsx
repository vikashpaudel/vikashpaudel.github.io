import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Excellence in Dermatology Award",
      organization: "Dermatological Society of Nepal",
      year: "2023",
      description: "Recognized for outstanding contributions to dermatological care and patient outcomes in Nepal.",
      icon: Trophy,
    },
    {
      title: "Best Research Paper",
      organization: "Annual Dermatology Conference",
      year: "2023",
      description: "Awarded for research on advances in treatment of acne vulgaris in the Nepali population.",
      icon: Award,
    },
    {
      title: "Young Dermatologist Award",
      organization: "South Asian Dermatology Association",
      year: "2022",
      description: "Recognition for significant contributions to dermatology at an early career stage.",
      icon: Star,
    },
    {
      title: "Clinical Excellence Award",
      organization: "Patan Hospital",
      year: "2022",
      description: "Honored for exceptional patient care and clinical outcomes in the dermatology department.",
      icon: Trophy,
    },
    {
      title: "Academic Achievement Award",
      organization: "Nepal Medical Council",
      year: "2021",
      description: "Recognition for academic excellence in dermatology specialization.",
      icon: Award,
    },
  ];

  const recognitions = [
    "Featured in 'Top Dermatologists in Kathmandu' by Nepal Health Magazine (2023)",
    "Invited speaker at International Dermatology Summit (2023)",
    "Editorial board member of Journal of Dermatology Nepal",
    "Reviewer for Asian Journal of Dermatological Science",
    "Certificate of Appreciation for community health initiatives",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Honored for excellence in dermatological care and research
            </p>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Achievements</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Vikash Paudel's commitment to excellence in dermatology has been recognized through numerous awards and 
                  accolades from national and international organizations.
                </p>
              </div>

              {/* Awards Grid */}
              <div className="space-y-6">
                {awards.map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <Card key={index} className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medical)] transition-[var(--transition-smooth)]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                              <h3 className="text-xl font-semibold text-foreground">{award.title}</h3>
                              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold shrink-0">
                                {award.year}
                              </span>
                            </div>
                            <p className="text-primary font-medium mb-2">{award.organization}</p>
                            <p className="text-muted-foreground">{award.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Other Recognition */}
              <Card className="border-border shadow-[var(--shadow-card)] mt-12">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Additional Recognition</h2>
                  <ul className="space-y-4">
                    {recognitions.map((recognition, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">{recognition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Community Impact */}
              <Card className="border-border shadow-[var(--shadow-card)] bg-muted">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Community Impact</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Beyond professional achievements, Dr. Paudel is committed to giving back to the community through:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Free skin cancer screening camps in rural areas
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Health awareness programs on skin diseases
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Training and mentorship for medical students and residents
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Collaborative research initiatives with international institutions
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
