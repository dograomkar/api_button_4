import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ArticleListPage() {
  const { type } = useParams();  // get :id from route
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Step 1: Define API URLs mapped by ID
  const apiMap = {
    user : 'https://jsonplaceholder.typicode.com/users',
    post : 'https://jsonplaceholder.typicode.com/posts',
    todo : 'https://jsonplaceholder.typicode.com/todos',
    comment : 'https://jsonplaceholder.typicode.com/comments',
  };

  useEffect(() => {
    const url = apiMap[type]; // pick URL based on route param

    if (!url) return;

    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching:', err);
        setLoading(false);
      });
  }, [type]); // Re-run when route id changes

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Back to Home</Link>
      <h2> {type} Data</h2>
  {/*
  slice(0, 5) → only take the first 5 items from the data array
  map() → loop through those 5 items
  add .slice after data that is data.slice(0,5 ).map it will only show 5 data
*/}
{data.map((item, index) => {
  let detailPath = `/${type}/${item.id}`;  // builds path like /post/1, /todo/3, etc.

  return (
    <Link
      key={item.id || index}
      to={detailPath}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>
    </Link>
  );
})}


    </div>
  );
}

export default ArticleListPage;
