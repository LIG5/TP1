var array = [20,5,10,6,8,11,16,13,7,8.5] ; 
let k = 0 ;
let sum = 0  ;
let moy ;
let maxx = 0 ; 
const nbrEtud = 10 ; 

function summoy () {
for(let i = 0 ; i<array.length ; i++){
    if ( array[i] >= 10){
k++ ; }
sum+=array[i] ; 
}
moy = sum/nbrEtud ; 
}



function max () {
for(let i = 0 ; i<array.length ;i++ ){
    maxx = array[i] ;
    if (array[i+1]>maxx)
    maxx = array [i+1] ; 
    console.log(maxx) ; 
}
}

function index () {
    for(let i = 0 ; i<array.length ; i++) {
        var indexx = array[i] ;
        console.log (i) ; 
    }
}