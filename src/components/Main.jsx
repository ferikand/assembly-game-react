import { Languages } from "./Languages"
import { Notice } from "./Notice"
import { Keyboard } from "./Keyboard"
import { Letters } from "./Letters"
import "./Main.css"

export function Main() {
  const languagesArray = [
    { text: "HTML", color: "#E2680F" },
    { text: "CSS", color: "#328AF1" },
    { text: "JavaScript", color: "#F4EB13" },
    { text: "React", color: "#2ED3E9" },
    { text: "Typescript", color: "#298EC6" },
    { text: "Node.js", color: "#599137" },
    { text: "Pyton", color: "#FFD742" },
    { text: "Ruby", color: "#D02B2B" },
    { text: "Assembly", color: "#2D519F" },
  ]
  return (
    <>
      <div className="main">
        <header>
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </header>
        <Notice />
        <Languages languages={languagesArray} />
        <Letters />
        <Keyboard />
      </div>
    </>
  )
}
