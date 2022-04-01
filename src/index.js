import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import Home from "./Home";
import store from './store';

// import "antd/dist/antd.css";
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><Home/></Provider>);