document.addEventListener("DOMContentLoaded", () => {
  const aikaSlider = document.getElementById("aika");
  const aikaArvo = document.getElementById("aikaArvo");

  // Päivitetään liukusäätimen arvo näytölle reaaliaikaisesti
  aikaSlider.addEventListener("input", function () {
    aikaArvo.textContent = this.value;
  });

  // Kuunnellaan haun painiketta
  document.getElementById("haku").addEventListener("click", () => {
    // Selvitetään käyttääkö käyttäjä jääkaapin sisältöä
    const kaappiValinta = document.querySelector('input[name="jaakaappiSisalto"]:checked')?.value;

    let tuotteet = "";
    let vaihtoehto = "";
    let aikaraja = "";
    let allergiat = "";

    if (kaappiValinta === "yes") {
      tuotteet = document.getElementById("tuote").value.trim();
    } else if (kaappiValinta === "no") {
      vaihtoehto = document.querySelector('input[name="vaihtoehto"]:checked')?.value || "";
      aikaraja = document.getElementById("aika").value;
      allergiat = document.getElementById("allergia").value.trim();
    }

    // Koostetaan kaikki tiedot yhteen objektiin
    const vastaukset = {
      kaytaKaapinSisaltoa: kaappiValinta,
      tuotteet: tuotteet,
      ruokatyyppi: vaihtoehto,
      aikaraja: Number(aikaraja),
      allergiat: allergiat
    };

    console.log("Tallennetut vastaukset:", vastaukset);

    // Tässä kohtaa voidaan lähettää tiedot tekoälylle myöhemmin
    // sendToAI(vastaukset);
  });
});
