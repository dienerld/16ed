import { Camarote, Normal, Vip } from "./ex1";
import { Imovel, Novo, Velho } from "./ex2";
import { Cachorro, Cavalo, Gato } from "./ex3";
import { Pessoa as PessoaEx4, Universidade as UniversidadeEx4 } from "./ex4";
import { Departamento, Pessoa, Universidade } from "./ex5";

function exercicio1() {
    const camarote = new Camarote(20, 5);

    camarote.imprimirValor();

    const normal = new Normal(8);

    normal.imprimirValor();

    const vip = new Vip(12, 3);

    vip.imprimirValor();
}

function exercicio2() {
    const imovel = new Imovel("rua da alegria 21", 200);

    const velho = new Velho("rua da tristeza", 300, 40);

    const novo = new Novo("rua nova", 200, 3000);

    // imovel.imprimirValor();

    // velho.imprimirValor();

    // novo.imprimirValor();

    console.log(imovel.getEndereco());

    console.log(imovel.endereco);
    imovel.endereco = "novo endereco";
}

// exercicio2();
function exercicio3() {
    const cachorro = new Cachorro(4, "Vira-lata caramelo", 2);
    cachorro.andar();
    const cavalo = new Cavalo(4, "Pé-de-pano", 10);
    cavalo.relinchar();
    const gato = new Gato(4, "Gato de botas", 6);
    gato.miar();
}

// exercicio3();

function exercicio4() {
    const universidade = new UniversidadeEx4('Growdev', 'Campo Bom');
    const pessoa = new PessoaEx4('Gabi', '19/10/2002', universidade)
    pessoa.imprimirInformacoes()
}

// exercicio4();

function exercicio5() {
    const departamento = new Departamento("Secretaria");
    const dpto2 = new Departamento("Departamento 2");
    const dpto3 = new Departamento("Departamento 3");
    const dpto4 = new Departamento("Departamento 4");
    const dpto5 = new Departamento("Departamento 5");
    const universidade = new Universidade('Growdev', 'Campo Bom', [departamento]);

    universidade.adicionarDepartamento(dpto2);
    universidade.adicionarDepartamento(dpto3);
    universidade.adicionarDepartamento(dpto4);
    universidade.adicionarDepartamento(dpto5);

    const pessoa = new Pessoa('Igor', "22/04/2000", universidade, departamento);
    pessoa.imprimirInformacoes();
    console.log(`\n\n\n\n\n\n\n${universidade.departamentos.map((dpto) => `\n${dpto.nome}`)}`);
}

exercicio5();
