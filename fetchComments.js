const axios = require('axios');


const API_KEY = 'AIzaSyDSi_UDD6x_G9c424jwrLwx3iYD0cki6fk';
const VIDEO_ID = 'ny61lc2xiZk';




async function fetchComments() {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads`, {
            params: {
                part: 'snippet',
                videoId: VIDEO_ID,
                key: API_KEY
            }
        });

        const comments = response.data.items
        .map(item => item.snippet.topLevelComment.snippet.textDisplay)
        .filter(comment => !comment.match(/https?:\/\/\S+/g)); // Filtrar comentarios con enlaces
    
    comments.forEach(comment => {
        console.log(comment);
    });

    } catch (error) {
        console.error('Hubo un error:', error.response.data);
    }
}

fetchComments();





