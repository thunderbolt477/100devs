// document.querySelector("#selection").addEventListener('click', makeReq )

// async function makeReq() {
//     const choice = document.querySelector("#guess").value;
//     const res = await fetch(`/api?choice=${choice}`)
//     const data = await res.json()

//     console.log(data);
//     document.querySelector("#results").textContent = data.result

// }


document.querySelector("#selection").addEventListener('click', makeReq);

async function makeReq() {
    const choice = document.querySelector("#guess").value;
    const res = await fetch(`/api?guess=${choice}`);
    const data = await res.json();
    console.log(data);
    document.querySelector("#results").textContent = data.result;
}
