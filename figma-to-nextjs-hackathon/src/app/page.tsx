import Branding from "@/components/Branding";
import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import NewsLettter from "@/components/NewsLetter";
import Story from "@/components/Story";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Branding/>
    <Collection />
    <Story />
    <NewsLettter  useBackgroundImage={true} textColor="text-white"/>
   </main>
  );
}
