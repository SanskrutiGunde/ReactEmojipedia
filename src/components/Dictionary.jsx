import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createTerm(emojiItem) {
  console.log(emojiItem);
  return (
    <Term
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      meaning={emojiItem.meaning}
    />
  );
}

function Dictionary() {
  console.log(emojipedia);
  return <dl className="dictionary">{emojipedia.map(createTerm)}</dl>;
}
export default Dictionary;
