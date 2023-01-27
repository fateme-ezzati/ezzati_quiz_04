const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');


function sort1(sort){
	if(sort === "name" || sort ==="location" || sort ==="difficulty" ){
		tours.sort((a, b) => a[sort].localeCompare(b[sort]))
	}else{
		tours.sort((a, b) => a[sort] - b[sort])
	}
}

function sort2(sort){
	if(sort === "name" || sort ==="location" || sort ==="difficulty" ){
		tours.sort((a, b) => b[sort].localeCompare(a[sort]))
	}else{
		tours.sort((a, b) => b[sort] - a[sort])
	}
}

const renderTable = () => {

	const url_string = window.location.href;
	const url = new URL(url_string);
	let sort = url.searchParams.get("sort") ? url.searchParams.get("sort") : "NO";
	
	console.log(sort)
	if(sort.includes('-')){
		sort = sort.replace(/-/g, '')
		sort2(sort)
	}else{
		sort1(sort)
	}


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
	for (const tour of tours) {
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
};

renderTable();
