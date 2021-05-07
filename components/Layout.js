import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
// import VideoPlayer from 'react-video-js-player'

const Layout = ({ children }) => {
  return (
    <div>
      {/* <VideoPlayer src='https://youtu.be/LWJfxDkPB7E' width='100%' height='100%' autoplay /> */}
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
