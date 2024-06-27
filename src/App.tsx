import React, { useState } from "react"
import "./App.css"

function App() {
  const [currentLink, setCurrentLink] = useState("About")
  return (
    <div id="main">
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
              }}
            >
              <div
                id="line"
                style={
                  currentLink === "About"
                    ? {
                        backgroundColor: "white",
                        width: "100px",
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
                About
              </p>
            </div>
            <div
              id="linkDiv"
              onClick={() => {
                setCurrentLink("Projects")
              }}
            >
              <div
                id="line"
                style={
                  currentLink === "Projects"
                    ? { borderColor: "white", width: "100px", color: "white" }
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
                Projects
              </p>
            </div>
          </div>
        </div>
        <div id="leftBottom">
          <a href="https://github.com/Chingis007">
            <img src="./github-mark.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kyrylo-karaulnyi-589950278/">
            <img src="./linkedin.svg" alt="" />
          </a>
        </div>
      </div>
      <div id="right">
        <div>blabla</div>
        <div>blabla</div>
        <div>blabla</div>
      </div>
    </div>
  )
}

export default App
