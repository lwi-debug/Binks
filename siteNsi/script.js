var element = document.getElementById('clickme');

element.addEventListener('click', function(e){
  e.target.innerHTML = 'bravo chacal';
});
