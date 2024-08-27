import React from "react";
import ReactDOM from "react-dom";
import Video from "./vid.js";
import ContextTest from "./test";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContextTest />
      <Video videoUrl="rtmp://userId-109-953ba98284-stream-proxy.cloud.red5.net/live/mystream" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
