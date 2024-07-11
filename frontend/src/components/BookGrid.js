import './BookGrid.css';
import logo from '../logo.svg';

var bookName = "Book Name";
var bookList = new Array(10).fill(0);

function Rating() {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="rating-star">
                    <input type="checkbox" value={value} /><span className="empty" />
                </label>
            ))}
        </div>
    );
}

function Favorite() {

}

function Book(key, image, name) {
    return (
        <div className="book item" key={key}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <Rating />
        </div>
    );
}

function BookGrid() {
    return (
        <div className="book-grid">
            <div className="container">
                {
                    bookList.map((value, index) => {
                        return Book(index, logo, bookName + " " + index);
                    })
                }
            </div>
        </div>
    );
}

export default BookGrid;