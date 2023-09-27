import React, { useEffect, useState } from "react";
import "./codefolio.scss"
import Languages from "../components/elements/languages";

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "yago", /*#__PURE__*/

    React.createElement("strong", null, "est\xE9vez")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I am a"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Developer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "Creating"), " possibilities.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full glass" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Ranjan Shrestha."), /*#__PURE__*/
    React.createElement("p", null, "Hi, I'm Ranjan. I'm a dedicated software developer with a strong interest in web development and game development."), /*#__PURE__*/



    React.createElement("p", null, "I am a 4th year student (2024 batch), pursuing B.Tech CSE from VIT Bhopal. I have developed multiple project variying from websites to android applications and desktop games. I am also a Gymnast and a sports freak with participation in regional and national level competetions in swimming and basketball.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc glass" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS, along with sass and bootstrap wheneven needed."), /*#__PURE__*/




    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, etc). And for quick launchers I also make desktop applications using electron js. I am also comfortable in making and hosting API's.")), /*#__PURE__*/




    React.createElement("div", { className: "desc glass" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a developer."), /*#__PURE__*/
    React.createElement("p", null, "I feel comfortable working with many development softwares like Android studios, unity, InteliJ, Visual Studios, etc."), /*#__PURE__*/





    React.createElement("p", null, "Multiplayer game, Racing game, Bluetooth smart car controller app, Google maps integrated app... You name it! I also love developing the whole stack myself, enabling me to understand the working of each component."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {

    const [projects, setProjects] = useState([]);

  const projsToShow = ["FPS_ShooterWebsite", "FPS_ShooterLauncher", "MyPortfolio", "NGOHub", "GreenMark", "meetYeetLauncher", "PongGame"]

// const projsToShow = ["FPSShooter", "FPS_ShooterWebsite", "FPS_ShooterLauncher",
// "NGOHub", "GreenMark", "Thriving_Villages", "MeetYeetBuild", "meetYeetLauncher",
// "travelwebsite", "travelAssistant", "stharanzn.github.io"]
  

  useEffect(() => {
    

    const fetchProjects = async () => {
      try {
        var storedData = JSON.parse(window.sessionStorage.getItem("storedData"));
        if(storedData !== null){
          console.log("data found");
          console.log(storedData);
          setProjects(storedData);
        }else{
          console.log("sending fetch request")
            const response = await fetch('https://api.github.com/users/stharanzn/repos', {
            });
            if (response.ok) {
                console.log("fetching projects data");
                const data = await response.json(); 
                window.sessionStorage.setItem("storedData", JSON.stringify(data));         
                console.log(data)
                setProjects(data);  
                  
            }else {
                console.error('Failed to fetch project data');
            }
        }

        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProjects();      
  }, []);  

  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my learning journey in the ",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://vitbhopal.ac.in/", target: "_blank", rel: "noopener noreferrer" }, "VIT Bhopal"), ", university, where I've been coding and learning for almost 3 years until I was sucessfully able to build, and deploy projects over the web.")), /*#__PURE__*/



    


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/

        projects.map((item, index)=>{  
          if(!projsToShow.includes(item.name)){
            return(<></>)
          }
          return (

            <>
                <div class="project" key={index}>
        <a class="project-link" href={item.html_url} target="_blank" rel="noopener noreferrer">
          <img class="project-image" src={`https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/ProjectImage.png`} alt="project logo"/></a>
          <div class="project-details">
            <div class="project-tile">
              <p class="icons">
                <i class="fab fa-js-square">
                  </i><i class="fab fa-css3-alt"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-node"></i>
                  </p>{item.name}
                  </div>
                  <small><Languages prop={{"repoName": item.name}}/></small>
                  <p>{item.description}</p>
                  <div class="buttons">
                  {/* <img src={item.owner.avatar_url} alt="avtar" /> */}
                    {/* <a href="https://github.com/yagoestevez/anonymous-message-board" target="_blank" rel="noopener noreferrer">View source <i class="fas fa-external-link-alt"></i></a> */}
                    {/* <a href="https://yagoestevez-anon-msg-board.glitch.me/" target="_blank" rel="noopener noreferrer">Try it Live <i class="fas fa-external-link-alt"></i></a> */}
                  </div>
              </div>
            </div>
            </>

        //   <div class="card-container" key={item.name}> 
        //     <div class="card"><a href={item.html_url}>
        //         <div class="card--display">   
        //           {/* <RepoImage prop={{"repoName":item.name}}/>                       */}
        //           {/* <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="repo dp" /> */}
        //           <img src={item.owner.avatar_url} alt="avtar" />                      
        //           <h2 className='projTitle'>{item.name}</h2>
        //           {/* <br/> */}
                  
        //           <div className='projLangs'>
        //             <Languages/>
        //           </div>

        //         </div>
        //         <div class="card--hover">

        //           <p className='projDesc'>{item.description}</p>
        //           <p class="link">Click to see project</p>
        //         </div></a>
        //       <div class="card--border"></div>
        //     </div>
        //   </div>
          )
        }),


    ))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "stharanzn1705@gmail.com"))), /*#__PURE__*/

    // React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

    // React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", onSubmit: handleSubmit }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", id: "name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", id:"email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", id: "message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "submit", type:"Submit", onClick: submitDetails})))));




};


const handleSubmit = (event)=>{
  event.preventDefault();
}

const submitDetails = ()=>{
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  if(name!=="" && email!=="" && message!== "")
    alert(`Thankyou ${name} for contacting.`)
}


/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};

export default function CodeFolio() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    // React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
    // React.createElement(Nav, { toggleMenu: true }), /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement(About, null), /*#__PURE__*/
    React.createElement(Projects, null), /*#__PURE__*/
    React.createElement(Contact, null), /*#__PURE__*/
    // React.createElement(Footer, null)
    ));
  
  
}



