import './App.css';
import CreateBox from './components/CreateBox';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className='px-8 py-8'>
      <h1 className='font-bold text-2xl'>Phone Book</h1>

      <CreateBox />
      <SearchBox />
      <List />
    </div>
  );
}

export default App;
