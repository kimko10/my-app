import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "A",
        comment: "안녕하세요, A입니다."
    },
    {
        name: "B",
        comment: "Hellow, I'm B"
    }

]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=> {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;