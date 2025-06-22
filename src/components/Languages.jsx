import { Language } from "./Language"
import "./Languages.css"

export function Languages(props) {
  const langs = props.languages

  return (
    <>
      <div className="languages">
        {langs.map((lang) => {
          return (
            <Language text={lang.text} key={lang.text} bgColor={lang.color} />
          )
        })}
      </div>
    </>
  )
}
