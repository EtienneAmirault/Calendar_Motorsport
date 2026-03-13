export const events = [
  {
    id: 1,
    nom: "Grand Prix de Bahrein",
    categorie: "F1", // "F1" | "MotoGP" | "WEC"
    sessions: [
      { type: "EL1", date: "2026-04-10", heure: "13:30" },
      { type: "EL2", date: "2026-04-10", heure: "17:00" },
      { type: "EL3", date: "2026-04-11", heure: "14:30" },
      { type: "Qualifications", date: "2026-04-11", heure: "18:00" },
      { type: "Course", date: "2026-04-12", heure: "17:00" },
    ],
  },
  {
    id: 2,
    nom: "Grand Prix du Qatar",
    categorie: "MotoGP", // "F1" | "MotoGP" | "WEC"
    sessions: [
      { type: "EL1", date: "2026-04-10", heure: "14:45" },
      { type: "Essais", date: "2026-04-10", heure: "19:00" },
      { type: "EL2", date: "2026-04-11", heure: "14:00" },
      { type: "Q1", date: "2026-04-11", heure: "14:40" },
      { type: "Q2", date: "2026-04-11", heure: "15:05" },
      { type: "Sprint", date: "2026-04-11", heure: "19:00" },
      { type: "Course", date: "2026-04-12", heure: "19:00" },
    ],
  },
  {
    id: 3,
    nom: "6 heures d'Imola",
    categorie: "WEC", // "F1" | "MotoGP" | "WEC"
    sessions: [
      { type: "EL1", date: "2026-04-18", heure: "11:15" },
      { type: "EL2", date: "2026-04-18", heure: "16:00" },
      { type: "EL3", date: "2026-04-19", heure: "10:40" },
      { type: "Qualifications - LMGT3", date: "2026-04-19", heure: "14:30" },
      { type: "Hyperpole - LMGT3", date: "2026-04-19", heure: "14:50" },
      { type: "Qualifications - LMH", date: "2026-04-19", heure: "15:10" },
      { type: "Hyperpole - LMH", date: "2026-04-19", heure: "15:30" },
      { type: "Course", date: "2026-04-20", heure: "13:00" },
    ],
  },
];
