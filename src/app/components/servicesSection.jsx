import React from 'react'
import ServiceCard from './serviceCard'
import {
  Sparkles, // Facials Icon
  Heart, // Massage Icon
  Flower, // Holistic Icon
  Droplet, // Body Rituals Icon
  Scissors, // Haircut Icon
  Gamepad, // Snooker Icon
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Signature Facials',
      description:
        "Rejuvenating treatments using premium products to restore your skin's natural radiance and vitality.",
      icon: <Sparkles className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://images.unsplash.com/photo-1603217040830-34473db521a2?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: 'Therapeutic Massage',
      description:
        'Customized massage therapies designed to relieve tension, reduce stress, and promote deep relaxation.',
      icon: <Heart className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Holistic Treatments',
      description:
        'Ancient healing rituals and modern techniques combined to restore balance to body and mind.',
      icon: <Flower className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2044&auto=format&fit=crop',
    },
    {
      title: 'Luxury Body Rituals',
      description:
        'Indulgent body treatments that nourish your skin and elevate your senses for complete renewal.',
      icon: <Droplet className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Haircut (Barbing)',
      description:
        'Precision haircuts and grooming services to suit your style and personality.',
      icon: <Scissors className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://i.pinimg.com/736x/0d/f3/5a/0df35a405a583d650b561657a15b5933.jpg',
    },
    {
      title: 'Nails (Manicure & Pedicure)',
      description:
        'Pampering manicure and pedicure services to keep your hands and feet looking and feeling great.',
      icon: <Scissors className="h-8 w-8 text-[#DD8036]" />, // Placeholder, change to relevant icon
      image:
        'https://i.pinimg.com/736x/07/ee/d3/07eed3c62c581ab1e60d52bc9dcb30ed.jpg',
    },
    {
      title: 'Lash Fixing',
      description:
        'Enhance your eyes with beautifully applied eyelash extensions for a natural or dramatic look.',
      icon: <Scissors className="h-8 w-8 text-[#DD8036]" />, // Placeholder, change to relevant icon
      image:
        'https://i.pinimg.com/736x/02/bd/f3/02bdf3dc8f68f4b068c426a3deb7d4a1.jpg',
    },
    {
      title: 'Snooker (Pool) Game Area',
      description:
        'Enjoy a fun and relaxing time in our snooker game area.',
      icon: <Gamepad className="h-8 w-8 text-[#DD8036]" />,
      image:
        'https://i.pinimg.com/736x/ab/0e/49/ab0e49544c2b7a85c08632a0406b5726.jpg',
    },
  ]

  return (
    <section className="w-full py-16 px-4 bg-[#2F4B71]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#47405D] text-3xl md:text-4xl font-light mb-4 font-serif">
            Our <span className="font-semibold">Premium Services</span>
          </h2>
          <div className="h-1 w-24 bg-[#DD8036] mx-auto mb-6"></div>
          <p className="text-[#47405D] max-w-2xl mx-auto">
            Discover our carefully curated selection of treatments designed to
            restore, rejuvenate, and revitalize your body and spirit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
