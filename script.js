let nome;
let idade;  
const pi = 3.1415;

alert ("hello Word!");
confirm ("está gostando do JS?");
nome = prompt ("Qual seu Nome?");
idade = prompt ("qual sua idade?");
document.write("ola, " + nome + " Sua idade é: " + idade + " <br>");
// document.write (`Ola ${nome}  sua idade é ${idade}`);

let nr1 = Number (prompt ("Informe o primeiro número: "));
let nr2 = Number (prompt ("Informe o segundo número: "));

let soma;
soma = nr1 + nr2;
document.write (`O valor da soma é: ${nr1} + ${nr2} = ${soma}`);

// um algoritimo que receba 3 notas (nt1 , nt2 , nt3) 
// calcule a media dessas notas e apresente o resultado

let nt1 = Number (prompt ("informe o primeiro numero: "));
let nt2 = Number (prompt ("informe o segundo numero: "));
let nt3 = Number (prompt ("informe o terceiro numero: "));

let media;

media = (nt1 + nt2 + nt3) /3;
// document.write (`sua media é: ${media} e a nota total é : ${nt1} + ${nt2} + ${nt3}`) esse e o metodo normal eu fiz com if pra ficar mais bonitinho :D

if (media == 6){
    document.write (`sua media é: ${media} e a nota total é : ${nt1} + ${nt2} + ${nt3}  voce esta de recuperaçao boa sorte na proxima`)
} else if (media >= 7) {
    document.write (`sua media é: ${media} e a nota total é : ${nt1} + ${nt2} + ${nt3}  voce esta aprovado parabens`)
} else {
    document.write (`voce esta reprovado boa sorte na proxima vez`)
}