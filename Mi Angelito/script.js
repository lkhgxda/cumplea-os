const corazones = document.getElementById("corazones");
const flash = document.getElementById("flash");
const music = document.getElementById("music");
const btn = document.getElementById("btnMagico");


/* BOTON MAGICO */

function activarMagia(){

  btn.disabled = true;

  crearLluvia();

  music.play();

  // 5 segundos de corazones
  setTimeout(()=>{

    flashPantalla();

    // Mostrar mensaje
    setTimeout(()=>{
      abrir();
    },800);

  },5000);

}


/* LLUVIA DE CORAZONES */

function crearLluvia(){

  const emojis = ["💜","💖","💕","💘","💝","❤️","🥰","💗"];

  const intervalo = setInterval(()=>{

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (3 + Math.random()*2) + "s";

    corazones.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },5000);

  },70);


  // Parar lluvia
  setTimeout(()=>{
    clearInterval(intervalo);
  },5000);

}


/* FLASH */

function flashPantalla(){

  flash.style.opacity = "1";

  setTimeout(()=>{
    flash.style.opacity = "0";
  },700);

}


/* MODAL MENSAJE */

function abrir(){
  document.getElementById("modal").style.display = "flex";
}

function cerrar(){
  document.getElementById("modal").style.display = "none";
}


/* FOTO MODAL */

function abrirFoto(img, frase){

  document.getElementById("fotoGrande").src = img;
  document.getElementById("fraseFoto").innerText = frase;

  document.getElementById("fotoModal").style.display = "flex";
}

function cerrarFoto(){
  document.getElementById("fotoModal").style.display = "none";
}