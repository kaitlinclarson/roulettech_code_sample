import './SideBar.css';
import fetchBooks from '../FetchBooks';
import { useEffect } from 'react';
import backendURL from '../../global';

function SideBar(props) {
    let { loginModalOpen, setLoginModalOpen, displayName, setDisplayName, setBookList, setFavoritesList } = props;

    function onLogInClick() {
        if (displayName.length === 0) {
            setLoginModalOpen(!loginModalOpen);
        } else {
            handleLogout();
        }
    }

    function handleLogout() {
        let URL = backendURL + 'auth/logout';
        let body = '';
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("auth"),
            },
            body: body
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
            })
            .then(() => {
                setDisplayName('');
                localStorage.removeItem("auth");
                localStorage.removeItem("username");
                fetchBooks(setBookList);
                setFavoritesList([]);
            })
            .catch((error) => {
                setDisplayName('');
                localStorage.removeItem("auth");
                localStorage.removeItem("username");
                console.log(error);
            });
    }

    return (
        <div className="sidebar">
            <header>
                <h1>E-Books</h1>
                {displayName ? <h3>Logged in as: {displayName}</h3> : ''}
            </header>
            <ul>
                <li><a onClick={() => fetchBooks(setBookList)}><span className="icon home-icon" /><span>All Books</span></a></li>
                {/* <li><a><span className="icon favorite-icon" /><span>Favorites</span></a></li> */}
                {/* <li><a><span className="icon book-icon" /><span>Currently Reading</span></a></li> */}
                <li>
                    <a onClick={onLogInClick}>
                        {displayName.length > 0 ?
                            <>
                                <span className="icon logout-icon" />
                                <span>Log Out</span>
                            </>
                            :
                            <>
                                <span className="icon login-icon" />
                                <span>Log In</span>
                            </>
                        }
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
