
import React from 'react';
import { AppTab } from '../types';
import { COLORS } from '../constants';

interface LayoutProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const tabs = [
    { id: AppTab.HOME, label: 'Início', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    )},
    { id: AppTab.BOOK, label: 'Livro', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    )},
    { id: AppTab.PLAN, label: 'Plano', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    )},
    { id: AppTab.EMERGENCY, label: 'S.O.S', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
    )},
    { id: AppTab.ROUTINE, label: 'Corpo', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )},
    { id: AppTab.PROFILE, label: 'Perfil', icon: (color: string) => (
      <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
    )},
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto relative overflow-hidden bg-stone-50 shadow-2xl">
      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-6 scroll-hide">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-lg border-t border-stone-200 px-2 py-3 z-50">
        <div className="flex justify-between items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center flex-1 transition-all"
            >
              <div className={`p-1 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-emerald-50' : 'bg-transparent'}`}>
                {tab.icon(activeTab === tab.id ? COLORS.primary : '#9ca3af')}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${activeTab === tab.id ? 'text-emerald-800' : 'text-stone-400'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
