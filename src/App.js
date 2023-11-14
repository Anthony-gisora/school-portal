import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeLayout from "./layouts/homeLayout";
import HomeHeader from "./components/HomeHeader";
import Home from "./pages/home"
import Lessons from "./pages/Lessons";
import Cat from "./pages/Cat";
import Exam from "./pages/Exam";
import Result from "./pages/Result";
import Attendance from "./pages/Attendance";
function App() {

  const navigate = useNavigate()

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate}/>
            <Home navigate ={navigate}/>
          </HomeLayout>
        } />
        <Route path="/lessons" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate} />
            <Lessons />
          </HomeLayout>
        } />
        <Route path="/cat" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate} />
            <Cat />
          </HomeLayout>
        } />
        <Route path="/exam" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate} />
            <Exam />
          </HomeLayout>
        } /><Route path="/result" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate} />
            <Result />
          </HomeLayout>
        } /><Route path="/attendance" element={
          <HomeLayout>
            <HomeHeader navigate ={navigate} />
            <Attendance />
          </HomeLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
