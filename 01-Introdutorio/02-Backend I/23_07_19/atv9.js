/**
 * Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
 */
const velocidade = Number (prompt ("Informe a velocidade de seu carro"))
const velocidadeMaxima = 80

if (velocidade > velocidadeMaxima){
    const limiteExcedido = velocidade - velocidadeMaxima
    const multa = (limiteExcedido * 5)
    alert (`Velocidade excedida, valor da multa: R$ ${multa}`)
}else {
    alert (`Velocidade dentro do limite`)
}
