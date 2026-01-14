
import React from 'react';
import { COLORS } from '../constants';
import { AppTab } from '../types';

interface HomeProps {
  setActiveTab: (tab: AppTab) => void;
  planProgress: number;
}

const Home: React.FC<HomeProps> = ({ setActiveTab, planProgress }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Author Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 flex items-center gap-4 transition-transform hover:scale-[1.01]">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-100 flex-shrink-0">
          <img 
            src="https://i.ibb.co/cXQJC7sZ/movecare-8651.jpg" 
            alt="Dra. Sammazyla de Cale" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Criado por</p>
          <h2 className="text-lg font-bold text-stone-800 leading-tight">Dra. Sammazyla de Cale</h2>
          <p className="text-[11px] text-stone-500 italic">
            Autora do livro Magra da Mente<br/>
            Especialista em ansiedade e emagrecimento emocional
          </p>
        </div>
      </div>

      {/* Main Message */}
      <div className="text-center py-6 space-y-4">
        <h1 className="text-4xl serif text-emerald-900 leading-snug">
          Você não é fraca.<br/>
          <span className="italic">Você está sobrecarregada.</span>
        </h1>
        <p className="text-stone-500 font-light text-lg">
          E existe um caminho mais leve para emagrecer.
        </p>
      </div>

      {/* Emergency Button */}
      <button
        onClick={() => setActiveTab(AppTab.EMERGENCY)}
        className="w-full py-5 px-8 rounded-2xl bg-rose-50 border-2 border-rose-100 flex items-center justify-between group active:scale-95 transition-all"
      >
        <div className="text-left">
          <p className="text-rose-600 font-bold text-lg">Estou com vontade de comer agora</p>
          <p className="text-rose-400 text-xs font-medium uppercase tracking-widest">Resgate em 90 segundos</p>
        </div>
        <div className="bg-rose-500 p-2 rounded-full shadow-lg shadow-rose-200">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
      </button>

      {/* Progress Bar */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 space-y-3">
        <div className="flex justify-between items-end">
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Plano 21 Dias</p>
          <p className="text-3xl font-bold">{Math.round((planProgress / 21) * 100)}%</p>
        </div>
        <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-400 transition-all duration-1000" 
            style={{ width: `${(planProgress / 21) * 100}%` }}
          />
        </div>
        <p className="text-[11px] opacity-60">Dia {planProgress} de 21 • Mantenha a constância leve</p>
      </div>

      {/* Anchor Phrase */}
      <div className="text-center py-4">
        <div className="inline-block p-4 border-y border-stone-200">
          <p className="text-emerald-800 serif italic text-xl">
            “Controle emocional vem antes do emagrecimento.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
