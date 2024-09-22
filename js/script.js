function playMusic() {
    var video = document.getElementById('background');
    var music = document.getElementById('music__fun');

    if (video && music) {
        video.play();
        music.play();
    } else {
        console.error("Video or audio element not found.");
    }
}

    function handleClick() {
        playMusic();
        $('#click__to__play').fadeOut();
        $('#menu').fadeIn();
        $('#menucusstomtext').fadeIn();
        $('#background').fadeIn();
        $('.wrapper').fadeIn();  
        $('.btn').fadeIn();  
        $('.btn2').fadeIn(); 
        $('.btn3').fadeIn(); 
    }
