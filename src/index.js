function page_loader(){
    const content = document.getElementById("content")
    content.innerHTML = ''
    let div = document.createElement("div")
    div.classList.add("headline")
    content.appendChild(div)
    let div2 = document.createElement("div")
    div2.classList.add("button")
    div2.classList.add("highlight")
    div2.textContent = "home"
    div.appendChild(div2)
    div2 = document.createElement("div")
    div2.classList.add("button")
    div2.textContent = "manu"
    div.appendChild(div2)
    div2.addEventListener("click", manu_loader)
    div = document.createElement("div")
    div.classList.add("cont")
    const h1 = document.createElement("h1")
    h1.textContent = "About"
    div.appendChild(h1)
    div2 = document.createElement("div")
    div2.textContent = "Want some overpriced food stuffed down your throat by a bunch of overpolite waiters? Want to show your date how rich you really are? Dope Stuff is the place for you! Our prices are bad for your heart as well as your wallet."
    content.appendChild(div)
    div.appendChild(div2)
}

function manu_loader(){
    const content = document.getElementById("content")
    content.innerHTML = ''
    let div = document.createElement("div")
    div.classList.add("headline")
    content.appendChild(div)
    let div2 = document.createElement("div")
    div2.classList.add("button")
    div2.textContent = "home"
    div.appendChild(div2)
    div2.addEventListener("click", page_loader)
    div2 = document.createElement("div")
    div2.classList.add("button")
    div2.classList.add("highlight")
    div2.textContent = "manu"
    div.appendChild(div2)
    div = document.createElement("div")
    div.classList.add("cont")
    dish("pizza","https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg", "its a pizza i gusse", "30 shekel", div)
    content.appendChild(div)
}

function dish(name, img, text, cost, element){
    const div = document.createElement("div")
    div.classList.add("dish")
    const food_name = document.createElement("h1")
    food_name.textContent = name
    const image = document.createElement("img")
    image.src = img
    const descript = document.createElement("div")
    descript.textContent = text
    const price = document.createElement("div")
    price.textContent = cost
    div.appendChild(food_name)
    div.appendChild(image)
    div.appendChild(descript)
    div.appendChild(price)
    element.appendChild(div)
}

page_loader()