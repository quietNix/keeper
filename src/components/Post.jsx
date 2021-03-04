import React from "react";

function Post (props){
return(
    <h1>{props.match.params.id}</h1>
);
}

export default Post;