import { gabarito } from "./gabarito";

enum StatusProva {
    Aprovado = "Aprovado",
    Reprovado = "Reprovado", //2
}

export class Aluno {
    public nota: number;
    public status: StatusProva;

    constructor(public nome: string, public idade: number) {
        this.nota = 0;
        this.status = StatusProva.Reprovado;
    }

    public realizarProva() {
        // Para cada item do gabarito...
        // sortear uma resposta
        // se acertou, 1 ponto
        // no final, se 6 pontos ou mais, aprovado
        // se nao, reprovado

        // 0,15684654  1,56654987
        // 0,55684654  5

        this.nota = 0;
        this.status = StatusProva.Reprovado;

        gabarito.map((item) => {
            if (item === this.gerarResposta()) {
                this.nota += 1;
            }
        });

        if (this.nota >= 6) {
            this.status = StatusProva.Aprovado;
        }
    }

    private gerarResposta(): string {
        const numberSort = Math.floor(Math.random() * 10) % 3;

        let letterSort = "";

        switch (numberSort) {
            case 0:
                letterSort = "A";
                break;

            case 1:
                letterSort = "B";
                break;

            case 2:
                letterSort = "C";
                break;
        }

        return letterSort;
    }

    public toJson() {
        // let status =
        //     this.status === StatusProva.Aprovado ? "Aprovado" : "Reprovado";

        return {
            nome: this.nome,
            nota: this.nota,
            status: this.status,
        };
    }
}
