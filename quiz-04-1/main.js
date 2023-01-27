const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {

	const url_string = window.location.href;
	const url = new URL(url_string);
	const page = url.searchParams.get("page") ? url.searchParams.get("page") : 1;
	const limit = url.searchParams.get("limit") ? url.searchParams.get("limit") : 5;
	console.log("url",page,limit);

	const data_length = tours.length
	const startNumber = (page -1) * limit
	const endNumber = page * limit

	console.log("data_length",startNumber,endNumber);




	tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			<th scope="col">Tour ID</th>
			<th scope="col">Name</th>
			<th scope="col">Location</th>
			<th scope="col">Price</th>
			<th scope="col">Group Size</th>
			<th scope="col">difficulty</th>
			<th scope="col">duration</th>
			<th scope="col">Ratings Average</th>
			<th scope="col">Ratings Quantity</th>
		</tr>`;

	let rowCount = 1;
	for (const [index, tour] of tours.entries()) {
		console.log('test', index)
		if (index > startNumber - 1 && index < endNumber) {
			tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;

			rowCount += 1;

		}

	}
};

renderTable();