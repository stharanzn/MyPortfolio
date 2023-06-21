import React, {useEffect, useState} from 'react'
import "./projects.scss"
import ReadmeComponent from '../../elements/readmeComponent';
import Languages from '../../elements/languages';
import RepoImage from '../../elements/repoImg';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const projsToShow = ["FPS_Shooter", "FPS_ShooterWebsite", "FPS_ShooterLauncher",
"NGOHub", "GreenMark", "Thriving_Villages", "MeetYeetBuild", "meetYeetLauncher",
"travelwebsite", "travelAssistant", "stharanzn.github.io"]
  

  useEffect(() => {
    

    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/stharanzn/repos', {
        });
        if (response.ok) {
          const data = await response.json();          
                    
          setProjects(data);  
            
        } else {
          console.error('Failed to fetch project data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProjects();      
  }, []);  

  return (

    <>

        <div className='projectPage'>

          <h1>Projects</h1>

          {

            projects.map((item, index)=>{  
              if(!projsToShow.includes(item.name)){
                return(<></>)
              }
              return (

                

              <div class="card-container" key={item.name}> 
                <div class="card"><a href={item.html_url}>
                    <div class="card--display">   
                      {/* <RepoImage prop={{"repoName":item.name}}/>                       */}
                      {/* <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="repo dp" /> */}
                      <img src={item.owner.avatar_url} alt="avtar" />                      
                      <h2 className='projTitle'>{item.name}</h2>
                      {/* <br/> */}
                      
                      {/* <div className='projLangs'>
                        <Languages/>
                      </div> */}

                    </div>
                    <div class="card--hover">

                      <p className='projDesc'>{item.description}</p>
                      <p class="link">Click to see project</p>
                    </div></a>
                  <div class="card--border"></div>
                </div>
              </div>
              )
            })

          }

        

        </div>

        

    
    </>
  );
}
