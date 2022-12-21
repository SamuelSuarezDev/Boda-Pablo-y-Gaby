import React from "react";
import "./styled.css";
export const Comment = ({ src, name, comment }: any) => {
  return (
    <div className="comment-container">
      <p className="subtitle">{name}</p>
      <p className="subtitle comment">{comment}</p>
    </div>
  );
};
