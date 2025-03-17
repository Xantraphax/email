// Fake-Datenbank für Mails
const loginData = {
    "user1": {
        "emails": [
            { "subject": "Willkommen User1!", "from": "admin@example.com", "message": "Hallo User1, willkommen in deinem Postfach!" },
            { "subject": "Wichtige Mitteilung", "from": "support@example.com", "message": "Bitte überprüfe deine letzten Aktivitäten." }
        ]
    },
    "user2": {
        "emails": [
            { "subject": "Neues Update", "from": "admin@example.com", "message": "Hallo User2, es gibt ein neues Update!" },
            { "subject": "Achtung!", "from": "alerts@example.com", "message": "Dein Postfach hat fast kein Speicherplatz mehr." }
        ]
    },
    "user3": {
        "emails": [
            { "subject": "Woche in Review", "from": "admin@example.com", "message": "Hallo User3, hier ist dein wöchentlicher Bericht." },
            { "subject": "Dein Konto", "from": "billing@example.com", "message": "Bitte prüfe deinen letzten Rechnungsauszug." }
        ]
    },
    "user4": {
        "emails": [
            { "subject": "Neues Angebot!", "from": "offers@example.com", "message": "Exklusive Angebote nur für dich, User4!" },
            { "subject": "Achtung", "from": "alerts@example.com", "message": "Achtung, dein Passwort wird bald ablaufen." }
        ]
    },
    "user5": {
        "emails": [
            { "subject": "Woche in Review", "from": "admin@example.com", "message": "Hallo User5, hier ist dein wöchentlicher Bericht." },
            { "subject": "Neues Update verfügbar", "from": "updates@example.com", "message": "Lade jetzt das neue Update herunter!" }
        ]
    }
};

// 1️⃣ Benutzer aus der Session holen
const username = sessionStorage.getItem("loggedInUser");

// 2️⃣ Falls kein Nutzer eingeloggt ist → zurück zur Login-Seite!
if (!username || !loginData[username]) {
    alert("Du bist nicht eingeloggt!");
    window.location.href = "login.html";
}

// 3️⃣ E-Mails für den Nutzer laden
const userEmails = loginData[username].emails;
const emailList = document.getElementById("email-list");

// Begrüßung setzen
document.querySelector('.inbox-container h2').innerHTML = `Willkommen zurück, ${username}!`;

// 4️⃣ E-Mails anzeigen
userEmails.forEach(email => {
    const emailItem = document.createElement("div");
    emailItem.classList.add("email-item");
    
    emailItem.innerHTML = `
        <h3>Betreff: ${email.subject}</h3>
        <p>Von: ${email.from}</p>
        <p>Nachricht: ${email.message}</p>
    `;
    emailList.appendChild(emailItem);
});

// 5️⃣ Logout-Funktion
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
