import { useEffect, useState } from 'react';
import test from '../posts/test.md'; // Adjust the path to match your setup

function Articles() {
  const [content, setContent] = useState(test); // Initially set to the imported markdown content

  useEffect(() => {
    // Listen for markdown hot updates
    if (import.meta.hot) {
      import.meta.hot.on("markdown-update", (data) => {
        setContent(data); // Update the content state when hot module update is triggered
      });
    }
  }, []);

  return (
    <div>
      <h1>Blog Post</h1>
      {/* Render the content as HTML */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Articles;
