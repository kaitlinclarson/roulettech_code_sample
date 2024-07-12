import './App.css';
import { useState, useEffect } from 'react';
import BookGrid from './components/bookgrid/BookGrid';
import SideBar from './components/sidebar/SideBar';
import Reader from './components/Reader';
import LogIn from './components/LogIn';
import { fetchFavorites } from './components/FavoritesOperations';
import fetchBooks from './components/FetchBooks';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [bookList, setBookList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setDisplayName(localStorage.getItem('username'));
    }
    fetchBooks(setBookList);
    fetchFavorites(setFavoritesList);
  }, []);

  return (
    <div className="App">
      <aside>
        <SideBar
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          displayName={displayName}
          setDisplayName={setDisplayName}
          setBookList={setBookList}
          setFavoritesList={setFavoritesList}
        />
      </aside>
      <main>
        <BookGrid
          bookList={bookList}
          setBookList={setBookList}
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
        />
      </main>
      {loginModalOpen ?
        <LogIn
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          setDisplayName={setDisplayName}
          setBookList={setBookList}
          setFavoritesList={setFavoritesList}
        /> : ''}
    </div>
  );
}

export default App;
