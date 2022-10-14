import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Blognew() {
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
    const post = async () => {
        await fetch('http://localhost:8080/api/v1/createpost', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.user[0].user_id,
                post: body.current.value
            })
            , headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then(res => res.json()).then(res => console.log(res))

    }
    // let id = userdata.user[0].id;
    let id = 99;
    const Likeer = (post_id,val) => {
        fetch('http://localhost:8080/api/v1/user?id=' + id + 'post_id=' + post_id + 'val='+val).then(res => res.json()).then(res => {
            // res.data
            let val = res.data;
            // // console.log('userPro');
            // // console.log(val);
            // console.log(val);
            // setuserPro(val);

            // // console.log(setuserPro(res.data));
            // console.log(userPro);

            // console.log('userPro');
            
            // posts followers 
            // console.log(res.data);\
            // console.log('liked');
        }
        )

    }
    return <>
        <input ref={body} type="text" name="body" id="" /><button onClick={post}>post</button>

        {posts && posts.map((e) => (
            <div class="card">
                <div className="poster">
                    <img src="img_avatar2.png" alt="Avatar" />
                    <div className="name">
                        {e.firstname}
                    </div>
                </div>
                <div class="txt">
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