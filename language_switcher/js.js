"use strict";

// Tekstindhold baseret på sprog
const texts = {
  de: {
    header: "Das Bot",
    content: "Dies ist eine einfache Seite zum Sprachenwechsel.",
    footer: "Danke für deinen Besuch",
  },
  da: {
    header: "Båden",
    content: "Dette er en simpel side til at demonstrere sprogomskiftning.",
    footer: "Tak for dit besøg!",
  },
};

// Standard sprog
let locale = "da";

// Funktion til at opdatere sproget på siden
function updateLanguage(lang) {
  document.querySelector(".header").textContent = texts[lang].header;
  document.querySelector(".content").textContent = texts[lang].content;
  document.querySelector(".footer").textContent = texts[lang].footer;
}

// Sæt standard sproget ved indlæsning
updateLanguage(locale);

// Event listener til sprogskift-dropdown
document.getElementById("language-select").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});
