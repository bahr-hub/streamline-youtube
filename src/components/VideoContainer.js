import React from "react";

const VideoContainer = (props) => {
  const { videoUrl } = props;
  return (
    <div className="iframe-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoUrl}`}
        allow="autoplay; encrypted-media"
        title="video"
        type="text/html"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default VideoContainer;
