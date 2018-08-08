const drawTable = (getDataTable)=>{
  //console.log(getDataTable);
  let tableData = document.getElementById('tableImg');
  let tbody     = document.createElement('tbody');
  let tableRestaurants = '';
  getDataTable.forEach(function(values, index) {
    tableRestaurants += '<tr>' +
                            '<td>' + values.name + '</td>' +
                            '<td>' + values.img + '</td>' +
                            '<td>' + values.raiting + '</td>' +
                            '<td><button type="button" class="btn btn-outline btn-primary" onclick="details(\'' + index + '\');">Ver</button></td>' +
                           '</tr>';
  });
  //console.log(tableRestaurants);
  tableData.innerHTML = tableRestaurants;
};

const details=(idRestaurant)=>{
    loadRestaurantById(idRestaurant)
};
const drawDetailsRestaurant = (InfoDetails)=>{
    //console.log(InfoDetails);
    var modal = document.getElementById('exampleModal');
	modal.classList.add("show");
    modal.style.display = "block";
    let modalBody = document.getElementById('modalBody');
    let container = '<div>'+InfoDetails.name+'</div>'
		   					+'<div>'+InfoDetails.address+'</div>'
                               +'<div>'+InfoDetails.category+'</div>'
                               +'<div>'+InfoDetails.img+'</div>'
                               +'<div>'+InfoDetails.price+'</div>'
                               +'<div>'+InfoDetails.raiting+'</div>';
                            container+='</div>';
    modalBody.innerHTML =container;
}
function closemodal(){
	//console.log('cerrar');
	document.getElementById('modalBody').innerHTML= '';
	var modal = document.getElementById('exampleModal');
	modal.style.display = "none";	
}
const search = ()=>{
    let textSearch = document.getElementById('searchText').value;
    searchByText(textSearch);
    //console.log(textSearch);
}
const orderByFilter = ()=>{
    orderBy();
    //console.log(textSearch);
}