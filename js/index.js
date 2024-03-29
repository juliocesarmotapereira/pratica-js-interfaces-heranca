import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("NomeFantasia1", 10000, 12312312300);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("NomeFantasia2", 6000, 45645645600);
gerente.cadastrarSenha("123");

const cliente = new Cliente("NomeFantasia3", 78978978900, "789");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);




// CONTAS
// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupança.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);