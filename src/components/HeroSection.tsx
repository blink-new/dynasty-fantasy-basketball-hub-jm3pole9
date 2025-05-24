import { ChampionTeam } from '../types';
import { Podium } from './Podium';

interface HeroSectionProps {
  champions: ChampionTeam[];
}

export function HeroSection({ champions }: HeroSectionProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Dynasty Fantasy Basketball
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The ultimate hub for historic league data and championship glory
          </p>
        </div>
        
        <div className="relative">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Championship Podium
          </h2>
          <Podium champions={champions} />
        </div>
      </div>
    </section>
  );
}