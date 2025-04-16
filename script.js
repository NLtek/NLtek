document.getElementById("haku").addEventListener("click", () => {
  const kaappiValinta = document.querySelector('input[name="jaakaappiSisalto"]:checked')?.value;

  let tuotteet = "";
  let vaihtoehto = "";

  if (kaappiValinta === "yes") {
    tuotteet = document.getElementById("tuote").value.trim();
  } else if (kaappiValinta === "no") {
    vaihtoehto = document.querySelector('input[name="vaihtoehto"]:checked')?.value || "";
  }

  // Nämä haetaan aina riippumatta kyllä/ei -valinnasta
  const aikaraja = document.getElementById("aika").value;
  const allergiat = document.getElementById("allergia").value.trim();

  const vastaukset = {
    kaytaKaapinSisaltoa: kaappiValinta,
    tuotteet: tuotteet,
    ruokatyyppi: vaihtoehto,
    aikaraja: Number(aikaraja),
    allergiat: allergiat
  };

  console.log("Tallennetut vastaukset:", vastaukset);
});
