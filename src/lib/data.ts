import { ChampionTeam, Team } from '../types';

export const champions: ChampionTeam[] = [
  {
    position: 1,
    teamName: "Dynasty Warriors",
    ownerName: "Michael Jordan",
    seriesScore: {
      wins: 5,
      losses: 4
    },
    stats: {
      points: 115.8,
      rebounds: 48.3,
      assists: 26.7,
      steals: 8.2,
      blocks: 5.9,
      fieldGoalPercentage: 0.472,
      freeThrowPercentage: 0.838,
      threePointersMade: 12.4,
      turnovers: 13.1
    }
  },
  {
    position: 2,
    teamName: "Clutch City",
    ownerName: "Hakeem Olajuwon",
    seriesScore: {
      wins: 4,
      losses: 5
    },
    stats: {
      points: 109.2,
      rebounds: 52.1,
      assists: 22.5,
      steals: 7.8,
      blocks: 6.4,
      fieldGoalPercentage: 0.458,
      freeThrowPercentage: 0.814,
      threePointersMade: 10.8,
      turnovers: 14.3
    }
  },
  {
    position: 3,
    teamName: "Showtime",
    ownerName: "Magic Johnson",
    seriesScore: {
      wins: 6,
      losses: 3
    },
    stats: {
      points: 112.6,
      rebounds: 45.9,
      assists: 29.3,
      steals: 9.1,
      blocks: 4.7,
      fieldGoalPercentage: 0.489,
      freeThrowPercentage: 0.792,
      threePointersMade: 11.2,
      turnovers: 12.5
    }
  }
];

export const teams: Team[] = [
  {
    id: "team1",
    teamName: "Dynasty Warriors",
    logoUrl: "https://images.unsplash.com/photo-1546519638-68e109acd27d?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner1",
    ownerName: "Michael Jordan"
  },
  {
    id: "team2",
    teamName: "Clutch City",
    logoUrl: "https://images.unsplash.com/photo-1592210566091-4aa925bde5c8?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner2",
    ownerName: "Hakeem Olajuwon"
  },
  {
    id: "team3",
    teamName: "Showtime",
    logoUrl: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner3",
    ownerName: "Magic Johnson"
  },
  {
    id: "team4",
    teamName: "Air Time",
    logoUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner4",
    ownerName: "Kobe Bryant"
  },
  {
    id: "team5",
    teamName: "Splash Brothers",
    logoUrl: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner5",
    ownerName: "Stephen Curry"
  },
  {
    id: "team6",
    teamName: "Greek Freaks",
    logoUrl: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner6",
    ownerName: "Giannis Antetokounmpo"
  },
  {
    id: "team7",
    teamName: "King's Court",
    logoUrl: "https://images.unsplash.com/photo-1560506840-ec148e82a604?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner7",
    ownerName: "LeBron James"
  },
  {
    id: "team8",
    teamName: "Dream Team",
    logoUrl: "https://images.unsplash.com/photo-1499754162586-08f451261482?q=80&w=200&auto=format&fit=crop",
    ownerId: "owner8",
    ownerName: "Larry Bird"
  }
];