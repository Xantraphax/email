// Fake-Datenbank für Mails
const loginData = {
    "user1": {
        "emails": [
            { 
                "subject": "🔥 Willkommensgeschenk für dich!", 
                "from": "mystery@darkweb.net", 
                "message": "Glückwunsch, User1! 🎉 Du wurdest für ein geheimes Programm ausgewählt. Öffne die Datei im Anhang... Falls du dich traust. 🕵️‍♂️"
            },
            { 
                "subject": "⚠ Systemwarnung! Verdächtige Aktivitäten erkannt!", 
                "from": "security@cyberpolice.com", 
                "message": "Wir haben ungewöhnliche Zugriffe von deinem Konto festgestellt. Warst du das? Falls nicht, ändere SOFORT dein Passwort!"
            }
        ]
    },
    "user2": {
        "emails": [
            { 
                "subject": "💀 Hast du den Mut, die Wahrheit zu erfahren?", 
                "from": "unknown@deepnet.org", 
                "message": "Wir beobachten dich, User2. Deine IP wurde geloggt. Falls du dieses Spiel gewinnen willst, folge den Anweisungen in der nächsten Mail. ⏳"
            },
            { 
                "subject": "🎮 Geheimmission freigeschaltet!", 
                "from": "admin@undergroundgaming.net", 
                "message": "Hallo User2! 🚀 Eine neue versteckte Mission ist für dich verfügbar. Finde den Code in einer der alten Nachrichten..."
            }
        ]
    },
    "user3": {
        "emails": [
            { 
                "subject": "🚀 Dein Zugang zum Elite-Club wurde genehmigt!", 
                "from": "vip@anonymous.net", 
                "message": "Herzlichen Glückwunsch, User3! Du hast die erste Prüfung bestanden. Logge dich mit deinem geheimen Token ein: ***XJ-9X7A***"
            },
            { 
                "subject": "⚠ Letzte Warnung: Dein Konto wird gelöscht!", 
                "from": "support@totallylegitbank.com", 
                "message": "User3, wir haben festgestellt, dass dein Konto unsicher ist. Klicke auf diesen Link, um es zu sichern: [LINK ENTFERNT]"
            }
        ]
    },
    "user4": {
        "emails": [
            { 
                "subject": "💰 Du hast 1.000.000 Credits gewonnen!", 
                "from": "lotto@darkweb.net", 
                "message": "Herzlichen Glückwunsch! Dein Hacker-Skill wurde erkannt und du hast die Cyber-Lotterie gewonnen! 🤑 Fordere deinen Gewinn mit Code **HACK-2025** ein."
            },
            { 
                "subject": "📢 Geheime Nachricht für User4!", 
                "from": "whisper@anonymousmail.net", 
                "message": "Du bist auserwählt! Der nächste Hinweis für das große Finale ist in einem alten Post versteckt... 📜"
            }
        ]
    },
    "user5": {
        "emails": [
            { 
                "subject": "👀 Ich weiß, was du letzte Woche getan hast!", 
                "from": "hacker@unknownsource.org", 
                "message": "Hey User5... Erinnerst du dich an dein letztes Login? Ich schon. Aber keine Sorge, ich könnte dir helfen. Interessiert? Schreibe mir zurück. 📩"
            },
            { 
                "subject": "🔓 Sperriger Anhang – Passwort erforderlich!", 
                "from": "securefiles@topsecret.net", 
                "message": "Hier ist die Datei, die du gesucht hast. Sie ist verschlüsselt. Das Passwort könnte in einer alten Nachricht versteckt sein... 🔐"
            }
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
