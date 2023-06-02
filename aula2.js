let segundaFeira = Number(1)
let segundaFeir = Number(2)
let terçaFeira = Number(3)
let terçaFeir = Number(4)
let quartaFeira = Number(5)
let quartaFeir = Number(6)
let quintaFeira = Number(7)
let quintaFeir = Number(8)
let sextaFeira = Number(9)
let sextaFeir = Number(0)

let finalPlaca = prompt("Digite aqui o número final de sua placa:")


if((finalPlaca == segundaFeira) || (finalPlaca == segundaFeir)){
alert("Seu dia de rodagem é: Segunda-feira");
}

else if((finalPlaca == terçaFeira) || (finalPlaca == terçaFeir)){
alert("Seu dia de rodagem é: Terça-feira");
}

else if((finalPlaca == quartaFeira) || (finalPlaca == quartaFeir)){
    alert("Seu dia de rodagem é: Quarta-feira");
}

else if((finalPlaca == quintaFeira) || (finalPlaca == quintaFeir)){
    alert("Seu dia de rodagem é: Quinta-feira");
}

else if((finalPlaca == sextaFeira) || (finalPlaca == sextaFeir)){
    alert("Seu dia de rodagem é: Sexta-feira");
}

else 
    {finalPlaca === ""
    alert("Insira um número!")
}

console.log(finalPlaca);