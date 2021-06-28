import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className = "sidebar" >
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src = "https://images.pexels.com/photos/6062149/pexels-photo-6062149.jpeg?auto=compress&cs=tinysrgb&h=320" alt = ""></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde fugiat nostrum pariatur cupiditate maiores aliquam hic earum adipisci assumenda consequuntur minus.</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                <i className="sideBarIcon fab fa-facebook-square"></i>
                <i className="sideBarIcon fab fa-twitter-square"></i>
                <i className="sideBarIcon fab fa-pinterest-square"></i>
                <i className="sideBarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
