import Hero from '@/components/hero/index'
import TechStack from '@/components/tech-stack';
import { sleep, PAGE_TRANSITION_DURATION } from '@/lib/utils';

const Home = async () => {
  await sleep(PAGE_TRANSITION_DURATION)
  return (
    <main className="min-h-screen content-container flex flex-col justify-center py-10 px-5 gap-10 mx-auto">
      <Hero />
      <TechStack />
    </main>
  );
}

export default Home