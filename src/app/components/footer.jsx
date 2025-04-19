import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#47405D] text-white" id='footer'>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section with Updated Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/icons/spa.png"
                alt="Logo Icon"
                className="w-8 h-8 object-contain"
              />
              <a href="/" className="cursor-pointer">
                <h1 className="text-3xl md:text-2xl font-bold tracking-wide font-rouge-script text-white">
                  Vérité Grace Studio
                </h1>
              </a>
            </div>
            <p className="text-sm text-white/80 mt-1 font-inter">
              Where true, natural beauty meets elegance and grace.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:text-[#DD8036] active:scale-95 transition-transform duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="h-0.5 w-16 bg-[#DD8036]"></div>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Services',
                'Book Appointment',
                'Gift Cards',
                'Special Offers',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#DDAF72] transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <div className="h-0.5 w-16 bg-[#DD8036]"></div>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-white/80 hover:text-[#DDAF72] active:scale-95 transition-transform duration-300"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@serenityhaven.com"
                className="flex items-center space-x-3 text-white/80 hover:text-[#DDAF72] active:scale-95 transition-transform duration-300"
              >
                <MailIcon className="h-5 w-5" />
                <span>info@veritegrace.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPinIcon className="h-5 w-5" />
                <span>
                  123 Tranquility Lane
                  <br />
                  Serenity City, SC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Vérité Grace Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a
                href="#"
                className="hover:text-[#DDAF72] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#DDAF72] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
