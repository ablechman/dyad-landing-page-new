import Navigation from '../components/Navigation';
import Header from '../components/sections/Header';
import HowItWorks from '../components/sections/HowItWorks';
import ProofPoint from '../components/sections/ProofPoint';
import Team from '../components/sections/Team';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Header />
        <HowItWorks />
        <ProofPoint />
        <Team />
        <FinalCTA />
      </main>
    </>
  );
}