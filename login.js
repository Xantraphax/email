// Beispielhafte Login-Daten (normalerweise würde dies vom Server kommen)
const loginData = {
    "user1": { "password": "password1" },
    "user2": { "password": "password2" },
    "user3": { "password": "password3" },
    "user4": { "password": "password4" },
    "user5": { "password": "password5" }
};

// Funktion, um SHA-256 Hash zu erzeugen
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

// Login-Funktion
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lade Login-Daten aus JSON
    const response = await fetch("logins.json");
    const loginData = await response.json();

    // Überprüfen, ob Nutzer existiert
    if (!loginData[username]) {
        alert("Benutzer existiert nicht!");
        return;
    }

    // Passwort hashen und vergleichen
    const hashedPassword = await hashPassword(password);
    if (hashedPassword === loginData[username].password) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "inbox.html";
    } else {
        alert("Falsches Passwort!");
    }
}

