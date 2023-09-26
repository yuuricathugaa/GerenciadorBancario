class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = parseFloat(saldo);
    }
    
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        }
        return false;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }
    
    sacar(valor) {
        if (this.tipo === "Conta Universitária" && valor <= 500) {
            return super.sacar(valor);
        }
        return false;
    }
}

const contas = [];

document.getElementById("inserirBtn").addEventListener("click", function() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = document.getElementById("saldo").value;
    
    let novaConta;
    
    if (tipo === "Corrente") {
        const cartaoCredito = prompt("Informe o limite do cartão de crédito:");
        novaConta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
    } else if (tipo === "Poupanca") {
        novaConta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === "Universitaria") {
        novaConta = new ContaUniversitaria(agencia, numero, saldo);
    }
    
    contas.push(novaConta);
    alert("Conta inserida com sucesso!");
});

document.getElementById("visualizarBtn").addEventListener("click", function() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";
    
    for (const conta of contas) {
        const item = document.createElement("li");
        item.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.saldo.toFixed(2)}`;
        listaContas.appendChild(item);
    }
});
