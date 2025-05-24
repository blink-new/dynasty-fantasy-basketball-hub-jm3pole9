import HeroSection from './components/HeroSection';
import TeamsSection from './components/TeamsSection';
import { champions, teams } from './lib/data';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold">Dynasty Basketball</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-primary-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary-200 transition-colors">Teams</a></li>
              <li><a href="#" className="hover:text-primary-200 transition-colors">League Rules</a></li>
              <li><a href="#" className="hover:text-primary-200 transition-colors">History</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <HeroSection champions={champions} />
        <TeamsSection teams={teams} />
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-heading font-bold">Dynasty Fantasy Basketball</h2>
              <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;