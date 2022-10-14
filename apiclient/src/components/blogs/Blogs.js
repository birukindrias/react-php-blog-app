import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Blogs() {
    let user = useSelector(state => state.user_slice.user)
    console.log(user.user[0].id);
    let body = React.useRef();
    let [posts, setPosts] = useState([{}]); useEffect(() => {
        fetch('http://localhost:8080/api/v1/posts').then(res => res.json()).then(res => {
            console.log(res)
            setPosts(res.posts)
            console.log(posts);
        })
      
    }, [posts])
    console.log(
        user.user[0].user_id
    );

    return <>
        {posts && posts.map((e) => (
            <div class="card">
                <div className="poster">
                    <img src="img_avatar2.png" alt="Avatar" />
                    <div className="name">
                        {e.firstname}
                    </div>
                </div>
                <div className="txt">
                    {/* <h4><b>Jane Doe</b></h4> */}
                    {/* <p> */}

                    {e.post}
                    {/* </p> */}
                </div>
                {/* <div className="likes">
                    <div className="like" onClick={() => {
                        Likeer(e.id)
                    }}>
                        {e.val == null ? '1' : e.val}

                    </div>
                    <div className="comment">commet</div>
                    <div className="dislike">down</div>
                </div> */}
            </div>

        ))
        }

    </>


}