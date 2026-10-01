const kataGallery = document.querySelector("[data-kata-gallery]");

function shuffleKatas(katas) {
  const shuffledKatas = katas.slice();

  for (let index = shuffledKatas.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentKata = shuffledKatas[index];

    shuffledKatas[index] = shuffledKatas[randomIndex];
    shuffledKatas[randomIndex] = currentKata;
  }

  return shuffledKatas;
}

if (kataGallery) {
  shuffleKatas(KATAS).forEach(function (kata) {
    kataGallery.append(KataCards.createKataCard(kata, { root: "." }));
  });
}
