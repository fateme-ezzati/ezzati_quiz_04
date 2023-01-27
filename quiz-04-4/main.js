const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {

	const url_string = window.location.href;
	const url = new URL(url_string);

	let searchElement = ''
	let searchVal = ''
	let index = ''
	let list = Object.keys(tours[0])

	for (let i = 0; i < list.length; i++) {
		let obj = list[i]
		if (url.searchParams.get(obj)) {
			searchElement = obj
			searchVal = url.searchParams.get(obj)
			index = i
		}
	}

	console.log(searchElement, searchVal)

	
	tableHead.innerHTML = `
		<tr>
		<th scope="col">No.</th>
		${Object.keys(tours[0]).map(item=>{
			return `<th scope="col">${item}</th>`
		}).join('')}
		</tr>`;

	let rowCount = 1;
	for (const tour of tours) {
		tableBody.innerHTML += `
			<tr>
			<th scope="row">${rowCount}</th>
			${Object.values(tour).map(data => { 
				console.log('vall====',Object.values(tour)[index])
				if(searchElement && Object.values(tour)[index] === searchVal){
					return (`<td >${data}</td>`)
				}
				return ''
				 }).join('')
			
			}
			</tr>`;

		rowCount += 1;
	}
};

renderTable();