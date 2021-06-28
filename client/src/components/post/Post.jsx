import "./Post.css"

export default function Post() {
    return (
        <div className = "post">
            <img className = "postImg" src = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500" alt = ""></img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span><hr/>
                <span className="postDate">1 hour ago </span>
            </div>
            <p className = "postDesc" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sunt odit consectetur! Obcaecati nostrum repellendus ipsam rem, vero quae illum hic, consectetur pariatur aut ratione autem labore ex odit cupiditate.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sunt odit consectetur! Obcaecati nostrum repellendus ipsam rem, vero quae illum hic, consectetur pariatur aut ratione autem labore ex odit cupiditate.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sunt odit consectetur! Obcaecati nostrum repellendus ipsam rem, vero quae illum hic, consectetur pariatur aut ratione autem labore ex odit cupiditate.
            </p>
        </div>
    )
}
