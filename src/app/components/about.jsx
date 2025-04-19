'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
}

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
              alt="Luxurious spa interior with candles and treatment supplies"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <h2 className="text-[#47405D] text-3xl md:text-4xl font-light mb-6 font-cormorant">
              Discover <span className="font-semibold font-playfair">Tranquility</span>
            </h2>
            <div className="h-1 w-24 bg-[#DD8036] mb-8"></div>

            <motion.p variants={fadeInUp} className="text-[#47405D] mb-6 text-lg font-cormorant">
              Welcome to Vérité Grace Studio, where luxury meets wellness in a
              harmonious retreat from the everyday world. Our sanctuary is
              designed to nurture your body, mind, and spirit through carefully
              curated treatments and rituals.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[#47405D] mb-8 font-cormorant">
              Founded in 2010, our spa combines ancient healing traditions with
              modern techniques to deliver transformative experiences that
              restore balance and promote well-being. Our team of expert
              therapists are dedicated to providing personalized care in an
              atmosphere of absolute tranquility.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-[#D24715] text-white rounded hover:bg-[#DD8036] transition duration-300"
            >
              Our Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
