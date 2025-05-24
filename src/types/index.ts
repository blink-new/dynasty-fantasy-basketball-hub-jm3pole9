export interface ChampionTeam {
  position: 1 | 2 | 3;
  teamName: string;
  ownerName: string;
  seriesScore: {
    wins: number;
    losses: number;
  };
  stats: {
    points: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
    fieldGoalPercentage: number;
    freeThrowPercentage: number;
    threePointersMade: number;
    turnovers: number;
  };
}

export interface Team {
  id: string;
  teamName: string;
  logoUrl?: string;
  ownerId: string;
  ownerName: string;
}