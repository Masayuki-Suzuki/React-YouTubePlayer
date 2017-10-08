import React, {Component} from 'react';
import VideoListItem from './videoListItem';

const VideoList = props => {
  const videoList = props.videos.map(video => {
    return (
      <VideoListItem
        onSelectVideo={props.onSelectVideo}
        key={video.etag}
        video={video} />
    )
  });
  return (
    <ul className="col-md-4 col-sm-12 video-list list-group">
      { videoList }
    </ul>
  );
}

export default VideoList;