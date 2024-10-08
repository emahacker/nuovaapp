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
resetTrackingButton.addEventListener('click', resetTracking);function sendEmailReport() {
    let templateParams = {
        social_time: Math.round(socialTime),
        web_time: Math.round(webTime),
        user_email: "emanuele.zuffranieri@gmail.com" // Puoi raccogliere questa email dall'utente
    };

    emailjs.send('service_5cha8ql', 'template_ekclmnd', templateParams)
        .then(function(response) {
            console.log('Email inviata con successo!', response.status, response.text);
        }, function(error) {
            console.log('Errore durante l\'invio dell\'email.', error);
        });
}
// Inizializzazione di EmailJS con il tuo User ID
(function() {
   emailjs.init("service_5cha8ql"); // Sostituisci con il tuo USER ID da EmailJS
})();

// Funzione per inviare l'email con il report del tempo trascorso su social e web
function sendEmailReport() {
    let templateParams = {
        social_time: Math.round(socialTime), // Tempo sui social
        web_time: Math.round(webTime),       // Tempo sul web
        user_email: "emanuele.zuffranieri@gmail.com" // Tua email
    };

    emailjs.send('// Inizializzazione di EmailJS con il tuo User ID
(function() {
   emailjs.init("service_5cha8ql"); // Sostituisci con il tuo USER ID da EmailJS
})();

// Funzione per inviare l'email con il report del tempo trascorso su social e web
// Inizializzazione di EmailJS con il tuo User ID
(function() {
   emailjs.init("service_5cha8ql"); // Sostituisci con il tuo USER ID da EmailJS
})();

// Funzione per inviare l'email con il report del tempo trascorso su social e web
function sendEmailReport() {
    let templateParams = {
        social_time: Math.round(socialTime), // Tempo sui social
        web_time: Math.round(webTime),       // Tempo sul web
        user_email: "emanuele.zuffranieri@gmail.com" // Tua email
    };

    emailjs.send('service_5cha8ql', 'template_vt8tycd', templateParams)
        .then(function(response) {
            console.log('Email inviata con successo!', response.status, response.text);
        }, function(error) {
            console.log('Errore durante l\'invio dell\'email.', error);
        });
}
