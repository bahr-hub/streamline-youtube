import React, { useEffect, useState } from "react";

const YouTubeLikes = ({ reset }) => {
  const [likeCount, setLikeCount] = useState(1);
  const [dislikeCount, setDislikeCount] = useState(1);
  const likes = 1;
  const dislikes = 1;

  useEffect(() => {
    setDislikeCount(1);
    setLikeCount(1);
  }, [reset]);

  const likeHandler = () => {
    if (likeCount === likes) {
      setDislikeCount(dislikes);
      setLikeCount(likeCount + 1);
    }
  };
  const dislikeHandler = () => {
    if (dislikeCount === dislikes) {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likes);
    }
  };

  return (
    <div className="like-actions">
      <div className="like-dislike">
        <div className="likdv ">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className={likeCount !== likes ? "btnLikedStyle" : "btnDefault"}>
            <i className="fa fa-thumbs-up " onClick={likeHandler}></i>
          </div>
          <div className={likeCount !== likes ? "liked" : "btnhidden"}>
            <i className="fa fa-thumbs-up "></i>
          </div>
        </div>
        <div className="likdv ">
          <div
            className={
              dislikeCount !== dislikes ? "btnLikedStyle" : "btnDefault"
            }
          >
            <i className="fa fa-thumbs-down " onClick={dislikeHandler}></i>
          </div>
          <div className={dislikeCount !== dislikes ? "disliked" : "btnhidden"}>
            <i className="fa fa-thumbs-down "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeLikes;
