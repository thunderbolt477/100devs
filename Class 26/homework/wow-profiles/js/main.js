//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const name = document.getElementById("name").value;
  const reigon = document.getElementById("reigon").value;
  const realm = document.getElementById("realm").value;
  const currentRaid = "amirdrassil-the-dreams-hope";
  const url = `https://raider.io/api/v1/characters/profile?region=${reigon}&realm=${realm}&name=${name}&fields=raid_achievement_curve:${currentRaid}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log();
      const aotc = data.raid_achievement_curve[0].aotc;
      document.querySelector("h2").innerText = data.name;
      document.querySelector("img").src = data.thumbnail_url;
      if (aotc) {
        document.querySelector("h3").innerText = "YES";
      } else {
        document.querySelector("h3").innerText = "NO";
      }
      // document.querySelector("h3").innerText = data.raid_achievement_curve[0];
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
