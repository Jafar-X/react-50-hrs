import React, { useEffect, useState } from 'react';

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      //console.log('Raw: response', response);

      const data = await response.json();
      //console.log('JSON:', data);

      if (data && data.length) setPosts(data);
    }
    getData();
  }, []);
  return (
    <div>
      <ul>
        {posts.slice(0, 1).map((post) => (
          //console.log('post:', post);

          <section key={post.id}>
            <li>
              <h3>Title: {post.title}</h3>
              <p>Body: {post.body}</p>
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
