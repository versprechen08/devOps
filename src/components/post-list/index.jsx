import { useState } from "react";
import postListData from "../../mock-data/post-list-mock.json"
import "./index.scss";

export default props => {
    const [postList, setPostList] = useState(postListData);
    // 从server端读取postList
    return (
        <div className="post-list-container " >
            {postList.map(post => (
                <div key={post.id} className="card post-item">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    )
}