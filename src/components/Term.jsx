import React from "react";
import Emoji from "./Emoji";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emojiIcon={props.emoji} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
export default Term;
