import React from 'react'

const ServiceCard = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#47405D]/30"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-[#47405D]/10 mr-4">{icon}</div>
          <h3 className="text-xl font-medium text-[#47405D]">{title}</h3>
        </div>
        <p className="text-[#47405D]/80 mb-6 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="flex items-center text-[#DD8036] font-medium">
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="h-0.5 w-16 bg-[#DDAF72] mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
