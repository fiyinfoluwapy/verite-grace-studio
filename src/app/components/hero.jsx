"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();

  // Navigate to bookings page when "Book Appointment" is clicked
  const handleBookingClick = () => {
    router.push('/bookings');
  };

  // Scroll to services section when "Explore Services" is clicked
  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#2F4B71] mt-24 sm:mt-20 md:mt-12">
      {/* Background and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2070&q=80"
          alt="Spa ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2F4B71]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col justify-center h-full">
        <motion.div
          className="max-w-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#DDAF72] leading-tight mb-6">
            Your Journey to <span className="italic text-white">Tranquility</span> Begins Here
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
            Indulge in our premium spa treatments and beauty services designed to rejuvenate your body and soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Book Appointment Button */}
            <button
              onClick={handleBookingClick}
              className="px-6 py-3 rounded-md flex items-center justify-center transition-all duration-300 font-medium text-sm bg-[#D24715] hover:bg-[#b93e11] text-white"
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              Book Appointment
            </button>

            {/* Explore Services Button */}
            <button
              onClick={handleExploreServices}
              className="px-6 py-3 rounded-md flex items-center justify-center transition-all duration-300 font-medium text-sm bg-[#DD8036] hover:bg-[#e88e43] text-white border border-[#DDAF72]"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/3 h-32 bg-white/20 backdrop-blur-sm rounded-tl-full hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </section>
  );
}
