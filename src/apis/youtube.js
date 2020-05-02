import axios from 'axios';

const KEY = 'AIzaSyDPuU-uk2Q-zjy46kiM37ml2Pi_upSv17g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});