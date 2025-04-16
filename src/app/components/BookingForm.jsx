import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageSquareIcon,
} from 'lucide-react'

const BookingForm = ({ selectedDate, selectedTime, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.notes,
      user_service: selectedService,
      appointment_date: selectedDate?.toLocaleDateString(),
      appointment_time: selectedTime,
      email: 'teedire@gmail.com', 
    }
  
    emailjs
      .send(
        'service_98hxizg', // Your EmailJS service ID
        'template_ckqbk5t', // Your template ID
        templateParams,
        'ZYgQsh4gUWNEfiwtW' // Your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.text)
        alert('Booking sent successfully! We’ll be in touch soon.')
  
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          notes: '',
        })
      })
      .catch((error) => {
        console.error('Email sending failed:', error)
        alert('Oops! Something went wrong. Please try again later.')
      })
  }
  

  return (
    <div className="bg-white p-8 rounded-lg border border-[#DDAF72]">
      <h3 className="text-[#47405D] text-xl mb-6">Personal Information</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="flex items-center text-[#47405D] mb-2">
              <UserIcon className="w-4 h-4 mr-2 text-[#DD8036]" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border border-[#DDAF72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD8036]"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-[#47405D] mb-2">
              <MailIcon className="w-4 h-4 mr-2 text-[#DD8036]" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-[#DDAF72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD8036]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-[#47405D] mb-2">
              <PhoneIcon className="w-4 h-4 mr-2 text-[#DD8036]" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full p-3 border border-[#DDAF72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD8036]"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-[#47405D] mb-2">
              <MessageSquareIcon className="w-4 h-4 mr-2 text-[#DD8036]" />
              Special Requests
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full p-3 border border-[#DDAF72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD8036] h-32"
              placeholder="Any special requests or notes?"
            />
          </div>
        </div>

        {selectedDate && selectedTime && selectedService && (
          <div className="bg-[#2F4B71]/5 p-4 rounded-lg mb-6">
            <h4 className="text-[#47405D] font-medium mb-2">Booking Summary</h4>
            <div className="text-sm text-[#47405D]/80">
              <p>Service: {selectedService}</p>
              <p>Date: {selectedDate.toLocaleDateString()}</p>
              <p>Time: {selectedTime}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-[#D24715] text-white rounded-lg hover:bg-[#DD8036] transition-colors duration-300 font-medium"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

export default BookingForm
