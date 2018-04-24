window.onload = function() {
    const getDataLocalStorage = localStorage.getItem('profileUserStorage')
    const parsedData = JSON.parse(getDataLocalStorage);
    //console.log(parseData);

    const gettingData = (parsedData) => {
        let divProfileForm = document.getElementById('profileDataForm');
        let output;
        let nodeList = Array.from(document.querySelectorAll('.form-control'))
        console.log(nodeList)
        parsedData.keys((key, indx) => {
            console.log(key)
            nodeList[indx].value = parsedData[key]

            output = `<div class="card">
            <div class="card-header">
                Info del usuario
            </div>
            <div class="card-body">
                <h5 class="card-title">${node[indx]}</h5>
                <p class="card-text">${node[indx]}</p>
                <p class="card-text">${node[indx]}</p>
            </div>`

        });
        divProfileForm.innerHTML = output;

    };
    
};

