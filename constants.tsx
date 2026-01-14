
import React from 'react';
import { Chapter, DayTask } from './types';

export const BOOK_CONTENT: Chapter[] = [
  {
    id: 0,
    title: "A Guerra Invisível que Começa na Sua Mente",
    subtitle: "Introdução",
    content: [
      "Você já percebeu como é fácil começar uma dieta, mas quase impossível permanecer nela quando a vida fica pesada?",
      "Você sabe exatamente o que deveria comer. Sabe que deveria se exercitar. Sabe que deveria dormir mais.",
      "Mas quando a ansiedade bate... quando o dia é estressante... quando as emoções transbordam... parece que tudo desmorona.",
      "E aquele velho ciclo começa: comer sem fome, comer rápido, esconder o que comeu, prometer que 'segunda-feira tudo muda', sentir culpa, tentar recomeçar, falhar de novo.",
      "A verdade é simples: Você não é fraca. Você está sobrecarregada.",
      "A ansiedade não é 'coisa da sua cabeça'. Ela é uma reação do corpo — e ela interfere diretamente no peso.",
      "Este livro foi criado para mulheres que trabalham muito, têm rotina corrida, se sentem cansadas emocionalmente e descontam a ansiedade na comida.",
      "Não existe emagrecimento duradouro sem equilíbrio emocional. E não existe equilíbrio emocional sem aprender a conversar com a própria mente.",
      "Vamos começar sua libertação."
    ]
  },
  {
    id: 1,
    title: "A Ansiedade por Dentro",
    subtitle: "O que Ela Faz no Corpo que Engorda Você",
    content: [
      "A ansiedade não é apenas uma sensação. Ela é um conjunto de reações bioquímicas que afetam metabolismo, apetite, sono, energia, emoções e tomada de decisão.",
      "1.1 — O Cortisol: o hormônio que trava seu emagrecimento. Quando você está ansiosa, o corpo libera cortisol. Níveis altos fazem o corpo armazenar gordura (principalmente abdominal), aumentar o apetite e diminuir a saciedade.",
      "É como se o corpo dissesse: 'Algo está errado. Precisamos de energia extra. Guarde tudo que comer.'",
      "1.2 — Como a ansiedade imita fome: Ela ativa sensações como aperto no estômago, vazio, inquietação e desejo súbito por doces. Nada disso é fome real.",
      "1.3 — Fome Física x Fome Emocional: A física aparece devagar. A emocional surge de repente, exige comida específica e não tem saciedade real.",
      "1.4 — Não é falta de disciplina. É neuroquímica. Seu cérebro estressado pede comida por alívio, não por fome."
    ]
  },
  {
    id: 2,
    title: "O Ciclo da Compulsão Alimentar",
    content: [
      "A compulsão não começa no corpo. Começa na mente.",
      "2.1 — Como o cérebro cria o vício da comida: Comidas ricas em açúcar, gordura e sal ativam o circuito da dopamina, gerando prazer imediato e alívio rápido. O cérebro aprende: 'Comi → melhorei'.",
      "2.2 — O ciclo completo: Tensão emocional → Impulso → Ação automática → Alívio momentâneo → Culpa → Promessa de mudança → Nova tensão.",
      "2.3 — Por que as mulheres são mais vulneráveis? Flutuação hormonal, dupla jornada, sobrecarga mental e maior exigência estética.",
      "2.4 — A verdade libertadora: Você não come para engordar. Você come para sobreviver emocionalmente."
    ]
  },
  {
    id: 3,
    title: "A Mente que Engorda",
    subtitle: "Padrões, Narrativas e Sabotadores",
    content: [
      "Cada pessoa ansiosa tem um 'padrão emocional' que dispara a compulsão.",
      "3.1 — O sabotador da comparação: 'Fulana consegue, eu não.'",
      "3.2 — O sabotador da culpa: 'Já estraguei tudo. Agora vou comer mesmo.'",
      "3.3 — O sabotador da exaustão: 'Estou tão cansada que mereço comer isso.'",
      "3.4 — O sabotador do perfeccionismo: 'Se não for perfeito, nem começo.'",
      "Esse exercício sozinho já reduz a compulsão."
    ],
    tasks: [
      "Quando você come sem fome?",
      "Quais emoções antecedem a comida?",
      "O que você busca: alívio, prazer, anestesia ou fuga?",
      "Depois de comer, o que você sente?"
    ]
  },
  {
    id: 4,
    title: "Quebrando a Fome Emocional em 90 Segundos",
    content: [
      "A fome emocional atinge o ápice por 90 segundos. Se dominar esse tempo, domina a compulsão.",
      "TÉCNICA 1: Parar. Coloque a mão no peito e diga: 'Eu estou segura.'",
      "TÉCNICA 2: Respirar. Inspire 4s, Segure 2s, Expire 6s. Isso desliga o alerta.",
      "TÉCNICA 3: Nomear. Diga: 'Isso é ansiedade, não fome.' Nomear desarma o impulso.",
      "TÉCNICA 4: Esperar 90 segundos. O pico da emoção cai automaticamente.",
      "TÉCNICA 5: Escolher conscientemente. Agora você decide — não a compulsão."
    ]
  },
  {
    id: 5,
    title: "Os 7 Tipos de Ansiedade que Impedem o Emagrecimento",
    content: [
      "1. Ansiedade de sobrecarga: Come para ter energia.",
      "2. Ansiedade antecipatória: Come antes de eventos por medo do futuro.",
      "3. Ansiedade da comparação: Sempre se sente abaixo das outras.",
      "4. Ansiedade da produtividade: Come porque nunca tem tempo.",
      "5. Ansiedade da culpa: Se pune com comida.",
      "6. Ansiedade da aparência: Quanto mais olha o espelho, mais come.",
      "7. Ansiedade do perfeccionismo: Abandona se não for perfeito.",
      "Identificar seu tipo é o primeiro passo para quebrar o padrão."
    ]
  },
  {
    id: 6,
    title: "Nutrição Inteligente para Quem Tem Ansiedade",
    content: [
      "Não existe emagrecimento para ansiosas sem: saciedade, regularidade e equilíbrio.",
      "6.1 — 12 alimentos que ajudam: Ovos, abacate, iogurte grego, banana, frango, peixe, batata-doce, chia, aveia, amêndoas, chá de camomila e cacau 70%.",
      "6.2 — Combinações práticas: Café da manhã (Iogurte + banana + chia), Almoço (Arroz, feijão, salada + proteína), Jantar (Sopa + frango desfiado), Lanche (Ovo, nuts, queijo branco)."
    ]
  },
  {
    id: 7,
    title: "Rotina Antiansiedade",
    subtitle: "A Estrutura que Emagrece",
    content: [
      "7.1 — O ambiente vence a força de vontade: Deixe comida gatilho fora de vista, mantenha a geladeira organizada e planeje as refeições.",
      "7.2 — Os 3 pilares da rotina leve: Previsibilidade, simplicidade e descanso.",
      "7.3 — Micro-hábitos: Beber água antes das refeições, fazer 5 min de alongamento e colocar alarmes de respiração."
    ]
  },
  {
    id: 8,
    title: "Exercícios que Regulam Mente e Corpo",
    content: [
      "8.1 — Por que funcionam? Eles regulam serotonina, dopamina e cortisol.",
      "8.2 — Treinos práticos:",
      "1. Caminhada consciente (10 min): Foco total na respiração.",
      "2. HIIT de 8 minutos: Simples e eficiente.",
      "3. Treino de força (12 min): Foca em glúteos e braços.",
      "4. Alongamento relaxante: Ideal para noites ansiosas."
    ]
  },
  {
    id: 9,
    title: "Plano de 21 Dias Magra da Mente",
    content: [
      "SEMANA 1 — Controle emocional: Foco em respiração, pausas e identificar emoções.",
      "SEMANA 2 — Organização alimentar: Foco em planejamento, refeições simples e ambiente favorável.",
      "SEMANA 3 — Movimento e autocuidado: Foco em treinos curtos, rituais de sono e hidratação.",
      "Cada dia tem uma tarefa prática, um exercício mental e uma reflexão específica."
    ]
  },
  {
    id: 10,
    title: "A Nova Identidade",
    subtitle: "A Mulher que Não Come por Ansiedade",
    content: [
      "Você está se tornando: mais consciente, mais leve, mais forte emocionalmente, mais conectada consigo e mais dona de si.",
      "A nova versão de você não come para fugir, não come por automático, não come para anestesiar e não come por desespero.",
      "Ela come para viver. E vive para ser leve."
    ]
  }
];

export const PLAN_DAYS: DayTask[] = Array.from({ length: 21 }, (_, i) => ({
  day: i + 1,
  title: i < 7 ? "Controle Emocional" : i < 14 ? "Organização Alimentar" : "Movimento e Autocuidado",
  reflection: `Reflexão do dia ${i + 1}: Foque hoje em observar seus gatilhos sem julgamento.`,
  completed: false
}));

export const COLORS = {
  primary: '#8BA194', // Sage green
  secondary: '#E5D3C3', // Sand/Beige
  accent: '#D4A373', // Earthy gold
  text: '#2D312E',
  bg: '#FAF9F6',
  therapeutic: '#E8F3F1'
};
