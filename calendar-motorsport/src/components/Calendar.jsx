import { events } from "../data.js";

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
  const lignes = [];
  for (let i = 0; i < calendrier.length; i += 7) {
    lignes.push(calendrier.slice(i, i + 7));
  }

  return (
    <>
      <div>Composant Calendar</div>
      <table className="w-full border-collapse h-[80vh] table-fixed">
        <thead>
          <tr className="h-15">
            {JOURS.map((jour) => (
              <th
                key={jour}
                className="text-center p-2 font-bold bg-gray-200 text-lg"
              >
                {jour}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, i) => (
            <tr key={i}>
              {ligne.map((jour, j) => {
                const evenementDuJour = events.filter((event) =>
                  event.sessions.some(
                    (session) => new Date(session.date).getDate() == jour,
                  ),
                );
                return (
                  <td className="align-top p-2 border border-gray-200" key={j}>
                    {jour}{" "}
                    {evenementDuJour.map((evt) => {
                      const sessionDuJour = evt.sessions.filter(
                        (session) => new Date(session.date).getDate() == jour,
                      );
                      return (
                        <div key={evt.id}>
                          {evt.nom}
                          {sessionDuJour.map((session) => (
                            <div key={session.type}>
                              {" "}
                              {session.type} {session.heure}{" "}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Calendar;
