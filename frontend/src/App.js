import logo from './logo.svg';
import './App.css';
import BookGrid from './components/BookGrid';
import SideBar from './components/SideBar';
import Reader from './components/Reader';

function App() {
  return (
    <div className="App">
      <aside>
        <SideBar />
      </aside>
      <main>
        <BookGrid />
      </main>
    </div>
  );
}

export default App;
