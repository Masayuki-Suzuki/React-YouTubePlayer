import React from 'react';

const VideoListItem = (props) => {
  return (
    <li
      onClick={ () => { props.onSelectVideo(props.video); }}
      className="video-list-item list-group-item">
      <div className="media">
        <div className="media-left video-img">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt=""/>
        </div>
        <div className="media-body video-title">
          <div className="media-heading">
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;