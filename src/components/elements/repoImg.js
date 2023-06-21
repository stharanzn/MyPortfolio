import React, {useEffect, useState} from 'react'



export default function RepoImage(prop) {
    const [imageUrl, setImageUrl] = useState('');
    console.log(prop)

    useEffect(() => {
      fetchReadmeContent();
    }, []);
  
    const fetchReadmeContent = async () => {
      try {
        
        const response = await fetch(`https://api.github.com/repos/stharanzn/${prop["prop"]["repoName"]}/contents/${"repoName"}RepoDP.png`);
        const data = await response.json();
  
        if (response.ok) {
        //   const decodedContent = window.atob(data.content);
          const imgData = data.download_url
          console.log(data)
          console.log(imgData)
          setImageUrl(imgData);
        } else {
          console.error('Failed to fetch README file');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (    
        <img src={imageUrl} alt="repo dp" />
    );
  };
