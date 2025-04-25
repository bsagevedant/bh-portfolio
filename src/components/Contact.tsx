import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 container mx-auto">
      <h2 className="section-title text-center">
        Get in <span className="highlight">Touch</span>
      </h2>
      <p className="section-subtitle text-center">
        Have questions about our fish seeds or need expert advice? We're here to help!
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Quick Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/7903716957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp</h4>
                  <p className="text-white/80">+91 7903716957</p>
                </div>
              </a>

              <a 
                href="tel:7903716957"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Now</h4>
                  <p className="text-white/80">+91 7903716957</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-400">info@bharatmatsya.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-400">
                    Near Amul Dairy Road<br />
                    Anand, Gujarat 388001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6">
          <h3 className="text-2xl font-semibold">Our Location</h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3649.160872247197!2d85.999847!3d25.9475033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!4m12!1m0!1m5!1m1!1s0x39ede9003f382357:0x24b3aedae8ee863d!2m2!1d86.0822485!2d25.9475266!1m5!1m1!1s0x39ede9003f382357:0x24b3aedae8ee863d!2m2!1d86.0822485!2d25.9475266"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Bharat Matsya Hatchery</h4>
            <p className="text-gray-400">
              Near Amul Dairy Road<br />
              Anand, Gujarat 388001<br />
              India
            </p>
            <div className="flex gap-4">
              <a 
                href="https://goo.gl/maps/1234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-gray-300">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-300">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
