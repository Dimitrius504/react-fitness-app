import Header from "./views/shared/Header";
import Home from "./views/Home";
import Workouts from "./views/Workouts";
import Goals from "./views/Goals";
import Settings from "./views/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
    

    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
