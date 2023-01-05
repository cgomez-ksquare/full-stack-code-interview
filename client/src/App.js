import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <h3>Full Stack Code Interview</h3>
      <StarRating number={5}/>
    </div>
  );
}

export default App;
