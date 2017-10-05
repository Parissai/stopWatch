var time = 0;
var interval;
var started = false;

setUp();

function start() {
    if (started == false) {
        interval = setInterval(function () {
            time += 0.01;
            document.getElementById('timer').innerHTML = time.toFixed(2);

        }, 100);
        started = true;
    }
    else {
        clearInterval(interval);
        started = false;
    }
}

function record() {
    document.getElementById('records').innerHTML += time.toFixed(2) + "</br>";
}

function reset() {
    location.reload();
}


function setUp() {

    document.getElementById('start').addEventListener('click', function () {
        start();
    })
    document.getElementById('record').addEventListener('click', function () {
        record();
    })
    document.getElementById('reset').addEventListener('click', function () {
        reset();
    })

    document.addEventListener('keydown', function (event) {
        if (event.key == "s") {
            start();
        }
        else if (event.key == "t"){
            record();
        }
        else if(event.key == "r"){
            reset();
        }
    })
}