import React from "react";
import SplitText from "./splitText";

import "./_layout.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1 class="move-in">
          <SplitText
            copy="Splitting text with react"
            role="heading"
          />
        </h1>
      </div>
    );
  }
}
