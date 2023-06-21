import React, { useEffect, useState } from 'react';

const ReadmeComponent = () => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    fetchReadmeContent();
  }, []);

  const fetchReadmeContent = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/stharanzn/cyberAwareness/contents/README.md');
      const data = await response.json();

      if (response.ok) {
        const decodedContent = window.atob(data.content);
        setReadmeContent(decodedContent);
      } else {
        console.error('Failed to fetch README file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (    
      <p>{readmeContent}</p>    
  );
};

export default ReadmeComponent;