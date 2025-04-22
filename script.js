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
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const res = await fetch('https://tekoäly.api.url', request)
  const newRes = new Response(res.body, res)
  newRes.headers.set('Access-Control-Allow-Origin', '*')
  return newRes
}
