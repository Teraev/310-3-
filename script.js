let arr = ['Aleksey' , 'Kartoshka' , 'Margarita' , 'Morrgen' , 'Monica' ]

let name_students  = prompt('')
let idx = arr.indexOf(name_students)

if (idx >= 0) {
    arr.splice(idx, 1)
} else {
    alert('name ' + name_students + ' not found')
}

console.log(arr);






let number = [1 , 2 , false , 'hello' , 24 , 'world' , undefined , null , 'error' , 22]

let quantity = number.indexOf(number)
if (quantity == 5) {
    console.log('good')
} else {
    console.log('bad')
}