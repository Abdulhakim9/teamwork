const SectionSelects = ({main, img, info}:{main:string, img:string, info:string}) => {
  return (
    <div>
      <h4>{main}</h4>
      <defs>
        <img src={img} />
        <p>{info}</p>
      </defs>
    </div>
  )
}

export default SectionSelects