import React, { useState } from "react";
import serializeForm from "form-serialize";
import VideoContainer from "./VideoContainer";
import FormControl from "./FormControl";
import YouTubeLikes from "./YouTubeLikes";

// Render function for Prismic headless CMS pages
function AppComponent() {
  const [videoUrl, setVideoUrl] = useState("");
  const [reset, setReset] = useState(false);
  function handleChange(e) {
    e.preventDefault();
    let values = serializeForm(e.target, { hash: true });

    setVideoUrl(values.url);
    setReset(!reset);
  }
  return (
    <div className=" component-container">
      <div className="row">
        <div className="col-9 video-container">
          <VideoContainer videoUrl={videoUrl} />
        </div>

        <div className="col-3 rghit-side">
          <YouTubeLikes reset={reset} />
          <FormControl handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default AppComponent;
