import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CommentDetails() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(res => res.json())
      .then(data => {
        setComment(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!comment) return <p>Comment not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/comment">← Back to Comments</Link>
      <h2>{comment.name}</h2>
      <p><strong>Email:</strong> {comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentDetails;
