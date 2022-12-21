import React from "react";
import { Comment } from "../Message/Components/Comment";

export const CommentsContainer = () => {
  const arrayComments = [
    {
      name: "Samuel Suarez",
      comment: "Les deseo lo mejor a ustedes dos",
      id: "1",
    },
    {
      name: "Daniel Suarez",
      comment: "Les deseo lo mejor a ustedes dos",
      id: "2",
    },
  ];
  return (
    <div className="comments-container">
      <div className="comments-content">
        {arrayComments.map(({ name, comment, id }) => (
          <div className="comments">
            <Comment key={id} name={name} comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};
