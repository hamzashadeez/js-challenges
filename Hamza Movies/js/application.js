let songs = [];
const form = document.getElementById("search-form");
const input = document.getElementById("input");

const searchMusic = async (search) => {
  const url = `https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=9`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1a8fbded2dmsh353a939f0290138p1f5a26jsn1391347e2ecd",
      "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    songs = result?.tracks?.hits;
    console.log(songs);
    showMusicOnPage(songs);
  } catch (error) {
    console.error(error);
  }
};

const showMusicOnPage = (hits) => {
  // hits variable is an array data type
  const container = document.querySelector("#music-container");
  container.innerHTML = "";

  hits.map((data) => {
    const title = data.track.title;
    const image = data.track.images.background;
    // create main div -- track
    const div = document.createElement("div");
    div.classList.add("track");
    // create an image
    const img = document.createElement("img");
    img.src = image;
    img.classList.add(..."w-full object-contain".split(" "));

    // create a h1 element for the title
    const h1 = document.createElement("h1");
    h1.classList.add(
      ..."text-green-600 text-clip-1 w-full truncate font-semibold text-xl mt-3".split(
        " "
      )
    );
    h1.textContent = title;

    // create button
    const button = document.createElement("button");
    button.classList.add(
      ..."bg-green-600 px-12 mt-4 py-2 rounded-sm text-sm text-white font-semibold".split(
        " "
      )
    );
    button.innerText = "Play";
    button.addEventListener("click", () => {
      const audio = new Audio(data.track.hub?.actions[1].uri);
      audio.play();
    });

    // append html elements
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(button);

    container.appendChild(div);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;

  searchMusic(input.value);
});

const getFreeMusic = async () => {
  const url =
    "https://shazam.p.rapidapi.com/search?term=yusuf%20islam&locale=en-US&offset=0&limit=9";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1a8fbded2dmsh353a939f0290138p1f5a26jsn1391347e2ecd",
      "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    songs = result?.tracks?.hits;
    console.log(songs);
    showMusicOnPage(songs);
  } catch (error) {
    console.error(error);
  }
};

window.onload = () => {
  getFreeMusic();
};
