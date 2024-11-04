let songs = [];
const form = document.getElementById("search-form");
const input = document.getElementById("input");

const searchMusic = async (search) => {
    const url =
    `https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=9`;
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
  container.innerHTML = ""

  hits.map((data) => {
    const title = data.track.title;
    const image = data.track.images.background;

    let htmlCode = ` <div class="track">
            <img src="${image}" alt="" class="w-full object-contain" >
            <h1 class="text-green-600 text-clip-1 w-full truncate font-semibold text-xl mt-3">${title}</h1>
            <button class="bg-green-600 px-12 mt-4 py-2 rounded-sm text-sm text-white font-semibold">Play</button>
         </div>`;

    container.innerHTML += htmlCode;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;

  searchMusic(input.value);
});

const getFreeMusic = async () => {
  const url =
    "https://shazam.p.rapidapi.com/search?term=love%20me&locale=en-US&offset=0&limit=9";
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
