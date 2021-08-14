//store city info in an array
let city_store=[];
$.ajax({
	url:'country_info.json',
	type:'get',
	dataType:'json',
	cache:false,
	async:false,
	success:function(data){
		city_store=data.nigeria;
		let nigeria_city_store=data.nigeria;
		for(let i=0;i<nigeria_city_store.length;i++){
			let city=nigeria_city_store[i].fields.city;
			create_cities(city,i);
		}

	}
})
//function to create cities
function create_cities(city,index){
	let option=document.createElement('option');
	option.setAttribute('value',city);
	let optionText=document.createTextNode(city);
	option.appendChild(optionText);
	$(".cities").append(option);
}
