import { gameList } from "./dataGames";
import GameCard from "./components/GameCard";
function App() {
  return (
    <div className="p-8 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">
        Game Collections
      </h1>
      <div className="grid gap-4">
        {gameList.map((gameItem) => (
          <GameCard key={gameItem.id} game={gameItem} />
        ))}
      </div>
    </div>
  );
}
export default App;