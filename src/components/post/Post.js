import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/comment.service";



export default function Post({post}) {
    let [comments, setComments] = useState([]);
    // console.log(post);
    useEffect(() => {
        getCommentsOfPost(post.id).then(({data}) => setComments([...data]));
    }, [post.id])
    return (
        <div>
            <li><b>{post.body}</b></li>
            <Comments comments={comments}/>
        </div>
    );
}