function Evenement({ evt, sessionDuJour }) {
  return (
    <div>
      {evt.nom}
      {sessionDuJour.map((session) => (
        <div key={session.type}>
          {" "}
          {session.type} {session.heure}{" "}
        </div>
      ))}
    </div>
  );
}
export default Evenement;
