import './App.css';
import { useState } from 'react';
import BookGrid from './components/bookgrid/BookGrid';
import SideBar from './components/sidebar/SideBar';
import Reader from './components/Reader';
import LogIn from './components/LogIn';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');

  return (
    <div className="App">
      <aside>
        <SideBar
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          displayName={displayName}
          setDisplayName={setDisplayName}
        />
      </aside>
      <main>
        <BookGrid />
      </main>
      {loginModalOpen ?
        <LogIn
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          setDisplayName={setDisplayName}
        /> : ''}
    </div>
  );
}

export default App;
