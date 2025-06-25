import React from "react";
import { Car, Star, MapPin } from "lucide-react";

import type { CarData } from "@myTypes/components/carData";
import { cars } from "@myTypes/pages/landingPage/carsInfo";

const CarCard: React.FC<{ car: CarData }> = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {car.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{car.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-emerald-500">
              ${car.price}
            </span>
            <span className="text-gray-500 text-sm">/día</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin size={14} />
          <span className="text-sm">{car.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {car.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-2">
                {feature.icon}
              </div>
              <span className="text-xs text-gray-600">{feature.label}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
          <Car size={18} />
          Rentar
        </button>
      </div>
    </div>
  );
};

const CarRental: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Explora </span>
            <span className="text-emerald-500">Nuestros Carros</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia selección de vehículos perfectos para
            cualquier ocasión. Desde compactos económicos hasta SUVs premium.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRental;
