import Application from '@/components/Application/Application';
import Hero from '@/components/Hero/Hero';
import Rules from '@/components/HowItWorks/HowItWorks';
import Main from '@/components/Main/Main';

export default function Home() {
  return (
    <Main>
      <Hero />
      <Application />
      <Rules />
    </Main>
  );
}
