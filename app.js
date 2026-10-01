function colorHexadecimal(){
    

    let aux = '#';
    let numeros =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    for(let i=0;i<6;i++){

        let n_aleatorio = Math.floor(Math.random()*15);
    
        aux=aux+numeros[n_aleatorio];
       // console.log(aux)
    }
    
    return aux;
}

