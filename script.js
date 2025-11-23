// Yazılacak metinler
const phrases = [
  'Hoş geldin Ulaş Başaran!',
  'Baso...',
  'İnternette gördüğünüz her şeye inanmayın.',
  '03.04.2021',
  'İnternette Porno aratın!',
    'Devam etmek için çıkacak olan butona tıklayın.',
];

document.addEventListener('DOMContentLoaded', () => {

  const target = document.getElementById('typed');


  const typeSpeed = 80;
  const deleteSpeed = 50;
  const pauseAfter = 1000;
  const pauseBetween = 500;

  // --- BUTON OLUŞTUR ---
  const btn = document.createElement("button");
  btn.textContent = "Devam Et";
  btn.className = "action-btn";
  document.querySelector(".hero").appendChild(btn);

  // Tıklanınca başka sekme aç
  btn.addEventListener("click", () => {
    window.location.href = "giris.html";
    // Buraya yönlendirmek istediğin linki yaz
  });

  // ------------------- Yazı Animasyonu -------------------
  function wait(ms){ return new Promise(res => setTimeout(res, ms)); }
  function randomJitter(max){ return Math.floor(Math.random() * max); }

  async function typeAndDelete(text){
    for(let i=1; i <= text.length; i++){
      target.textContent = text.slice(0, i);
      await wait(typeSpeed + randomJitter(20));
    }
    await wait(pauseAfter);
    for(let i = text.length; i >= 0; i--){
      target.textContent = text.slice(0, i);
      await wait(deleteSpeed + randomJitter(15));
    }
    await wait(pauseBetween);
  }

  // ------------------- Ana Döngü -------------------
  (async function loop(){
    for (let i = 0; i < phrases.length; i++){
      await typeAndDelete(phrases[i]);
    }

    // SON YAZI BİTTİ — BUTONU GÖSTER
    btn.classList.add("show");
  })();

});