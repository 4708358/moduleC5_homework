const number1 = document.querySelector('.number1');
const number2 = document.querySelector ('.number2');
const btnNode = document.getElementById('btn');
const content = document.querySelector('.content');
let url_response = '';
if (localStorage.getItem('vstavka')) {
		content.innerHTML = localStorage.getItem('vstavka');
	}
function validnost (indata) {
	let indata_number = Number(indata.value);
	if ((indata_number > 0)&&(indata_number < 11)&&(Number.isFinite(indata_number))) {
		return true;
	}
	else {
		return false;
	}

}
function f3(){

	const validnost1 = validnost(number1);
	const validnost2 = validnost(number2);
	if ((validnost1) && (validnost2)) {
		alert ('данные заданы верно');
		fetch (`https://picsum.photos/v2/list?page=${number1.value}&limit=${number2.value}`)
			.then ((response) => {
				return response.json();})
			.then ((data) => {
				console.log (data);
				function displayresult (argument) {
					let cards = '';
					argument.forEach (item => {
						const card =`<div class="card"><img src="${item.download_url}" class="card-image"> <p>${item.author}</p> </div>`;
						cards = cards + card;
					});
					content
					.innerHTML = cards;
					localStorage.setItem ('vstavka', cards);
					console.log(localStorage.getItem('vstavka'));
					}
				displayresult(data);

				})
			.catch ((error) => {console.log('error1', error)});
	}
	else {
		if (!(validnost1) && !(validnost2)){
			const label_text1 = document.querySelector(`[for="${number1.id}"]`).textContent;
			const label_text2 = document.querySelector(`[for="${number2.id}"]`).textContent;
			alert(`${label_text1} и ${label_text2} вне диапазона от 1 до 10`);
		}
		else{
			if (!(validnost1)){
			const label_text1 = document.querySelector(`[for="${number1.id}"]`).textContent;
			alert(`${label_text1} вне диапазона от 1 до 10`);
			}
			else {
				const label_text2 = document.querySelector(`[for="${number2.id}"]`).textContent;
				alert(`${label_text2} вне диапазона от 1 до 10`);
			}
		}
	}

}
btnNode.addEventListener("click", f3); 







