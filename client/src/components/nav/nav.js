import "./nav.css";
import homeIcon from "../../icon/house-solid.svg";
import assignmentIcon from "../../icon/book-open-solid.svg";
const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h2>No Name</h2>
            </div>
            <div className="navbar-item">
                <div className="main">
                    <img src={homeIcon} alt="home icon" />
                    <a href="/">Main Page</a>
                </div>
                <div className="assignment">
                    <img src={assignmentIcon} alt="assignment icon" />
                    <a href="/assignments">Assignment</a>
                </div>
                
            </div>
        </div>
    );
}

export default Nav;