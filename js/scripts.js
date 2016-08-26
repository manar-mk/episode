function friends() {
    var season = getRandomInt(1, 10);
    var episode = function() {
        if (season == 3 ||  season == 6) {
            return getRandomInt(1, 25)
        } else if(season == 10){
            return getRandomInt(1, 18)
        } else {
            return getRandomInt(1, 24)
        }
    }
    document.getElementById('result').innerHTML = "Season: " + season + "<br> Episode: " + episode()
}
function himym() {
    var season = getRandomInt(1, 9);
    var episode = function() {
        if (season == 3) {
            return getRandomInt(1, 20)
        } else {
            return getRandomInt(1, 24)
        }
    }
    document.getElementById('result').innerHTML = "Season: " + season + "<br> Episode: " + episode()
}

function scrubs() {
    var season = getRandomInt(1, 9);
    var episode = function() {
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
    document.getElementById('result').innerHTML = "Season: " + season + "<br> Episode: " + episode();
    if(season == 9){
        document.getElementById('result').innerHTML += "<br><span class='label label-danger'>Season 9 is not recommended</span>";
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
