
import React from 'react';
import { PLAN_DAYS } from '../constants';

interface Plan21Props {
  completedDays: number[];
  toggleDay: (day: number) => void;
}

const Plan21: React.FC<Plan21Props> = ({ completedDays, toggleDay }) => {
  const currentDayNumber = completedDays.length + 1;
  const isPlanFinished = completedDays.length >= 21;

  const handleRegisterClick = () => {
    if (!isPlanFinished) {
      toggleDay(currentDayNumber);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="space-y-2">
        <h1 className="text-3xl serif text-emerald-950">Plano 21 Dias</h1>
        <p className="text-stone-500 text-sm">Pequenos passos para uma nova identidade. Um dia de cada vez, sem pressa.</p>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {PLAN_DAYS.map((day) => {
          const isCompleted = completedDays.includes(day.day);
          const isCurrent = completedDays.length + 1 === day.day;
          
          return (
            <button
              key={day.day}
              onClick={() => toggleDay(day.day)}
              className={`relative h-24 rounded-3xl border-2 transition-all flex flex-col items-center justify-center gap-1
                ${isCompleted ? 'bg-emerald-100 border-emerald-200' : isCurrent ? 'bg-white border-emerald-500 shadow-lg shadow-emerald-100' : 'bg-white border-stone-100'}
              `}
            >
              <span className={`text-xs font-bold ${isCompleted ? 'text-emerald-700' : 'text-stone-400'}`}>DIA</span>
              <span className={`text-3xl font-bold ${isCompleted ? 'text-emerald-800' : isCurrent ? 'text-emerald-900' : 'text-stone-300'}`}>{day.day}</span>
              {isCompleted && (
                <div className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full p-1 shadow-md">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="bg-emerald-900 rounded-3xl p-8 text-white space-y-6">
        <h3 className="serif text-2xl italic">Check-in de hoje</h3>
        <p className="opacity-80 leading-relaxed font-light">
          {PLAN_DAYS[completedDays.length]?.reflection || "Você completou o ciclo! Continue firme na sua nova identidade."}
        </p>
        {!isPlanFinished && (
          <button 
            onClick={handleRegisterClick}
            className="w-full py-4 bg-white/10 rounded-2xl border border-white/20 font-medium hover:bg-white/20 active:scale-95 transition-all"
          >
            Registrar no Diário
          </button>
        )}
      </div>
    </div>
  );
};

export default Plan21;
