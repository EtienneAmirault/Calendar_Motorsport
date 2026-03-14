import { events } from "../data.js";
import Evenement from "./Evenement.jsx";
function Calendar() {
  const MOIS = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const JOURS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  let premjour = new Date(2026, 3, 1).getDay();
  let nbjour = new Date(2026, 4, 0).getDate();
  let moisActuel = new Date(2026, 3, 1).getMonth();
  const casesVides = premjour === 0 ? 6 : premjour - 1;

  const jours = [];
  for (let i = 1; i <= nbjour; i++) {
    jours.push(i);
  }
  const vides = [];
  for (let i = 1; i <= casesVides; i++) {
    vides.push("");
  }
  const calendrier = vides.concat(jours);

  return (
    <>
      <div className="grid grid-cols-7 ">
        {JOURS.map((jour) => (
          <div
            key={jour}
            className="text-center border border-gray-400 font-bold bg-gray-200 text-lg"
          >
            {jour}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 flex-1 grid-rows-6">
        {calendrier.map((jour) => {
          const evenementDuJour = events.filter((event) =>
            event.sessions.some(
              (session) =>
                new Date(session.date).getDate() == jour &&
                new Date(session.date).getMonth() == moisActuel,
            ),
          );
          return (
            <div className="border border-gray-200 overflow-hidden" key={jour}>
              {jour}{" "}
              {evenementDuJour.map((evt) => {
                const sessionDuJour = evt.sessions.filter(
                  (session) =>
                    new Date(session.date).getDate() == jour &&
                    new Date(session.date).getMonth() == moisActuel,
                );
                return (
                  <Evenement
                    key={evt.id}
                    evt={evt}
                    sessionDuJour={sessionDuJour}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Calendar;
