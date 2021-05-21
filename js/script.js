var spoilers = document.querySelectorAll('.spoiler__article');
  console.log(spoilers.length);
for(let spoiler of spoilers){

  spoiler.addEventListener('click', function(){
    spoiler.querySelector('.article__title img').classList.toggle('toggled');
    spoiler.querySelector('.article__answer').classList.toggle('toggled');
  });
}
