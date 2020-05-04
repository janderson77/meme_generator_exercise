flexFont = function() {
	var divs = document.getElementsByClassName('meme');
	for (var i = 0; i < divs.length; i++) {
		var relFontsize = divs[i].offsetWidth * 0.05;
		divs[i].style.fontSize = relFontsize + 'px';
	}
};

window.onload = function(event) {
	flexFont();
};
window.onresize = function(event) {
	flexFont();
};

//I found the flexFont function from https://codepen.io/aknip/pen/GpGevp

const form = document.querySelector('form');
const imgInput = document.querySelector('#memeInput');
const output = document.querySelector('#output');
const topTextInput = document.querySelector('#topText');
const bottomTextInput = document.querySelector('#bottomText');
const deleteButton = document.querySelectorAll('.delete');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	let memeWrap = document.createElement('div');
	memeWrap.classList.add('meme');

	let meme = document.createElement('img');
	meme.src = imgInput.value;

	let topTextBox = document.createElement('div');
	topTextBox.classList.add('topText');
	let topTextText = document.createElement('p');
	topTextText.innerText = topTextInput.value;

	let bottomTextBox = document.createElement('div');
	bottomTextBox.classList.add('bottomText');
	let bottomTextText = document.createElement('p');
	bottomTextText.innerText = bottomTextInput.value;

	let deleteButton = document.createElement('button');
	deleteButton.classList.add('delete');
	deleteButton.innerText = 'Delete';

	output.appendChild(memeWrap);
	memeWrap.appendChild(meme);
	memeWrap.appendChild(topTextBox);
	memeWrap.appendChild(bottomTextBox);
	topTextBox.appendChild(topTextText);
	bottomTextBox.appendChild(bottomTextText);
	memeWrap.appendChild(deleteButton);

	imgInput.value = '';
	topTextInput.value = '';
	bottomTextInput.value = '';

	flexFont();
});

output.addEventListener('click', function(e) {
	let clickedItem = e.target;
	if (clickedItem.classList.contains('delete')) {
		clickedItem.parentNode.remove();
	}
});
