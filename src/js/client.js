/*
 * Client.js
 * Add the app to the DOM.
 */

/* Import libraries. */
import React from "react";
import ReactDOM from "react-dom";

/* Import components. */
import Layout from "./components/layout";

/* Assign the app to the DOM. */
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
