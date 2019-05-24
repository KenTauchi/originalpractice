'use strict';

const num = 5;
const rand = Math.floor(Math.random() * num); 
const result = document.getElementById('button');
const div = document.createElement('div');

if (rand === 0) {
	div.dataset.result = 'yoshi'
} else if (rand === 1) {
	div.dataset.result = 'kenny'
} else if (rand === 2) {
	div.dataset.result = 'tetsuya'
} else if (rand === 3) {
	div.dataset.result = 'jun'
} else if (rand === 4) {
	div.dataset.result = 'eiichi'
} 
result.addEventListener('click', function (){
	if (div.dataset.result === 'yoshi') {
		div.classList.add("yoshi", "contain");
	} else if (div.dataset.result === "kenny") {
		div.classList.add("kenny", "contain");
	} else if (div.dataset.result === 'tetsuya') {
		div.classList.add("tetsuya", "contain");
	} else if (div.dataset.result === 'jun') {
		div.classList.add("jun", "contain");
	} else if (div.dataset.result === 'eiichi') {
		div.classList.add("eiichi", "contain");
	}

	document.body.appendChild(div);
})
