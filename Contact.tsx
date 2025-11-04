import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const clinics = [
    {
      name: "Patan Hospital",
      address: "Lagankhel, Lalitpur, Nepal",
      phone: "+977-XXXXXXXXXX",
      email: "patan@vikashpaudel.com.np",
      hours: [
        { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Elite Health Clinic",
      address: "Kathmandu, Nepal",
      phone: "+977-XXXXXXXXXX",
      email: "elite@vikashpaudel.com.np",
      hours: [
        { day: "Monday - Friday", time: "2:00 PM - 6:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Shankhamul Healthcare",
      address: "Shankhamul, Kathmandu, Nepal",
      phone: "+977-XXXXXXXXXX",
      email: "shankhamul@vikashpaudel.com.np",
      hours: [
        { day: "Tuesday & Thursday", time: "4:00 PM - 7:00 PM" },
        { day: "Saturday", time: "2:00 PM - 5:00 PM" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Get in touch for appointments, inquiries, or consultations
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Clinic Locations */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Clinic Locations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {clinics.map((clinic, index) => (
                    <Card key={index} className="border-border shadow-[var(--shadow-card)]">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">{clinic.name}</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{clinic.address}</span>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-accent shrink-0" />
                            <a href={`tel:${clinic.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                              {clinic.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-accent shrink-0" />
                            <a href={`mailto:${clinic.email}`} className="text-sm text-muted-foreground hover:text-primary">
                              {clinic.email}
                            </a>
                          </div>
                          
                          <div className="pt-3 border-t border-border">
                            <div className="flex items-start space-x-3 mb-2">
                              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm font-semibold text-foreground">Hours</span>
                            </div>
                            <div className="ml-8 space-y-1">
                              {clinic.hours.map((hour, idx) => (
                                <div key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{hour.day}:</span> {hour.time}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+977-XXXXXXXXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="clinic" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Clinic
                      </label>
                      <select
                        id="clinic"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a clinic</option>
                        <option value="patan">Patan Hospital</option>
                        <option value="elite">Elite Health Clinic</option>
                        <option value="shankhamul">Shankhamul Healthcare</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please describe your concern or inquiry..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="border-destructive/50 bg-destructive/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-destructive mb-2">Medical Emergency</h3>
                  <p className="text-muted-foreground">
                    If you are experiencing a medical emergency, please call emergency services immediately or visit the nearest emergency room. 
                    This contact form is not monitored 24/7 and should not be used for urgent medical situations.
                  </p>
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

export default Contact;
