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

	let bottomTextBox = document.createElement('div');
	bottomTextBox.classList.add('bottomText');
	let bottomTextText = document.createElement('p');

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

	topTextText.innerText = topTextInput.value;
	bottomTextText.innerText = bottomTextInput.value;

	imgInput.value = '';
	topTextInput.value = '';
	bottomTextInput.value = '';

	let relFontsize = memeWrap.offsetWidth * 0.05;
	topTextBox.style.fontSize = relFontsize + 'px';
	bottomTextText.style.fontSize = relFontsize + 'px';
});

output.addEventListener('click', function(e) {
	let clickedItem = e.target;
	if (clickedItem.classList.contains('delete')) {
		clickedItem.parentNode.remove();
	}
});
