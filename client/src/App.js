import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Entrylist from './components/Entrylist';
import Entrydetail from './components/Entrydetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Entrylist />}>Home</Route>
        <Route path="/entry/:id" element={<Entrydetail />}>Entry</Route>
        <Route path="/new">New</Route>
      </Routes>

    </div>
  );
}

export default App;
