import React from "react";

export default class SplitText extends React.Component {
    render() {
      const copyArray = this.props.copy.split("");
      return (
        <span aria-label={this.props.copy} role={this.props.role}>
          {copyArray.map(function(letter, index){
            const style = {"--index": index+"s"};
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {letter}
            </span>;
          })}
        </span>
      );
    }
  }
  