// script.js
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        videoId: 'GDxb4LH920I', // Replace with your YouTube video ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'GDxb4LH920I', // Same as videoId for looping
            'mute': 1,
            'modestbranding': 0,
            'rel': 0,
            'showinfo': 0,
			'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
    }
}



