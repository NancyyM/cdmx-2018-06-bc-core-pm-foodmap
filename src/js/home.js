let url = '../data/data.json'
window.onload = () => { //al momento que carga ejecuta la func fetch con la url
    fetch(url)
      .then(response => response.json()) //la respuesta se parsea a json
      .then(dataJson => {
        loadTable(dataJson);// al momento de cargar la pagina va a ejecutar la funcion pasandole el parametro
      })
      .catch(error => {
        console.log(error);
      });
  };
  window.loadTable = (dataJson) => {
    console.log(dataJson);
    let infoTable = {};
    const dataReturn = [];
    for (let key in dataJson) {
        console.log(key);
        infoTable = {'name':dataJson[key].name,'img':dataJson[key].img,'raiting':dataJson[key].raiting}
        
        dataReturn.push(infoTable);
        
    }
    drawTable(dataReturn);
    //console.log(dataReturn);
  };
  window.loadRestaurantById = (idRestaurant) => {
    //console.log(dataJson);
    fetch(url)
      .then(response => response.json()) //la respuesta se parsea a json
      .then(dataJson => {
        let infoRestaurant = {};
        for (let key in dataJson) {
            console.log(key);
            if(idRestaurant === key){
                infoRestaurant = {'name':dataJson[key].name,
                                    'address':dataJson[key].address,
                                    'category':dataJson[key].category,
                                    'img':dataJson[key].img,
                                    'price':dataJson[key].price,
                                    'raiting':dataJson[key].raiting,
                                }
                drawDetailsRestaurant(infoRestaurant);
            }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  window.searchByText= (textSearch) => {
    fetch(url)
      .then(response => response.json()) //la respuesta se parsea a json
      .then(dataJson => {
        let infoRestaurant = {};
        const dataSearch = [];
        cont = 0;
        if(textSearch === ''){
            loadTable(dataJson);
        }else{
            for (let key in dataJson) {
                //console.log(textSearch+' = '+dataJson[key].name);
                if(textSearch == dataJson[key].name || textSearch == dataJson[key].category){
                    infoSearch = {'name':dataJson[key].name,
                                        'address':dataJson[key].address,
                                        'category':dataJson[key].category,
                                        'img':dataJson[key].img,
                                        'price':dataJson[key].price,
                                        'raiting':dataJson[key].raiting,
                                    };
                    dataSearch.push(infoSearch);
                    //console.log(dataSearch)
                    drawTable(dataSearch);
                    cont++; 
                }
            }
            if(cont===0){
                alert('No se encontraron coincidencias con la busqueda');
            }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  window.orderBy = (dataJson) => {
    fetch(url)
    .then(response => response.json()) //la respuesta se parsea a json
    .then(dataJson => {
        let infoTable = {};
        const dataReturn = [];
        for (let key in dataJson) {
            console.log(key);
            infoTable = {'name':dataJson[key].name,'img':dataJson[key].img,'raiting':dataJson[key].raiting}
            
            dataReturn.push(infoTable);
            
        }
        dataReturn.sort(orderbyName);
    })
    .catch(error => {
        console.log(error);
    });   
  };
  window.orderbyName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  };