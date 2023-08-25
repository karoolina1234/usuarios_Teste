import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddItem from "./pages/Add";



function App() {
  return (
    <> 
    <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />

        </Routes>
      
    </>
  );
}

export default App;
