import Hero from '@/components/hero/index'
import TechStack from '@/components/tech-stack';

const Home = async () => {
  // min-h-[800px] is used to prevent from overflowing the header on smaller devices
  return (
    <main className="h-heightWithoutHeader min-h-[800px] content-container flex flex-col justify-center px-5 gap-10 mx-auto">
      <Hero />
      <TechStack />
    </main>
  );
}

export default Home