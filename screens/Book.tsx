
import React, { useState } from 'react';
import { BOOK_CONTENT } from '../constants';

const Book: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const chapter = BOOK_CONTENT[currentChapterIndex];

  return (
    <div className={`min-h-full -mx-4 -mt-6 p-6 transition-colors duration-500 ${isNightMode ? 'bg-stone-900 text-stone-300' : 'bg-white text-stone-800'}`}>
      <div className="flex justify-between items-center mb-8 sticky top-0 py-2 z-10 bg-inherit/90 backdrop-blur-sm">
        <button 
          onClick={() => setIsNightMode(!isNightMode)}
          className={`p-2 rounded-full ${isNightMode ? 'bg-stone-800' : 'bg-stone-100'}`}
        >
          {isNightMode ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
          ) : (
            <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          )}
        </button>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Capítulo {chapter.id} de {BOOK_CONTENT.length - 1}</span>
      </div>

      <header className="mb-10">
        <h1 className={`text-4xl serif mb-4 leading-tight ${isNightMode ? 'text-stone-100' : 'text-emerald-950'}`}>
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <p className="text-emerald-600 font-medium uppercase tracking-widest text-xs">
            {chapter.subtitle}
          </p>
        )}
      </header>

      <div className="space-y-6 text-lg leading-relaxed font-light">
        {chapter.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {chapter.tasks && (
        <div className={`mt-12 p-6 rounded-3xl border-2 ${isNightMode ? 'bg-stone-800 border-stone-700' : 'bg-emerald-50 border-emerald-100'}`}>
          <h3 className="serif text-xl mb-4">Reflexão Prática</h3>
          <ul className="space-y-3">
            {chapter.tasks.map((t, i) => (
              <li key={i} className="flex gap-3 items-start italic opacity-80">
                <span className="text-emerald-500 font-bold">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-16 flex justify-between gap-4">
        <button
          disabled={currentChapterIndex === 0}
          onClick={() => {
            setCurrentChapterIndex(v => v - 1);
            window.scrollTo(0, 0);
          }}
          className={`flex-1 py-4 rounded-2xl border transition-all ${isNightMode ? 'border-stone-700 disabled:opacity-30' : 'border-stone-200 disabled:opacity-20'} font-medium`}
        >
          Anterior
        </button>
        <button
          disabled={currentChapterIndex === BOOK_CONTENT.length - 1}
          onClick={() => {
            setCurrentChapterIndex(v => v + 1);
            window.scrollTo(0, 0);
          }}
          className="flex-1 py-4 rounded-2xl bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-all disabled:opacity-30"
        >
          Próximo
        </button>
      </div>
      
      <div className="mt-20 text-center opacity-30 text-xs italic">
        “Este não é um livro para te cobrar. É um espaço para te compreender.”
      </div>
    </div>
  );
};

export default Book;
