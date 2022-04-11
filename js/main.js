let char = ''
let anime = ''
function getFact(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        document.querySelector('#quote').innerText = quote.quote
        char = quote.character
        anime = quote.anime
        console.log(char, anime)
        document.querySelector('#submit').addEventListener('click', checkAnswer)
    })
}
getFact()
// fetch('http://www.foxinflame.tk/dev/matomari/api/animeWallpaper.php')
//     .then(res => res.json)
//     .then(data => {
//         document.querySelector('img').src = data.url
//     })


animeList = ['https://animethemes.moe/video/SangatsuNoLionS2-ED1-NCBD1080.webm', 'https://animethemes.moe/video/ACCA-OP1-NCBD1080.webm', 'https://animethemes.moe/video/FullmetalAlchemistBrotherhood-OP1.webm', 'https://animethemes.moe/video/ReZero-OP1.webm', 'https://animethemes.moe/video/Toradora-OP1.webm']  

document.querySelector('#refresh').addEventListener('click', getFact)
// document.querySelector('source').src = animeList[Math.floor(Math.random() * animeList.length)]

// document.querySelector('source').src = 'https://animethemes.moe/video/SangatsuNoLionS2-ED1-NCBD1080.webm'

function checkAnswer() {
    console.log(char, anime)
    if(document.querySelector('input').value.toLowerCase() === char.toLowerCase() || document.querySelector('input').value.toLowerCase() === anime.toLowerCase()){
        document.querySelector('#quote').innerText = `CORRECT!! 
                                                    Anime: ${anime}
                                                    Character: ${char}`
    }
    else {
        document.querySelector('#quote').innerText = `NOOOOOO!! 
        Anime: ${anime}
        Character: ${char}`
    }
    document.querySelector('input').value = ''
}   


// $(document).keyup(function (e) {
//     if (e.keyCode == 13) { // enter
//       Search();
//       return false; //you can also say e.preventDefault();
//     }
//   });


//   https://mydb-fafc.restdb.io/rest/people?q={"name": "Joe", "age": 17}