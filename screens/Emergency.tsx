
import React, { useState, useEffect, useRef } from 'react';

interface EmergencyProps {
  onComplete?: () => void;
  onFinish?: () => void;
}

const Emergency: React.FC<EmergencyProps> = ({ onComplete, onFinish }) => {
  const [step, setStep] = useState(0); // 0: Start, 1: Stop, 2: Breathe, 3: Name, 4: Wait, 5: Choose
  const [timer, setTimer] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'in' | 'hold' | 'out'>('in');
  const [breathTimer, setBreathTimer] = useState(4);
  
  // Use a ref to ensure onComplete is only fired once per timer cycle
  const hasFiredCompletion = useRef(false);

  useEffect(() => {
    let interval: any;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (isTimerRunning && timer === 0) {
      setIsTimerRunning(false);
      setStep(5);
      if (!hasFiredCompletion.current) {
        hasFiredCompletion.current = true;
        onComplete?.();
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer, onComplete]);

  // Breathing logic
  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setBreathTimer(t => {
          if (t <= 1) {
            if (breathPhase === 'in') { setBreathPhase('hold'); return 2; }
            if (breathPhase === 'hold') { setBreathPhase('out'); return 6; }
            if (breathPhase === 'out') { setBreathPhase('in'); return 4; }
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, breathPhase]);

  const startRescue = () => {
    hasFiredCompletion.current = false;
    setStep(1);
    setTimer(90);
    setIsTimerRunning(true);
  };

  const stepsContent = [
    {
      title: "Resgate Imediato",
      desc: "Você não está com fome física. Você está sentindo algo. Vamos atravessar isso juntas.",
      btn: "Iniciar 90 Segundos",
      action: startRescue
    },
    {
      title: "1. Pare agora",
      desc: "Tire as mãos de onde estão. Feche os olhos se puder. Interrompa o movimento automático.",
      btn: "Parei. Próximo passo",
      action: () => setStep(2)
    },
    {
      title: "2. Respire (4-2-6)",
      desc: "Inspirar: 4s | Segurar: 2s | Exalar: 6s",
      btn: "Estou respirando melhor",
      action: () => setStep(3)
    },
    {
      title: "3. Dê um nome",
      desc: "O que você está sentindo agora? É tédio? Solidão? Estresse? Cansaço? Raiva?",
      btn: "Identifiquei o sentimento",
      action: () => setStep(4)
    },
    {
      title: "4. Espere o tempo",
      desc: "A química da compulsão leva 90 segundos para ser reabsorvida pelo corpo. Aguarde.",
      btn: "Aguardando...",
      action: null
    },
    {
      title: "5. Escolha Consciente",
      desc: "O impulso passou. Você ainda quer comer? Se sim, coma sem pressa e sem culpa. Se não, beba água e faça algo relaxante.",
      btn: "Finalizar Resgate",
      action: () => {
        if (onFinish) {
          onFinish();
        } else {
          setStep(0);
          setTimer(90);
        }
      }
    }
  ];

  const current = stepsContent[step];

  return (
    <div className="min-h-full flex flex-col justify-center space-y-12 pb-12 py-10 animate-fadeIn">
      {/* Visual Timer Indicator */}
      {step > 0 && (
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-stone-200" />
              <circle 
                cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" 
                strokeDasharray={552} 
                strokeDashoffset={552 - (552 * timer) / 90} 
                className="text-rose-500 transition-all duration-1000 ease-linear"
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <span className="text-5xl font-bold text-rose-600 font-mono">{timer}s</span>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">Tempo Restante</p>
            </div>
          </div>
        </div>
      )}

      {/* Breathing Bubble */}
      {step === 2 && (
        <div className="flex justify-center">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-1000 shadow-xl border-4 border-emerald-100
            ${breathPhase === 'in' ? 'scale-125 bg-emerald-100' : breathPhase === 'hold' ? 'scale-110 bg-emerald-50' : 'scale-90 bg-emerald-200'}
          `}>
            <span className="font-bold text-emerald-800 uppercase text-xs tracking-tighter text-center px-2">
              {breathPhase === 'in' ? 'Inspire' : breathPhase === 'hold' ? 'Segure' : 'Solte'}
            </span>
          </div>
        </div>
      )}

      <div className="text-center space-y-6">
        <h2 className="text-3xl serif text-emerald-950 px-4">{current.title}</h2>
        <p className="text-stone-500 text-lg leading-relaxed max-w-xs mx-auto px-4">
          {current.desc}
        </p>

        {current.action && (
          <button
            onClick={current.action}
            className="w-full py-5 rounded-3xl bg-emerald-900 text-white font-bold text-lg shadow-xl shadow-emerald-100 active:scale-95 transition-all"
          >
            {current.btn}
          </button>
        )}
      </div>

      {step === 0 && (
        <div className="bg-stone-100 rounded-3xl p-6 text-center italic text-stone-500 text-sm mx-4">
          “Você não come para engordar. Você come para sobreviver emocionalmente. Vamos mudar isso, uma respiração por vez.”
        </div>
      )}
    </div>
  );
};

export default Emergency;
