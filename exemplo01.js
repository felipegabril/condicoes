//exemplo de condição aninhada
var idade = 19;
console.log(`A sua idade é: ${idade}`);
if(idade < 16){
    console.log('Não vota!');
}else if(idade < 18 || idade >= 65){
    console.log('Voto opcional');
}else{
    console.log('Voto obrigatório');
}

//exemplo de condição multipla 
//0 - domingo ,1- segunda,2- terça,3- quarta, quinta, sexta, sábado
var agora = new Date();
var dia = agora.getDay();
console.log(dia);
switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('segunda');
        break;
    case 2:
        console.log('terca');
        break;
    case 3:
        console.log('quarta');
        break;
    case 4:
        console.log('quinta');
        break;
    case 5:
        console.log('sexta');
        break;
    case 6:
        console.log('sábado');
        break;
    default:
        console.log('Erro: Dia da semana inexistente.')
        break;
}