import Header from './component/Header';
import TinderCard from './component/TinderCards';
import './App.css';
import SwipeButton from './component/SwipeButton';


function App() {
  return (
    <div className="App">
       <Header />
       <TinderCard />
       <SwipeButton />
    </div>
  );
}

export default App;
