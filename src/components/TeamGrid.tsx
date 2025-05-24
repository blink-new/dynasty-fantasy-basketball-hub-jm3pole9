import { useState } from 'react';
import { Team } from '../types';
import TeamCard from './TeamCard';

interface TeamGridProps {
  teams: Team[];
}

const TeamGrid = ({ teams }: TeamGridProps) => {
  const [teamsData, setTeamsData] = useState<Team[]>(teams);

  const handleLogoUpdate = (teamId: string, logo: string) => {
    setTeamsData(prevTeams => 
      prevTeams.map(team => 
        team.id === teamId ? { ...team, logo } : team
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
      {teamsData.map(team => (
        <div key={team.id} className="flex justify-center">
          <TeamCard team={team} onLogoUpdate={handleLogoUpdate} />
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;