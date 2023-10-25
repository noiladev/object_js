var elForm = document.querySelector('form')
var elLIst = document.querySelector('.list')

var arr = []
elForm.addEventListener('submit', (e)=>   {
    e.preventDefault()
    console.log('ok');
    var obj = {
        name: e.target.phone.value,
        url: e.target.url.value,
        price: e.target.price.value
    }
    arr.push(obj)
    fn(arr)
} )


function fn(arr)  {
    elLIst.innerHTML = ''
    for (var i =0; i < arr.length; i++)  {
        let newli = document.createElement('li')
        newli.innerHTML = `  <img src="${arr[i].url}" alt="">  <h2>${arr[i].name}</h2>  <h5><b>${arr[i].price}</b></h5> `
        elLIst.appendChild(newli)
        newli.style.display = 'block'
        console.log(arr[i]);
    }
}


console.log('2-hometask');
var date = new Date()
yil = date.getFullYear()
oy = date.getMonth()
kun = date.getDay

console.log();