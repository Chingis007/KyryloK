import React, { useRef, useState } from "react"
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
export type Jobs = {
  classname: string
  index: number
  time: string
  h1: string
  p: string
  skills: string[]
}[]
export type Projs = {
  classname: string
  index: number
  img: string
  h1: string
  p: string
  link: string
  skills: string[]
}[]
function App() {
  const [currentLink, setCurrentLink] = useState("About")
  const [allJobs, setAllJobs] = useState<Jobs>([
    // {
    //   classname: "unoJob",
    //   index: 0,
    //   time: "2024-Present",
    //   h1: "Mega senior pomidor developer ultra max. itjobscompany",
    //   p: "Worked with the UI team to engineer and improve major featuresof Starry’s customer-facing Android",
    //   skills: ["JavaScript", "TypeScript"],
    // },
    // {
    //   classname: "unoJob",
    //   index: 1,
    //   time: "2024-Present",
    //   h1: "Mega senior pomidor developer ultra max. itjobscompany",
    //   p: "Worked with the UI team to engineer and improve major featuresof Starry’s customer-facing Android",
    //   skills: ["JavaScript", "TypeScript"],
    // },
    // {
    //   classname: "unoJob",
    //   index: 2,
    //   time: "2024-Present",
    //   h1: "Mega senior pomidor developer ultra max. itjobscompany",
    //   p: "Worked with the UI team to engineer and improve major featuresof Starry’s customer-facing Android",
    //   skills: ["JavaScript", "TypeScript"],
    // },
  ])
  const [allProjects, setAllProjects] = useState<Projs>([
    {
      classname: "unoProject",
      index: 0,
      img: "./messanger.png",
      h1: "Messanger App",
      p: "I have successfully developed a feature-rich messenger application, highlighting my skills in modern web development. The front-end is designed using React and TypeScript, offering a responsive and intuitive user interface. The back-end is built with a Node.js application, leveraging MongoDB for real-time data storage and retrieval.The entire application is deployed on cloud platforms such as Render and Vercel, ensuring optimal performance and scalability. This project showcases my ability to create seamless, real-time communication solutions, integrating front-end and back-end technologies, and efficiently deploying applications in a cloud environment.",
      link: "https://silentalk.vercel.app/",
      skills: [
        "JavaScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
      ],
    },
    {
      classname: "unoProject",
      index: 1,
      img: "./commerce.png",
      h1: "E-Commerce Clothing Website",
      p: "I have developed a dynamic and fully-functional e-commerce clothing website that showcases my expertise in full-stack web development. The front-end of the website is crafted using React and TypeScript, ensuring a seamless and interactive user experience. On the back-end, I utilized a Dockerized Node.js application with MongoDB for efficient data management and scalability.The entire application is deployed and running on cloud platforms, including AWS, Render, and Vercel, ensuring high availability and performance. This project demonstrates my proficiency in modern web technologies, cloud deployment, and containerization, delivering a robust and user-friendly online shopping experience.",
      link: "https://verona-front.vercel.app/",
      skills: [
        "JavaScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "React",
        "React",
        "React",
        "React",
        "React",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
        "TypeScript",
      ],
    },
  ])
  let listenerExist = false
  async function updateMousePosition(ev: MouseEvent) {
    listenerExist = true
    let target = document.getElementById("gradMain") as HTMLDivElement
    let rect = target.getBoundingClientRect()
    // let x = Number(ev.clientX) - Number(rect.left)
    // let y = Number(ev.clientY) - Number(rect.top)
    // let win = window.scrollY
    // console.log(win)
    // let tar = target.offsetTop
    // console.log(tar)
    let x = Number(ev.clientX) - 400
    let y = Number(ev.clientY) - 400 + window.scrollY
    target.style.setProperty("--x", x + "px")
    target.style.setProperty("--y", y + "px")
  }
  if (!listenerExist) {
    window.addEventListener("mousemove", updateMousePosition)
  }

  return (
    <>
      <div
        id="main"
        // onMouseMove={(event) => {
        //   let target = event.target as HTMLDivElement
        //   let rect = target.getBoundingClientRect()
        //   let x = event.clientX - rect.left
        //   let y = event.clientY - rect.top
        //   target.style.setProperty("--x", x + "px")
        //   target.style.setProperty("--y", y + "px")
        // }}
      >
        {/* <div id="gradMain"></div> */}
        <div id="left">
          <div id="leftTop">
            <div id="header">
              <h1>Kyrylo Karaulnyi</h1>
              <h2>Web Developer</h2>
              <h3>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </h3>
            </div>
            <div id="mapLinks">
              <div
                id="linkDiv"
                onClick={() => {
                  setCurrentLink("About")
                  window.scrollTo(0, 0)
                }}
              >
                <a href="#rightAbout">
                  <div
                    id="line"
                    style={
                      currentLink === "About"
                        ? {
                            backgroundColor: "white",
                            width: "80px",
                            color: "white",
                          }
                        : { display: "flex" }
                    }
                  ></div>
                  <p
                    style={
                      currentLink === "About"
                        ? { color: "white" }
                        : { display: "flex" }
                    }
                  >
                    ABOUT
                  </p>
                </a>
              </div>
              <div
                id="linkDiv"
                onClick={() => {
                  setCurrentLink("Projects")
                }}
              >
                <a href="#rightProjects">
                  <div
                    id="line"
                    style={
                      currentLink === "Projects"
                        ? {
                            borderColor: "white",
                            width: "80px",
                            color: "white",
                          }
                        : { display: "flex" }
                    }
                  ></div>
                  <p
                    style={
                      currentLink === "Projects"
                        ? { color: "white" }
                        : { display: "flex" }
                    }
                  >
                    PROJECTS
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div id="leftBottom">
            <a href="https://github.com/Chingis007">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#FFFFFF" }}
                size="xl"
              />
            </a>
            <a href="https://www.linkedin.com/in/kyrylo-karaulnyi-589950278/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#FFFFFF" }}
                size="xl"
              />
            </a>
          </div>
        </div>
        <div id="left2">
          <div id="leftTop">
            <div id="header">
              <h1>Kyrylo Karaulnyi</h1>
              <h2>Web Developer</h2>
              <h3>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </h3>
            </div>
            <div id="mapLinks">
              <div
                id="linkDiv"
                onClick={() => {
                  setCurrentLink("About")
                  window.scrollTo(0, 0)
                }}
              >
                <a href="#rightAbout">
                  <div
                    id="line"
                    style={
                      currentLink === "About"
                        ? {
                            backgroundColor: "white",
                            width: "80px",
                            color: "white",
                          }
                        : { display: "flex" }
                    }
                  ></div>
                  <p
                    style={
                      currentLink === "About"
                        ? { color: "white" }
                        : { display: "flex" }
                    }
                  >
                    ABOUT
                  </p>
                </a>
              </div>
              <div
                id="linkDiv"
                onClick={() => {
                  setCurrentLink("Projects")
                }}
              >
                <a href="#rightProjects">
                  <div
                    id="line"
                    style={
                      currentLink === "Projects"
                        ? {
                            borderColor: "white",
                            width: "80px",
                            color: "white",
                          }
                        : { display: "flex" }
                    }
                  ></div>
                  <p
                    style={
                      currentLink === "Projects"
                        ? { color: "white" }
                        : { display: "flex" }
                    }
                  >
                    PROJECTS
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div id="leftBottom">
            <a href="https://github.com/Chingis007">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#FFFFFF" }}
                size="xl"
              />
            </a>
            <a href="https://www.linkedin.com/in/kyrylo-karaulnyi-589950278/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#FFFFFF" }}
                size="xl"
              />
            </a>
          </div>
        </div>

        <div id="right">
          <div id="rightAbout">
            <div id="title">ABOUT</div>
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio.
            </p>
            <p>
              My main focus these days is building accessible user interfaces
              for our customers at Klaviyo. I most enjoy building software in
              the sweet spot where design and engineering meet — things that
              look good but are also built well under the hood. In my free time,
              I've also released an online video course that covers everything
              you need to know to build a web app with the Spotify API.
            </p>
            <p>
              When I’m not at the computer, I’m usually rock climbing, reading,
              hanging out with my wife and two cats, or running around Hyrule
              searching for Korok seeds K o r o k s e e d s .
            </p>
          </div>
          {allJobs.length ? (
            <div id="rightJobs">
              <div id="title">EXPERIENCE</div>
              {allJobs.map((oneJob) => {
                return (
                  <div
                    className={oneJob.classname}
                    // onMouseEnter={(event) => {
                    //   console.log("1")
                    //   let oldAllJobs = structuredClone(allJobs)
                    //   for (let index = 0; index < oldAllJobs.length; index++) {
                    //     if (
                    //       (oldAllJobs[index].index =
                    //         oldAllJobs[oneJob.index].index)
                    //     ) {
                    //       oldAllJobs[oneJob.index].classname = "unoJob highlight"
                    //     } else {
                    //       oldAllJobs[index].classname = "unoJob unhighlight"
                    //     }
                    //   }
                    //   setAllJobs(oldAllJobs)
                    //   event.stopPropagation()
                    // }}
                    // onMouseLeave={(event) => {
                    //   console.log("2")

                    //   let oldAllJobs = structuredClone(allJobs)
                    //   for (let index = 0; index < oldAllJobs.length; index++) {
                    //     oldAllJobs[index].classname = "unoJob"
                    //   }
                    //   setAllJobs(oldAllJobs)
                    //   event.stopPropagation()
                    // }}
                  >
                    <div id="time">{oneJob.time}</div>
                    <div id="otherInfo">
                      <h1>{oneJob.h1}</h1>
                      <p>{oneJob.p}</p>
                      <div id="skills">
                        {oneJob.skills.map((skill) => {
                          return <div id="skill">skill</div>
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : undefined}
          {allProjects.length ? (
            <div id="rightProjects">
              <div id="title">PROJECTS</div>
              {allProjects.map((oneProject) => {
                return (
                  <div
                    className={oneProject.classname}
                    onClick={() => window.open(oneProject.link, "_blank")}
                    // onMouseEnter={(event) => {
                    //   console.log("1")
                    //   let oldAllJobs = structuredClone(allJobs)
                    //   for (let index = 0; index < oldAllJobs.length; index++) {
                    //     if (
                    //       (oldAllJobs[index].index =
                    //         oldAllJobs[oneProject.index].index)
                    //     ) {
                    //       oldAllJobs[oneProject.index].classname = "unoJob highlight"
                    //     } else {
                    //       oldAllJobs[index].classname = "unoJob unhighlight"
                    //     }
                    //   }
                    //   setAllJobs(oldAllJobs)
                    //   event.stopPropagation()
                    // }}
                    // onMouseLeave={(event) => {
                    //   console.log("2")

                    //   let oldAllJobs = structuredClone(allJobs)
                    //   for (let index = 0; index < oldAllJobs.length; index++) {
                    //     oldAllJobs[index].classname = "unoJob"
                    //   }
                    //   setAllJobs(oldAllJobs)
                    //   event.stopPropagation()
                    // }}
                  >
                    <div id="imgDiv">
                      <img src={oneProject.img} alt="" />
                    </div>
                    <div id="otherInfo">
                      <h1>{oneProject.h1}</h1>
                      <p>{oneProject.p}</p>
                      <div id="skills">
                        {oneProject.skills
                          ? oneProject.skills.map((skill) => {
                              return <div id="skill">{skill}</div>
                            })
                          : undefined}
                      </div>
                    </div>
                  </div>
                )
              })}
              <div id="link">
                <a href="./Resume.pdf" download="">
                  View Full Resume
                </a>
              </div>
            </div>
          ) : undefined}
        </div>
        <div id="gradMain"></div>
      </div>
    </>
  )
}

export default App
