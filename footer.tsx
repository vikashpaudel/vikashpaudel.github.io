import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Dr. Vikash Paudel</h3>
            <p className="text-sm text-muted-foreground">
              Expert dermatologist providing comprehensive skin care solutions in Kathmandu, Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Clinics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Patan Academy of Health Sciences, Patan Hospital, Lagankhel, Lalitpur</li>
              <li>Elite Health Clinic, Mahalaxmisthan, Lagankhel, Laitpur</li>
              <li>Shankhamul Healthcare, Shankhamul, New Baneswor, Kathmandu </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Patan Academy of Health Sciences, Patan Hospital, Lagankhel, Lalitpur</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">+977-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">contact@vikashpaudel.com.np</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Mon-Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Vikash Paudel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
