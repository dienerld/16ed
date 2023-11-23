import { Aluno } from "./aluno";

const alunos: Aluno[] = [
    new Aluno("José", 20),
    new Aluno("Cuopoi", 15),
    new Aluno("Gains", 25),
    new Aluno("Hupunsio", 50),
    new Aluno("Cawal", 30),
    new Aluno("Heolihes", 22),
    new Aluno("Barateborn", 70),
    new Aluno("Elborn", 99),
];

alunos[0].realizarProva();

alunos.forEach((aluno) => {
    aluno.realizarProva();
    console.log(aluno.toJson());
});
