import Branding from "@/components/Branding";
import NewsLettter from "@/components/NewsLetter";
import Story from "@/components/Story";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Section 1: Heading and Button */}
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 md:mb-0 md:ml-8">
          A brand built on the love of craftmanship, <br />
          quality and outstanding customer service
        </h1>
        <Link href={"/products"}>
        <button className="bg-gray-100 text-sm sm:text-base lg:text-lg px-6 py-4  hover:bg-gray-200 transition">
          View Our Products
        </button>
        </Link>
      </div>

      {/* Section 2: Story Component */}
      <div className="mt-12">
        <Story />
      </div>

      {/* Section 3: Image, Heading, Paragraph, Button */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex -ml-44 justify-center">
          <Image
            src="/about.png"
            alt="About Us"
            width={600}
            height={500}
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
            {`Our service isn’t just personal, it’s actually
            hyper personally exquisite`}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            When we started Avion, the idea was simple: make high-quality furniture affordable and
            available for the mass market. Handmade and lovingly crafted furniture and homeware is
            what we live, breathe, and design. Our Chelsea boutique has become a hotbed for the
            London interior design community.
          </p>
          <button className="bg-gray-100 text-black px-8 py-4">
            Get in touch
          </button>
        </div>
      </div>

      <div className="pt-14">
        <Branding/>
      </div>

      <div>
        <NewsLettter useBackgroundImage={false} textColor="text-black" />
      </div>

    </main>
  );
}

export default About;
