// splash
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 4000);
});
 
 // refreshing
setInterval(function refresh() {
  refresh_news();
  anime_rating();
  character_rating();
},1000);

function refresh_news() {
  var news=document.getElementById('news');
  news.innerHTML='<h3>news</h3><ul><li>'+array_news[0]+'</li><li>'+array_news[1]+'</li><li>'+array_news[2]+'</li></ul>';
}
function anime_rating() {
  var anime_rating=document.getElementById('anime_rating');
  anime_rating.innerHTML='<h3>anime rating</h3><ul><li>'+array_anime_rating[0]+'</li><li>'+array_anime_rating[1]+'</li><li>'+array_anime_rating[2]+'</li></ul>';
}
function character_rating() {
  var character_rating=document.getElementById('character_rating');
  character_rating.innerHTML='<h3>character rating</h3><ul><li>'+array_character_rating[0]+'</li><li>'+array_character_rating[1]+'</li><li>'+array_character_rating[2]+'</li></ul>';
}