
import React, { useState, useCallback } from 'react';
import { AppTab } from './types';
import Layout from './components/Layout';
import Home from './screens/Home';
import Book from './screens/Book';
import Plan21 from './screens/Plan21';
import Emergency from './screens/Emergency';
import Routine from './screens/Routine';
import Profile from './screens/Profile';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [emergencyCount, setEmergencyCount] = useState(0);

  const toggleDay = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day].sort((a, b) => a - b)
    );
  };

  const handleEmergencyComplete = useCallback(() => {
    setEmergencyCount(prev => prev + 1);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Home setActiveTab={setActiveTab} planProgress={completedDays.length} />;
      case AppTab.BOOK:
        return <Book />;
      case AppTab.PLAN:
        return <Plan21 completedDays={completedDays} toggleDay={toggleDay} />;
      case AppTab.EMERGENCY:
        return (
          <Emergency 
            onComplete={handleEmergencyComplete} 
            onFinish={() => setActiveTab(AppTab.HOME)} 
          />
        );
      case AppTab.ROUTINE:
        return <Routine />;
      case AppTab.PROFILE:
        return (
          <Profile 
            activeDays={completedDays.length} 
            emergencyCount={emergencyCount} 
            onReset={() => {
              setCompletedDays([]);
              setEmergencyCount(0);
            }}
          />
        );
      default:
        return <Home setActiveTab={setActiveTab} planProgress={completedDays.length} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-fadeIn">
        {renderContent()}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </Layout>
  );
};

export default App;
