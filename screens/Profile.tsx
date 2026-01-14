
import React from 'react';

interface ProfileProps {
  activeDays: number;
  emergencyCount: number;
  onReset: () => void;
}

const Profile: React.FC<ProfileProps> = ({ activeDays, emergencyCount, onReset }) => {
  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <header className="text-center space-y-4">
        <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-xl">
          <span className="text-4xl">🧘‍♀️</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-800">Sua Jornada Leve</h1>
          <p className="text-emerald-600 text-sm font-medium italic">“Eu como para viver, não vivo para comer.”</p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-stone-100 text-center space-y-1 shadow-sm">
          <p className="text-2xl font-bold text-emerald-900">{activeDays}</p>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Dias Ativos</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-stone-100 text-center space-y-1 shadow-sm">
          <p className="text-2xl font-bold text-emerald-900">{emergencyCount}</p>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Resgates SOS</p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="serif text-xl px-2">Conquistas Emocionais</h3>
        <div className="space-y-3">
          {[
            { label: "Primeira Pausa de 90s", unlocked: emergencyCount > 0 },
            { label: "Semana 1 Concluída", unlocked: activeDays >= 7 },
            { label: "Consciência dos Gatilhos", unlocked: activeDays >= 3 },
            { label: "Domínio do Cortisol", unlocked: activeDays >= 14 },
            { label: "Nova Identidade Consolidada", unlocked: activeDays >= 21 }
          ].map((badge, i) => (
            <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${badge.unlocked ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-stone-50 border-stone-100 text-stone-300 opacity-60'}`}>
              <span className="font-medium text-sm">{badge.label}</span>
              {badge.unlocked ? (
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              )}
            </div>
          ))}
        </div>
      </section>

      <button 
        onClick={() => {
          if (confirm("Tem certeza que deseja resetar todo o seu progresso?")) {
            onReset();
          }
        }}
        className="w-full py-4 text-rose-500 font-medium text-xs border border-stone-200 rounded-2xl hover:bg-rose-50 transition-all active:scale-95"
      >
        Resetar Progresso (Recomeçar)
      </button>
    </div>
  );
};

export default Profile;
