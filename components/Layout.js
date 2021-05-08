import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import ReactAudioPlayer from 'react-audio-player'

const Layout = ({ children }) => {
  return (
    <div>
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
          zIndex: "-1",
        }}
      />
      <ReactAudioPlayer src="audio/matrix.mp3" controls autoPlay />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
