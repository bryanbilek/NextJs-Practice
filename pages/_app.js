import Layout from "../components/Layout";
import "../styles/globals.css";
// import ReactPlayer from 'react-player'
import VideoBg from "../public/port-background.mp4";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <ReactPlayer url='https://youtu.be/LWJfxDkPB7E' muted loop playing controls={false} width='100%' height='100%'/> */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
