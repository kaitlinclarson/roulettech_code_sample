import './SideBar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <header><h1>E-Reader</h1></header>
            <ul>
                <li><a href=""><span className="icon home-icon" /><span>All Books</span></a></li>
                <li><a href=""><span className="icon favorite-icon" /><span>Favorites</span></a></li>
                <li><a href=""><span className="icon book-icon" /><span>Currently Reading</span></a></li>
                <li><a href=""><span className="icon login-icon" /><span>Log In</span></a></li>
            </ul>
        </div>
    );
}

export default SideBar;
