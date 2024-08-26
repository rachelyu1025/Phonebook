import './App.css';
import CreateBox from './components/CreateBox';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className='px-8 py-6 space-y-2 sm:px-24 md:px-36 md:py-12 md:space-y-3 lg:px-52 xl:px-80'>
      <h1 className='font-bold text-2xl'>Phone Book</h1>

      <CreateBox />
      <SearchBox />
      <List />
    </div>
  );
}

export default App;
