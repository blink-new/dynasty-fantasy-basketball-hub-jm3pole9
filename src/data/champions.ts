import { Champion } from '../types';

export const champions: Champion[] = [
  {
    teamName: "Dynasty Warriors",
    ownerName: "Michael Jordan",
    placement: 1,
    seriesScore: {
      wins: 5,
      losses: 4
    },
    stats: {
      PTS: 115.7,
      REBS: 48.3,
      AST: 26.9,
      STLS: 7.5,
      BLKS: 5.2,
      FGP: 47.3, // 47.3%
      FTP: 81.5, // 81.5%
      TPM: 12.8,
      TO: 13.2
    }
  },
  {
    teamName: "Hoops Elite",
    ownerName: "LeBron James",
    placement: 2,
    seriesScore: {
      wins: 4,
      losses: 5
    },
    stats: {
      PTS: 110.2,
      REBS: 45.8,
      AST: 25.1,
      STLS: 8.2,
      BLKS: 4.8,
      FGP: 45.9,
      FTP: 79.2,
      TPM: 11.5,
      TO: 14.7
    }
  },
  {
    teamName: "Ballers United",
    ownerName: "Stephen Curry",
    placement: 3,
    seriesScore: {
      wins: 7,
      losses: 2
    },
    stats: {
      PTS: 108.5,
      REBS: 43.6,
      AST: 24.8,
      STLS: 6.9,
      BLKS: 4.1,
      FGP: 46.2,
      FTP: 82.7,
      TPM: 14.2,
      TO: 12.5
    }
  }
];