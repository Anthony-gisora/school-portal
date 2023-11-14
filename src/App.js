import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/homeLayout";
import HomeHeader from "./components/HomeHeader";
import Home from "./pages/home"
import Lessons from "./pages/Lessons";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <HomeHeader />
            <Home />
          </HomeLayout>
        } />
        <Route path="/lessons" element={
          <HomeLayout>
            <HomeHeader />
            <Lessons />
          </HomeLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
