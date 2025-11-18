const sceltaCPU = document.querySelector(".scelta-cpu");
const scelteUtente = document.querySelectorAll(".scelta");
const messggio = document.querySelector(".messaggio");
const btnGiocaDiNuovo = document.querySelector(".gioca-di-nuovo");

scelteUtente.forEach(scelta => {

    scelta.addEventListener("click", giocataCPU);

});

function giocataCPU(evento) {

    const sceltaUtente = evento.target.dataset.scelta; // carta, forbice o sasso
    const sceltePossibili = ["carta", "forbice", "sasso"];
    const mossaCPU = sceltePossibili[generaNumeroRandomico(0, sceltePossibili.length - 1)];

    switch (mossaCPU) {
        case "carta":
            sceltaCPU.innerText = "✋🏻";
            break;
        case "forbice":
            sceltaCPU.innerText = "✌🏻";
            break;
        case "sasso":
            sceltaCPU.innerText = "👊🏻";
            break;
    }

    determinaVittoria(sceltaUtente, mossaCPU);

}

function generaNumeroRandomico(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function determinaVittoria(mossaUtente, mossaCPU) {

    if ((mossaUtente === "carta" && mossaCPU === "sasso") || (mossaUtente === "forbice " && mossaCPU === "carta") || (mossaUtente === "sasso" && mossaCPU === "forbice")) {
        messggio.innerText = "Hai vinto! 🏆";
    } else if ((mossaUtente === "sasso" && mossaCPU === "carta") || (mossaUtente === "carta" && mossaCPU === "forbice") || (mossaUtente === "forbice") && mossaCPU === "sasso") {

        messggio.innerText = "La CPU ha vinto";
    } else {
        messggio.innerText = "Pareggio";
    }
    
    mostraPulsanteGiocaDiNuovo();
}

// Aggiungo Event listner al bottone

btnGiocaDiNuovo.addEventListener("click", function () {
    btnGiocaDiNuovo.style.display = 'none';

    const messaggio = document.querySelector(".messaggio");
    messaggio.textContent = '';

    const cpuDiv = document.querySelector(".scelta-cpu");
    if (cpuDiv) {
        cpuDiv.textContent = '';
    }
});

function mostraPulsanteGiocaDiNuovo() {
    btnGiocaDiNuovo.style.display = 'block';
}