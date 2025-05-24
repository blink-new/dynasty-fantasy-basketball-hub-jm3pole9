import { Trophy } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-bold">Dynasty Fantasy Basketball</span>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <a href="#champions">Champions</a>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <a href="#teams">Teams</a>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <a href="#rules">League Rules</a>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <a href="#history">History</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}