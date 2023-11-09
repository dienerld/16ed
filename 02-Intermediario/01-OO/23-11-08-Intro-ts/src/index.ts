/*
Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.
*/

type Retorno = {
  media: number;
  aprovado?: boolean;
};

function calcularMedia(numero1: number, numero2: number): Retorno {
  const media = (numero1 + numero2) / 2;

  //   if (media >= 6) {
  //     const result: Retorno = {
  //       media: media,
  //       aprovado: true,
  //     };

  //     return result;
  //   } else {
  //     const result: Retorno = {
  //       media: media,
  //       aprovado: false,
  //     };

  //     return result;
  //   }
  ///////

  /*let aprovado: boolean;
  if (media >= 6) {
    aprovado = true;
  } else {
    aprovado = false;
  }

  return {
    media media,
    aprovado: aprovado,
  };*/

  return { media };
}

console.log(calcularMedia(0, 8));
