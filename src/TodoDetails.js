import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => {
        setTodo(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!todo) return <p>Todo not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/todo">← Back to Todos</Link>
      <h2>Todo: {todo.title}</h2>
      <p>Status: {todo.completed ? 'Completed ✅' : 'Pending ❌'}</p>
    </div>
  );
}

export default TodoDetails;
