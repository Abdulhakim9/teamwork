const SixImgs = ({img, text}:{img: string, text: string}) => {
  return (
    <div>
        <img src={img} />
        <p>{text}</p>
    </div>
  )
}

export default SixImgs