import { Key } from "./Key"
import "./Keyboard.css"

export function Keyboard() {
  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  return (
    <>
      <div className="keyboard">
        {keys.map((key) => {
          return <Key text={key} key={key} />
        })}
      </div>
    </>
  )
}
