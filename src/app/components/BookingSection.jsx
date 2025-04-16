import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarIcon, ClockIcon, SparklesIcon } from 'lucide-react'
import BookingForm from './BookingForm'

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedService, setSelectedService] = useState(null)

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ]

  const services = [
    { name: 'Signature Facial', duration: '60 min', price: '$120' },
    { name: 'Deep Tissue Massage', duration: '90 min', price: '$150' },
    { name: 'Luxury Body Ritual', duration: '120 min', price: '$200' },
    { name: 'Holistic Treatment', duration: '75 min', price: '$140' },
  ]

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#47405D] text-3xl md:text-4xl font-light mb-4 font-serif">
            Book Your <span className="font-semibold">Wellness Journey</span>
          </h2>
          <div className="h-1 w-24 bg-[#DD8036] mx-auto mb-6"></div>
          <p className="text-[#47405D] max-w-2xl mx-auto">
            Reserve your moment of tranquility with our expert therapists.
            Choose from our curated selection of treatments designed for your
            well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Left Side - Selection */}
          <div className="bg-[#2F4B71]/5 p-8 rounded-lg">
            {/* Date Picker */}
            <div className="mb-8">
              <h3 className="text-[#47405D] text-xl mb-6 flex items-center">
                <CalendarIcon className="mr-2 text-[#DD8036]" />
                Select Date
              </h3>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                className="w-full p-3 border border-[#DDAF72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD8036]"
                placeholderText="Choose your preferred date"
              />
            </div>

            {/* Time Picker */}
            <div className="mb-8">
              <h3 className="text-[#47405D] text-xl mb-6 flex items-center">
                <ClockIcon className="mr-2 text-[#DD8036]" />
                Select Time
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-lg text-sm transition-colors ${
                      selectedTime === time
                        ? 'bg-[#D24715] text-white'
                        : 'bg-white border border-[#DDAF72] text-[#47405D] hover:bg-[#DD8036] hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Picker */}
            <div>
              <h3 className="text-[#47405D] text-xl mb-6 flex items-center">
                <SparklesIcon className="mr-2 text-[#DD8036]" />
                Select Service
              </h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selectedService === service.name
                        ? 'bg-[#D24715] text-white'
                        : 'bg-white border border-[#DDAF72] text-[#47405D] hover:bg-[#DD8036] hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-sm">{service.price}</span>
                    </div>
                    <span className="text-sm opacity-80">
                      {service.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <BookingForm
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedService={selectedService}
          />
        </div>
      </div>
    </section>
  )
}

export default BookingSection
