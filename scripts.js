// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let imageObject = document.getElementById('rocket');
    let flightStatus = document.getElementById('flightStatus');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let takeOff = document.getElementById('takeoff');
    let landing = document.getElementById('landing');
    let missionAbort = document.getElementById('missionAbort');
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let right = document.getElementById('right');
    let left = document.getElementById('left');

    imageObject.style.position = 'absolute';
    imageObject.style.left = '0px';
    imageObject.style.bottom = '0px';

    takeOff.addEventListener('click', function () {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        }
    })
    landing.addEventListener('click', function () {
        let response = window.confirm('The shuttle is landing. Landing gear engaged.');

        if (response) {
            flightStatus.innerHTML = 'The shuttle has landed';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }
    });

    missionAbort.addEventListener('click', function () {
        let response = window.confirm('Confirm that you want to abort the mission.');

        if (response) {
            flightStatus.innerHTML = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'red';
            spaceShuttleHeight.innerHTML = '0';
        }
    });
    up.addEventListener("click", function() {
        movement = parseInt(imageObject.style.bottom) + 10 + "px"
        imageObject.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener("click", function() {
        movement = parseInt(imageObject.style.bottom) - 10 + "px"
        imageObject.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });

    right.addEventListener("click", function() {
        movement = parseInt(imageObject.style.left) + 10 + "px"
        imageObject.style.left = movement;
    });

    left.addEventListener("click", function() {
        movement = parseInt(imageObject.style.left) - 10 + "px"
        imageObject.style.left = movement;
    });

});