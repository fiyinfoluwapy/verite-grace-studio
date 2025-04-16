'use client';

import BookingSection from '../components/BookingSection';

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] py-10 px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-[#47405D] mb-10">
        Book an Appointment
      </h1>
      <BookingSection />
    </div>
  );
}
