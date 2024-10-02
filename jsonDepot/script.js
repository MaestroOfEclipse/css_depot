window.onload = () => {
  const deck = document.getElementById("scrollable-deck");
  const addCard = (url) => {
    deck.innerHTML += [
      '<div id="card" class="card flipped" onclick="this.classList.toggle(\'flipped\')">',
      '<div class="card-inner">',
      '<div class="card-front">',
      `<img src="${url}" ` +
        'onerror="this.parentNode.parentNode.parentNode.remove();" ' +
        'onload="var clone=this.parentNode.parentNode.parentNode.cloneNode(true);' +
        "clone.firstElementChild.firstElementChild.firstElementChild.src=this.src.replace(/\\/(\\d+)\\/(\\d+)\\.jpg$/, (m,p1,p2)=>`/${p1}/${++p2}.jpg`);" +
        "clone.firstElementChild.children[1].firstElementChild.innerText=this.parentNode.parentNode.children[1].innerText.replace(/Card (\\d+)/, (match, p1) => `Card ${parseInt(p1) + 1}`);" +
        "this.parentNode.parentNode.parentNode.parentNode.appendChild(clone);" +
        "this.removeAttribute('onerror');this.removeAttribute('onload');\">",
      "</div>",
      '<div class="card-back">',
      '<div class="card-text">Card 1</div>',
      "</div>",
      "</div>",
      "</div>",
    ].join("\n");
  };
  document.getElementById("add-card").addEventListener("click", () => {
    deck.innerHTML = "";
    //addCard("https://dummyimage.com/600x400/000/fff", "Title");
    const DeckID = document.getElementById("DeckID").value;
    if (DeckID) {
      let url = `https://cdn.cartoonporn.to/nhentai/storage/images/${DeckID}/1.jpg`;
      addCard(url);

      document.getElementById("DeckID").value = "";
    } else {
      alert("Please enter a valid image URL.");
    }
  });

  deck.addEventListener("wheel", (event) => {
    event.preventDefault();

    let card = deck.querySelector('div[id="card"]');
    const scrollSpeed = card.getBoundingClientRect().width / 100;

    deck.scrollLeft += event.deltaY * scrollSpeed;
  });

  document.getElementById("scroll-left").addEventListener("click", () => {
    let card = deck.querySelector('div[id="card"]');
    const scrollSpeed = card.getBoundingClientRect().width / 100;
    deck.scrollLeft -= 100 * scrollSpeed;
  });

  document.getElementById("scroll-right").addEventListener("click", () => {
    let card = deck.querySelector('div[id="card"]');
    const scrollSpeed = card.getBoundingClientRect().width / 100;
    deck.scrollLeft += 100 * scrollSpeed;
  });
};
