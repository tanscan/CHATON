import { Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Homepage from "./Webpage/Homepage";
import Chatpage from "./Webpage/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;