import { FaCheckCircle, FaCreditCard, FaRecycle } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

function Branding() {
  return (
    <main className="container mx-auto mt-12 px-4 sm:px-8">
      {/* Center Heading */}
      <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-10">
        What Makes Our Brand Different
      </h1>

      {/* Branding Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Next day delivery */}
        <div className="flex flex-col items-start bg-gray-100 p-4 sm:p-6 rounded-lg text-black shadow-sm">
          <FaTruckFast className="text-3xl sm:text-4xl mb-3" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Next day as standard
          </h2>
          <p className="text-sm sm:text-base">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        <div className="flex flex-col items-start bg-gray-100 p-4 sm:p-6 rounded-lg text-black shadow-sm">
          <FaCheckCircle className="text-3xl sm:text-4xl mb-3" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Made by true artisans
          </h2>
          <p className="text-sm sm:text-base">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        <div className="flex flex-col items-start bg-gray-100 p-4 sm:p-6 rounded-lg text-black shadow-sm">
          <FaCreditCard className="text-3xl sm:text-4xl mb-3" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Unbeatable prices
          </h2>
          <p className="text-sm sm:text-base">
            For our materials and quality, you won’t find better prices
            anywhere.
          </p>
        </div>

        <div className="flex flex-col items-start bg-gray-100 p-4 sm:p-6 rounded-lg text-black shadow-sm">
          <FaRecycle className="text-3xl sm:text-4xl mb-3" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Recycled packaging
          </h2>
          <p className="text-sm sm:text-base">
            We use 100% recycled materials to ensure our footprint is more
            manageable.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Branding;
