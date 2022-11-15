/* let num = [5, 8, 2, 9, 3]
num.push(1) 
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */

let valores = [8, 3, 7, 4, 2, 9]
valores.push(1)
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(8)
if (pos == -1){
    console.lo ('O valor não foi encontrado!')
} else {
    console.log(`O valor escolhido(8) esta na posição ${pos}`)
}

/* VETOR NA TELA */

/* for(let pos=0; pos < valores.length; pos++) {
    
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */ 

/* for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */