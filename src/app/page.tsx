import Image from 'next/image';
import Car1 from "./data/car1.png"
import Car2 from "./data/car2.png"
import RentalForm from "./rental/page"
import ProductList from "./product/page"
export default function HeroSection() {
    return (
      <div className=" bg-gray-50 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-blue-400 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
          src={Car1}
          alt="Car"
          className="mt-6 w-full object-contain h-40"
          />
          </div>
  
          {/* Right Section */}
          <div className="bg-blue-600 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
          src={Car2}
          alt="Car"
          className="mt-6 w-full object-contain h-40"
          />
          </div>
        </div>
        <RentalForm/>
        <ProductList/>
      </div>
    );
}