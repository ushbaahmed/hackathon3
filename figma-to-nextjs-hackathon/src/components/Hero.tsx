import Image from "next/image";

function Hero() {
    return (
        <main className="relative w-full">
            {/* Wrapper for the hero section */}
            <div className="relative md:h-[calc(100vh-80px)] w-full">
                {/* Background Image for Desktop */}
                <div className="hidden md:block absolute inset-0">
                    <Image
                        src={"/hero/Hero.png"} // Replace with your image path
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col items-start justify-center bg-white  md:absolute md:right-28 md:top-1/2 md:transform md:-translate-y-1/2 md:w-[550px] md:h-[350px] shadow-lg md:shadow-none p-6 md:p-10">
                    <h1 className="text-2xl md:text-3xl text-black leading-snug mb-4">
                        Luxury Homeware for people <br /> who love timeless design quality
                    </h1>
                    <p className="text-sm md:text-base text-gray-400 mb-6">
                        Shop the new Spring 2022 collection today
                    </p>
                    <button className="bg-gray-100 text-black py-3 px-6 hover:bg-gray-500 hover:text-white transition duration-300">
                        View Collection
                    </button>
                </div>

                {/* Image Section for Mobile */}
                <div className="block md:hidden w-full h-[350px]">
                    <Image
                        src={"/hero/Hero.png"} // Replace with your image path
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                    />
                </div>
            </div>
        </main>
    );
}

export default Hero;
