import React from 'react';

const PostLikes = ({totallikes}) =>{
    return (totallikes.length > 0 ? (
            <div>
              {`${totallikes.length}  likes`}
            </div>
          ) : null)
}
export default PostLikes;