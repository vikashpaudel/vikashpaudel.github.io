import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const Appointments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Schedule your consultation with Dr. Vikash Paudel for expert dermatological care
            </p>
          </div>
        </section>

        {/* Appointment Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Appointment Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border shadow-[var(--shadow-card)]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from multiple clinic locations and time slots that fit your schedule.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-[var(--shadow-card)]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Quick Response</h3>
                    <p className="text-muted-foreground">
                      We typically respond to appointment requests within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <Card className="border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Request an Appointment</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">
                          Age *
                        </label>
                        <input
                          type="number"
                          id="age"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your age"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+977-XXXXXXXXXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="emailAddress" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="clinicLocation" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Clinic Location *
                        </label>
                        <select
                          id="clinicLocation"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a clinic</option>
                          <option value="patan">Patan Hospital, Lagankhel</option>
                          <option value="elite">Elite Health Clinic</option>
                          <option value="shankhamul">Shankhamul Healthcare</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reasonForVisit" className="block text-sm font-medium text-foreground mb-2">
                        Reason for Visit *
                      </label>
                      <select
                        id="reasonForVisit"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select reason for visit</option>
                        <option value="acne">Acne Treatment</option>
                        <option value="aesthetic">Aesthetic Dermatology</option>
                        <option value="surgery">Skin Surgery Consultation</option>
                        <option value="hair">Hair Disorder</option>
                        <option value="pigmentation">Pigmentation Issues</option>
                        <option value="rash">Skin Rash or Infection</option>
                        <option value="general">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please provide any additional details about your condition or concerns..."
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to the collection and processing of my personal information for appointment scheduling purposes. *
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Request Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-border shadow-[var(--shadow-card)] bg-muted">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Need Help Booking?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you prefer to book by phone or have questions about appointments, please contact us directly:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Patan Hospital</p>
                        <p className="text-sm text-muted-foreground">+977-XXXXXXXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Elite Health Clinic</p>
                        <p className="text-sm text-muted-foreground">+977-XXXXXXXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Shankhamul Healthcare</p>
                        <p className="text-sm text-muted-foreground">+977-XXXXXXXXXX</p>
                      </div>
                    </div>
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

export default Appointments;
