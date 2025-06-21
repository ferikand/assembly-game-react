export function Language(props) {
  return (
    <>
      <div className="language" style={{ backgroundColor: props.bgColor }}>
        {props.text}
      </div>
    </>
  )
}
