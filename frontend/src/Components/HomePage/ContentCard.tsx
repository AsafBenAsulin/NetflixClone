import { IContent } from "@/Models/IContent"
// import ReactPlayer from "react-player/youtube"

const ContentCard = (props:{content:IContent}) => {
  return (
    <div>{props.content.title}<></>
          <img src={props.content.imgThumb.toString()} style={{marginRight:10}}></img>
          {/* <ReactPlayer style={{width:50,height:50}} url={props.content.trailer.toString()}></ReactPlayer> */}

    </div>
  )
}

export default ContentCard