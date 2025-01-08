"use client"
import { useState } from "react"
import Image from "next/image"
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
  useHtml?: boolean
  img: string
  h1: string
  p: string
  link: string
  skills: string[]
}[]
export default function App() {
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
      // useHtml: true,
      img: "/repshop.png",
      h1: "Repair Shop",
      p: "I developed a website for a repair shop designed to streamline operations and enhance user experience. The platform allows authorized users to manage customers and service tickets efficiently, with features like ticket tracking, editing, filtering, and searching. Built with Next.js and deployed on Vercel, the website benefits from fast performance, server-side rendering, and scalability. The design is responsive, ensuring seamless functionality across devices, while the development process emphasized clean code, reusable components, and adherence to best practices. The result is a reliable, user-friendly tool that meets the repair shop's needs and provides a strong foundation for future growth and improvements.",
      link: "https://next-repair-shop-pr.vercel.app/",
      skills: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "React",
        "Kinde",
        "Sentry",
        "zod",
        "NeonDB",
        "drizzle",
        "shadcn",
      ],
    },
    {
      classname: "unoProject",
      img: "/messanger.png",
      h1: "Messanger App",
      p: "I have successfully developed a feature-rich messenger application, highlighting my skills in modern web development. The front-end is designed using React and TypeScript, offering a responsive and intuitive user interface. The back-end is built with a Node.js application, leveraging MongoDB for real-time data storage and retrieval.The entire application is deployed on cloud platforms such as Render and Vercel, ensuring optimal performance and scalability. This project showcases my ability to create seamless, real-time communication solutions, integrating front-end and back-end technologies, and efficiently deploying applications in a cloud environment.",
      link: "https://silentalk.vercel.app/",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "MongoDB",
        "Google API",
        "Node.js",
      ],
    },
    {
      classname: "unoProject",
      img: "/commerce.png",
      h1: "E-Commerce Clothing Website",
      p: "I have developed a dynamic and fully-functional e-commerce clothing website that showcases my expertise in full-stack web development. The front-end of the website is crafted using React and TypeScript, ensuring a seamless and interactive user experience. On the back-end, I utilized a Dockerized Node.js application with MongoDB for efficient data management and scalability.The entire application is deployed and running on cloud platforms, including AWS, Render, and Vercel, ensuring high availability and performance. This project demonstrates my proficiency in modern web technologies, cloud deployment, and containerization, delivering a robust and user-friendly online shopping experience.",
      link: "https://verona-front.vercel.app/",
      skills: [
        "JavaScript",
        "TypeScript",
        "Docker",
        "Node.js",
        "Express",
        "React",
        "Vite",
      ],
    },
  ])
  let listenerExist = false
  async function updateMousePosition(ev: MouseEvent) {
    listenerExist = true
    const target = document.getElementById("gradMain") as HTMLDivElement
    // const rect = target.getBoundingClientRect()
    // let x = Number(ev.clientX) - Number(rect.left)
    // let y = Number(ev.clientY) - Number(rect.top)
    // let win = window.scrollY
    // console.log(win)
    // let tar = target.offsetTop
    // console.log(tar)
    const x = Number(ev.clientX) - 400
    if (typeof window !== "undefined") {
      const y = Number(ev.clientY) - 400 + window.scrollY
      target!.style.setProperty("--x", x + "px")
      target!.style.setProperty("--y", y + "px")
    }
  }
  if (!listenerExist) {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition)
    }
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
                  if (typeof window !== "undefined") {
                    window.scrollTo(0, 0)
                  }
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
              <Image
                width={25}
                height={25}
                alt="github"
                src="/github.svg"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/kyrylo-karaulnyi-589950278/">
              <Image
                width={25}
                height={25}
                alt="linkedin"
                src="/linkedin.svg"
                style={{ width: "25px", height: "25px" }}
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
                  if (typeof window !== "undefined") {
                    window.scrollTo(0, 0)
                  }
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
              <Image
                width={25}
                height={25}
                alt="github"
                src="/github.svg"
                style={{ width: "25px", height: "25px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/kyrylo-karaulnyi-589950278/">
              <Image
                width={25}
                height={25}
                alt="linkedin"
                src="/linkedin.svg"
                style={{ width: "25px", height: "25px" }}
              />
            </a>
          </div>
        </div>

        <div id="right">
          <div id="rightAbout">
            <div id="title">ABOUT</div>
            <p>
              Hello! I&apos;m a passionate and dedicated Full Stack Developer
              with a strong expertise in modern web technologies. With a robust
              skill set that includes JavaScript, Node.js, Next, Docker, React,
              Git, Vite, Vercel, AWS and more, I am committed to creating
              high-quality, scalable, and efficient web applications.
            </p>
            <p>
              My journey in the tech world began with a deep curiosity about how
              things work, which quickly evolved into a full-blown passion for
              web development. Over the years, I have honed my skills and gained
              valuable experience in both front-end and back-end development,
              enabling me to tackle complex challenges and deliver comprehensive
              solutions.
            </p>
            <p>
              I pride myself on being a lifelong learner, always eager to
              embrace new technologies and methodologies. This readiness to
              learn ensures that I stay at the forefront of industry trends and
              best practices, continuously improving my craft and expanding my
              capabilities.
            </p>
          </div>
          {allJobs.length ? (
            <div id="rightJobs">
              <div id="title">EXPERIENCE</div>
              {allJobs.map((oneJob) => {
                return (
                  <div
                    className={oneJob.classname}
                    key={oneJob.time}
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
                          return (
                            <div id="skill" key={skill}>
                              skill
                            </div>
                          )
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
                    key={oneProject.h1}
                    className={oneProject.classname}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open(oneProject.link, "_blank")
                      }
                    }}
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
                    {/* {oneProject.useHtml ? (
                      <div id="imgDiv">
                        <object
                          type="text/html"
                          data={oneProject.link}
                        ></object>
                      </div>
                    ) : (
                      <div id="imgDiv">
                        <img src={oneProject.img} alt="" />
                      </div>
                    )} */}
                    <div id="imgDiv">
                      <Image
                        width={25}
                        height={25}
                        src={oneProject.img}
                        alt=""
                        unoptimized={true}
                      />
                    </div>
                    <div id="otherInfo">
                      <h1>{oneProject.h1}</h1>
                      <p>{oneProject.p}</p>
                      <div id="skills">
                        {oneProject.skills
                          ? oneProject.skills.map((skill) => {
                              return (
                                <div id="skill" key={skill}>
                                  {skill}
                                </div>
                              )
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
