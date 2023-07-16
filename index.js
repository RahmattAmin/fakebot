const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo, perkenalkan nama saya FakeBot, Nama kamu siapa?",
    `Halo ${data?.nama}, Berapa usia kamu...?`,
    `Ohh ${data?.usia}, hobi kamu apa yaa...?`,
    `Aww..., sama dong, aku juga hobinya ${data?.hobi}, btw punya pacar ga...?`,
    `ohhh ${data?.pacar}, ya udah kalo gitu. udahan yah?`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("Silahkan isi jawaban dulu");
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [500]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank U ya ${usersData[0]} udah main di OyeeBot 😊, kali-kali kita main ${usersData[2]} yaa...`;
  jawaban.value = "siyap... Thank Juga...!!";
}

function botEnd() {
  alert(`Terimahasih ${usersData[0]} sudah berkunjung, anda akan di alihkan ke halaman utama.`);
  window.location.reload();
  console.log("botEnd...");
}

function redirInstagram() {
  window.location.href = "https://www.youtube.com/shorts/K6lU4xfZJPc";
}