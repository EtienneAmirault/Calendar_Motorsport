import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500">
        Calendrier Motorsport 2026
      </h1>
      <div className="h-screen flex flex-col">
        <Calendar />
      </div>
    </>
  );
}
export default App;
