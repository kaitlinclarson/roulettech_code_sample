import './BookGrid.css';
import { useEffect, useState } from 'react';
import pg73979 from './thumbnails/pg73979.jpg';
import pg73980 from './thumbnails/pg73980.jpg';
import pg73981 from './thumbnails/pg73981.jpg';
import fetchBooks from '../FetchBooks';
import { fetchFavorites, postFavorite } from '../FavoritesOperations';


function Rating(props) {
    let { value } = props;
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((i) => {
                let starClassName = 'empty';
                if (value > i) starClassName = 'full';
                return (<label key={i} className="rating-star">
                    <input
                        type="checkbox"
                        value={i}
                    />
                    <span className={starClassName} />
                </label>);
            }
            )}
        </div>
    );
}


function Favorite(props) {
    let { title, value = false, setFavoritesList } = props;

    function handleClick() {
        if (localStorage.getItem('auth')) {
            postFavorite(title, !value, setFavoritesList);
        }
    }

    let favClassName = 'empty';
    if (value) favClassName = 'full';

    return (
        <div className="favorite">
            <label>
                <input type="checkbox" onClick={handleClick} /><span className={favClassName} />
            </label>
        </div>
    );
}


function Book(props) {
    let { id, url, title, rating, favorite, setFavoritesList } = props;

    let image = null;
    if (url === "pg73980.jpg") image = pg73980;
    else if (url === "pg73981.jpg") image = pg73981;
    else if (url === "pg73979.jpg") image = pg73979;

    return (
        <div className="book item">
            <Favorite id={id} title={title} value={favorite} setFavoritesList={setFavoritesList} />
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <Rating value={rating} />
        </div>
    );
}


function findFavorite(favoritesList, id) {
    if (Array.isArray(favoritesList)) {
        let favorite = favoritesList.find((e) => { return e.book === id });
        if (favorite === null || favorite === undefined) favorite = false;
        return favorite;
    } else {
        return false;
    }
}


function BookGrid(props) {
    let { bookList, setBookList, favoritesList, setFavoritesList } = props;

    return (
        <div className="book-grid">
            <div className="container">
                {
                    bookList.map((obj) => (
                        <Book
                            key={obj.id}
                            id={obj.id}
                            url={obj.url}
                            title={obj.title}
                            rating={obj.rating}
                            favorite={findFavorite(favoritesList, obj.id)}
                            setFavoritesList={setFavoritesList}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default BookGrid;