import React from 'react';

const videoDetail = props => {
  if(!props.video){
    return (
      <div className="col-md-8 col-sm-12 video-detail">
        Loading...
      </div>
    )
  }
  const url = `https://youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div className="col-md-8 col-sm-12 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h4>{props.video.snippet.title}</h4>
        <hr/>
        <p className="small">{props.video.snippet.channelTitle}</p>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default videoDetail;