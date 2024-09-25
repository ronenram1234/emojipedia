import React from "react";
import emojipedia from "../emojipedia";

function Card(props) {
  console.log(props.name);
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function createCard(element) {
  return (
    <Card
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
        
      </dl>
    </div>
  );
}

export default App;
