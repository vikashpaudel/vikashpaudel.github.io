import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Award } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "The increasing scope of teledermatology in Nepal",
      journal: "JNMA: Journal of the Nepal Medical Association",
      year: "2020",
      type: "Research Article",
      citations: 15,
      description: "Comprehensive analysis of teledermatology implementation and its growing impact on healthcare delivery in Nepal.",
    },
    {
      title: "Carbamazepine Induced Toxic Epidermal Necrolysis Managed by Mobile Teledermatology in COVID-19 Pandemic in Rural Nepal",
      journal: "Case Reports in Dermatological Medicine",
      year: "2020",
      type: "Case Report",
      citations: 10,
      description: "Innovative approach to managing severe drug reactions using mobile teledermatology during the COVID-19 pandemic in rural settings.",
    },
    {
      title: "Clinical and Epidemiological Profile of Herpes Zoster; A Cross-Sectional Study from Tertiary Hospital",
      journal: "med Phoenix",
      year: "2018",
      type: "Clinical Study",
      citations: 9,
      description: "Cross-sectional study examining the clinical presentation and epidemiological patterns of Herpes Zoster in tertiary care settings.",
    },
    {
      title: "Clinical and Histopathological Findings in a Patient of Darier–White Disease with Acrokeratosis Verruciformis of Hopf",
      journal: "Case Reports in Dermatological Medicine",
      year: "2022",
      type: "Case Report",
      citations: 8,
      description: "Detailed case study documenting the clinical and histopathological characteristics of a rare dermatological condition.",
    },
    {
      title: "Patterns and barriers of teledermatology in resource-limited settings in COVID-19 pandemic: A descriptive cross-sectional survey of Nepalese dermatologists",
      journal: "JAAD International",
      year: "2022",
      type: "Research Article",
      citations: 7,
      description: "Survey-based study identifying challenges and adoption patterns of teledermatology in resource-limited healthcare settings during COVID-19.",
    },
    {
      title: "Tele-dermatology in clinical management of suspected cutaneous leishmaniasis in COVID-19 pandemic",
      journal: "Nepal Journal of Dermatology, Venereology & Leprology",
      year: "2020",
      type: "Clinical Study",
      citations: 7,
      description: "Application of teledermatology for diagnosis and management of cutaneous leishmaniasis during the pandemic.",
    },
    {
      title: "Alopecia associated with the use of selective serotonin reuptake inhibitors: Systematic review",
      journal: "Psychiatry Research",
      year: "2022",
      type: "Review Article",
      citations: 6,
      description: "Systematic review examining the relationship between SSRI medications and hair loss conditions.",
    },
    {
      title: "Alopecia universalis associated with hyperthyroidism treated with azathioprine and hydroxychloroquine: a case report",
      journal: "JNMA: Journal of the Nepal Medical Association",
      year: "2021",
      type: "Case Report",
      citations: 6,
      description: "Case report documenting successful treatment of alopecia universalis in a patient with concurrent hyperthyroidism.",
    },
    {
      title: "Isolated leprosy of bilateral ear lobes, a rare presentation of leprosy",
      journal: "Kathmandu University Medical Journal",
      year: "2021",
      type: "Case Report",
      citations: 6,
      description: "Documentation of an unusual presentation of leprosy affecting bilateral ear lobes.",
    },
    {
      title: "Surgery of Kerion, a Nightmare for Nondermatologists",
      journal: "Medical Journal",
      year: "2020",
      type: "Review Article",
      citations: 6,
      description: "Educational review discussing proper surgical management of kerion and common pitfalls in treatment.",
    },
  ];

  const presentations = [
    {
      title: "Novel Approaches in Aesthetic Dermatology",
      event: "Annual Dermatology Conference Nepal",
      year: "2023",
    },
    {
      title: "Managing Complex Skin Conditions",
      event: "South Asian Dermatology Summit",
      year: "2023",
    },
    {
      title: "Dermatologic Surgery Workshop",
      event: "Nepal Medical Association Conference",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications & Research</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Contributing to dermatological knowledge through research and academic publications
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Published Research</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Vikash Paudel has contributed to numerous peer-reviewed journals and publications, 
                  advancing the field of dermatology through evidence-based research and clinical studies.
                </p>
              </div>

              {/* Publications List */}
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medical)] transition-[var(--transition-smooth)]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{pub.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                            <span className="font-medium">{pub.journal}</span>
                            <span>•</span>
                            <span>{pub.year}</span>
                            <span>•</span>
                            <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                              {pub.type}
                            </span>
                            {pub.citations && (
                              <>
                                <span>•</span>
                                <span className="text-accent font-medium">{pub.citations} citations</span>
                              </>
                            )}
                          </div>
                          <p className="text-muted-foreground">{pub.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Presentations Section */}
              <div className="mt-16">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Conference Presentations</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {presentations.map((pres, index) => (
                    <Card key={index} className="border-border shadow-[var(--shadow-card)]">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{pres.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{pres.event}</p>
                        <p className="text-sm text-primary font-medium">{pres.year}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Research Focus */}
              <Card className="border-border shadow-[var(--shadow-card)] bg-muted">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Current Research Focus</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Dr. Paudel's research focuses on teledermatology, dermatosurgery, venereology, and leprosy. Key areas include:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Teledermatology implementation and barriers in resource-limited settings
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Clinical management of complex dermatological conditions and rare presentations
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Drug-induced dermatological reactions and their management
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">
                          Leprosy and venereological conditions in Nepal
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

export default Publications;
