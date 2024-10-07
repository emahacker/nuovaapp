let internetTime = 0;
let socialTime = 0;
let tracking = false;
let intervalId;

const internetTimeElement = document.getElementById('internet-time');
const socialTimeElement = document.getElementById('social-time');
const startTrackingButton = document.getElementById('start-tracking');
const stopTrackingButton = document.getElementById('stop-tracking');
const resetTrackingButton = document.getElementById('reset-tracking');
const activityTypeSelect = document.getElementById('activity-type');

function startTracking() {
    if (!tracking) {
        tracking = true;
        intervalId = setInterval(() => {
            const activityType = activityTypeSelect.value;
            
            if (activityType === "internet") {
                internetTime++;
            } else if (activityType === "social") {
                socialTime++;
            }

            updateUI();
        }, 60000);
    }
}

function stopTracking() {
    if (tracking) {
        tracking = false;
        clearInterval(intervalId);
    }
}

function resetTracking() {
    internetTime = 0;
    socialTime = 0;
    updateUI();
}

function updateUI() {
    internetTimeElement.innerText = `${internetTime} minutes`;
    socialTimeElement.innerText = `${socialTime} minutes`;
}

startTrackingButton.addEventListener('click', startTracking);
stopTrackingButton.addEventListener('click', stopTracking);
resetTrackingButton.addEventListener('click', resetTracking);