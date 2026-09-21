const kataGallery = document.querySelector("[data-kata-gallery]");

if (kataGallery) {
  KATAS.forEach(function (kata) {
    kataGallery.append(KataCards.createKataCard(kata, { root: "." }));
  });
}
