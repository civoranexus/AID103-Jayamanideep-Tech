import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-civora-blue mb-3">CropGuard AI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligent crop disease detection system providing farmers with precise, 
              data-driven insights for early identification and treatment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-civora-blue transition-colors">About CropGuard</a></li>
              <li><a href="#" className="hover:text-civora-blue transition-colors">Disease Database</a></li>
              <li><a href="#" className="hover:text-civora-blue transition-colors">Advisory Services</a></li>
              <li><a href="#" className="hover:text-civora-blue transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Contact Information</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-civora-blue flex-shrink-0" />
                <span>Sangamner, Maharashtra - 422605 India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-civora-blue flex-shrink-0" />
                <span>+91-7350 675192</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Civora Nexus Pvt. Ltd. All rights reserved.</p>
            <p className="text-civora-blue font-medium">
              Connecting Citizens Through Intelligent Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
