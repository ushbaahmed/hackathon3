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
