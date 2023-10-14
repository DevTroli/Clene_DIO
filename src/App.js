import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SingUp } from './pages/singUp'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/Singup" element={<SingUp />} />
      </Routes >
    </Router>
  );
}

export default App;
