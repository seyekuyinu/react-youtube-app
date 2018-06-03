import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyC71OsYoN9GDOqnkqJCIlJ1tzwAgMwm_ag';



class App extends Component{

    constructor(props){
        super(props);


        this.state = {
            videos: [],
            selectedVideo: null,

        };

        this.videoSearch('Major Lazer particula')





    }

    videoSearch(term){


        YTSearch({key:API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]

            });

        });

    }

    render(){

        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange={ videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo =>this.setState({selectedVideo})}

                    videos = {this.state.videos}
                />
            </div>
        );
    }

}




ReactDOM.render(<App/>, document.querySelector('.container'));

//so when I see a message from you, i just respond and get back to this.....app. I waiting for a message.