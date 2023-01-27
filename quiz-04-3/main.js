const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {

	const url_string = window.location.href;
	const url = new URL(url_string);
	const fields = url.searchParams.get("fields") ? url.searchParams.get("fields") : "";


	let removedList = []

	if (!!fields) {

		let fieldsArry = fields.split(',');
		let len = fieldsArry.length;


		for (let i = 0; i < len; i++) {

			if (fieldsArry[i].includes('-')) {
				removedList.push(fieldsArry[i].replace(/-/g, ''));
			}
		}

	}

	console.log(Object.values(tours[0]),removedList)


	if (removedList.length) {

		for (let i = 0; i < tours.length; i++) {
			let obj = tours[i];

			for (let j = 0; j < removedList.length; j++) {

				let element = removedList[j];
				// delete tours[i][element];

				console.log("re",tours[i][element])
			}
		}
	}



	tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			${Object.keys(tours[0]).map(item=>{
				return `<th scope="col">${item}</th>`
			}).join('')}
			
		</tr>`;

	let rowCount = 1;
	for (const tour of tours) {
		console.log('test',tour)
		tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				${Object.values(tour).map(data => { return (`<td >${data}</td>`) }).join('')}
			</tr>`;

		rowCount += 1;
	}
};

renderTable();