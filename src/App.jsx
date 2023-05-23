import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="overflow-hidden w-full h-full relative flex z-0">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
