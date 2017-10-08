import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyAW3iCLks_VPMKdTjvmj0bPPNt-7YQ3g2k';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null,
    }
    this.searchVideo('react.js');
  }

  searchVideo(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const searchVideo = _.debounce((term) => { this.searchVideo(term) }, 300);

    return (
      <div className="row">
        <SearchBar onInputText={ searchVideo } />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onSelectVideo={ selectedVideo => { this.setState({selectedVideo}) } }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);