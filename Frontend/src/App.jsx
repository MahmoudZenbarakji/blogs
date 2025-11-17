import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Register from "./components/register";
import Home from "./components/home";
import Nav from "./components/nav";
import Profile from "./components/profile";
function App() {
  return (
        
    <Routes>

      
      <Route path="/" element={<Navigate to="/register" />} />

      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
    
  );
}

export default App;
