import Navigation from '../components/Navigation';
import Header from '../components/sections/Header';
import HowItWorks from '../components/sections/HowItWorks';
import Benefits from '../components/sections/Benefits';
import Team from '../components/sections/Team';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Header />
        <HowItWorks />
        <Benefits />
        <Team />
        <FinalCTA />
      </main>
    </>
  );
}