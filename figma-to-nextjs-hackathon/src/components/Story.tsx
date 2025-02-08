import Image from "next/image";
import Link from "next/link";

function Story() {
  return (
    <main className="container mx-auto pt-0 mt-16 pb-0 text-white px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section: Text and Button */}
        <div className="bg-blue-950 w-full lg:w-[600px] h-auto lg:h-[500px] flex flex-col justify-between p-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 lg:mt-10 ml-4 sm:ml-6">
              It started with a small idea
            </h1>
            <p className="mt-4 ml-4 sm:ml-6 text-sm sm:text-base">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
          </div>
          {/* Button with fixed size and alignment */}
          <Link href={"/products"}>
          <button className="px-4 py-2 sm:py-3 ml-4 sm:ml-6 bg-gray-600 text-white transition duration-300 w-max mx-auto mt-6 lg:mt-0 mb-4">
            View Collection
          </button>
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[600px] h-auto lg:h-[500px] flex justify-center">
          <Image
            src="/style.png"
            alt="story image"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}

export default Story;
