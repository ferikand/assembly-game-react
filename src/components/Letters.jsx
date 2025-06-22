import { Letter } from "./Letter"
import "./Letters.css"

export function Letters() {
  const letters = [...Array.from({ length: 8 })]

  return (
    <>
      <div className="letters">
        {letters.map((letter, i) => {
          return <Letter letter={letter} key={i} />
        })}
      </div>
    </>
  )
}
