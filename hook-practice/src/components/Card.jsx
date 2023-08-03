import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">header</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li key={props.id} className="list-group-item">
            Id: {props.id}
          </li>
          <li key={props.title} className="list-group-item">
            Title: {props.title}
          </li>
          <li key={props.completed} className="list-group-item">
            Completed: {props.completed}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
