const array = [];

window.onload = function(toLocalStorage) {
    const getInfoGoogle = localStorage.getItem('usuario', JSON.parse(toLocalStorage));
    console.log(getInfoGoogle);

}