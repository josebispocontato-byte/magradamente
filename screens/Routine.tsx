
import React from 'react';

const Routine: React.FC = () => {
  const categories = [
    {
      title: "Nutrição Ansiosa",
      icon: "🥗",
      items: ["Magnésio: sementes e folhas", "Chá de Camomila / Cidreira", "Lanche: Banana com aveia", "Proteína em todas as refeições"]
    },
    {
      title: "Exercícios Reguladores",
      icon: "🧘‍♀️",
      items: ["Caminhada Consciente (15 min)", "Alongamento Matinal", "HIIT Curto (quando agitada)", "Treino de Força (3x semana)"]
    },
    {
      title: "Micro-Hábitos",
      icon: "✨",
      items: ["Copo d'água ao acordar", "90s de pausa pré-refeição", "Ambiente escuro 1h antes de dormir", "Elogiar-se no espelho"]
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h1 className="text-3xl serif text-emerald-950">Corpo & Rotina</h1>
        <p className="text-stone-500 text-sm italic">O ambiente vence a força de vontade. Simplifique.</p>
      </header>

      <div className="space-y-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-xl serif text-stone-800">{cat.title}</h3>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex gap-4">
        <div className="text-2xl">💡</div>
        <p className="text-xs text-amber-900 leading-relaxed font-medium">
          Dica da Dra.: Não tente mudar tudo de uma vez. Escolha UM micro-hábito para esta semana e domine-o.
        </p>
      </div>
    </div>
  );
};

export default Routine;
