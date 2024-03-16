import Hero from '@/components/hero/index'
import TechStack from '@/components/tech-stack';

const Home = async () => {
  return (
    <main className="min-h-screen content-container flex flex-col justify-center py-10 px-5 gap-10 mx-auto">
      <Hero />
      <TechStack />
    </main>
  );
}

export default Home