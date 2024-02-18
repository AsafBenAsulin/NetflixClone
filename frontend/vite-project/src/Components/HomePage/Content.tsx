import ReactPlayer from "react-player/youtube"

const Content = (props:{content:any}) => {
  return (
    <div>"{props.content.title}"
        <div style={{width:50,height:50}}>
          <ReactPlayer style={{width:50,height:50}} url={props.content.trailer}></ReactPlayer>
        </div>
    </div>
  )
}

export default Content