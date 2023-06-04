import './App.css';
import './index.css';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import SelectGender from './Pages/SelectGender';
import ReactDOM from "react-dom/client";
import Index from './Pages/Index';
import IndexDashboard from './Pages/Dashboard/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Pages/Dashboard/Profile';
import Favourite from './Pages/Dashboard/Favourite';
import FindPeople from './Pages/Dashboard/FindPeople';
import Chat from './Pages/Dashboard/Chat';
import ChatList from './Pages/Dashboard/ChatList';

import Contact from './Pages/Contact';
import About from './Pages/About';
import { Provider } from 'react-redux'



export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="select-gender" element={<SelectGender />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />    
        <Route path="dashboard/" element={<IndexDashboard />} />
        <Route path="dashboard/profile" element={<Profile />} />
        <Route path="dashboard/favourite" element={<Favourite />} />
        <Route path="dashboard/find-people" element={<FindPeople />} />
        <Route path="dashboard/chat" element={<Chat />} />
        <Route path="dashboard/chat-list" element={<ChatList />} />

       
        </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);