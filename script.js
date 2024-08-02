let card = document.querySelector('div')

fetch('https://jsonplaceholder.typicode.com/todos')

.then((res)=> res.json())
.then((data) => {
    console.log(data);

    for(item of data){
        card.innerHTML += `
        <div> 
        
        <h1>${item.title}</h1>
        <p>${item.id}</p>
        </div>`
    }
})
   