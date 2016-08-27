function friends() {
    var season = getRandomInt(1, 10);
    var episode = getEpisode();
    function getEpisode(){
        if (season == 3 ||  season == 6) {
            return getRandomInt(1, 25)
        } else if(season == 10){
            return getRandomInt(1, 18)
        } else {
            return getRandomInt(1, 24)
        }
    }
    $('#result').html(renderResult('friends', season, episode));
}
function himym() {
    var season = getRandomInt(1, 9);
    var episode = getEpisode();
    function getEpisode(){
        if (season == 3) {
            return getRandomInt(1, 20)
        } else {
            return getRandomInt(1, 24)
        }
    }
    $('#result').html(renderResult('how-i-met-your-mother', season, episode));
}

function scrubs() {
    var season = getRandomInt(1, 9);
    var episode = getEpisode();

    function getEpisode(){
        switch (season) {
            case 1:
                return getRandomInt(1, 24)
                break;            
            case 2:
                return getRandomInt(1, 22)
                break;         
            case 3:
                return getRandomInt(1, 22)
                break;     
            case 4:
                return getRandomInt(1, 25)
                break;
            case 5:
                return getRandomInt(1, 24)
                break;
            case 6:
                return getRandomInt(1, 22)
                break;
            case 7:
                return getRandomInt(1, 11)
                break;
            case 8:
                return getRandomInt(1, 19)
                break;
            case 9:
                return getRandomInt(1, 13)
                break;
        }

    }
    $('#result').html(renderResult('scrubs', season, episode));
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getEpisodeUrl(show ,season, episode) {
    return "http://putlocker.is/watch-"+show+"-tvshow-season-"+season+"-episode-"+episode+"-online-free-putlocker.html"
}
function renderResult(show, season, episode) {
    var resultHTML = "Season: " + season + "<br> Episode: " + episode;
    resultHTML += "<div class='link'><a target='_blank' href="
        +getEpisodeUrl(show,season,episode)
        +" class='btn btn-success'>Watch on Putlocker</a></div>";
    getIframe(getEpisodeUrl(show,season,episode));
    if(show=='scrubs' && season == 9){
        resultHTML += "<br><span class='label label-danger'>Season 9 is not recommended</span>";
    }
    return resultHTML;
}
function getIframe(url){
    $.ajax({
       url: url,
       type: 'GET',
       success: function(res) {
          $(res).find('div.video').each(function(){
              $('#frame').append($(this).html());
         });

       }
     });
}