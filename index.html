<!DOCTYPE html>
<html>
<head>
    <title>Gerenciador de Contas Bancárias</title>
</head>
<body>
    <h1>Gerenciador de Contas Bancárias</h1>
    
    <div>
        <h2>Inserir Conta</h2>
        <label for="agencia">Agência:</label>
        <input type="text" id="agencia"><br>
        <label for="numero">Número da Conta:</label>
        <input type="text" id="numero"><br>
        <label for="tipo">Tipo de Conta:</label>
        <select id="tipo">
            <option value="Corrente">Conta Corrente</option>
            <option value="Poupanca">Conta Poupança</option>
            <option value="Universitaria">Conta Universitária</option>
        </select><br>
        <label for="saldo">Saldo:</label>
        <input type="text" id="saldo"><br>
        <button onclick="inserirConta()">Inserir</button>
    </div>
    
    <div>
        <h2>Contas</h2>
        <ul id="listaContas">
        </ul>
        <button onclick="visualizarContas()">Visualizar</button>
    </div>
    
    <script>
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
        
        function inserirConta() {
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
        }
        
        function visualizarContas() {
            const listaContas = document.getElementById("listaContas");
            listaContas.innerHTML = "";
            
            for (const conta of contas) {
                const item = document.createElement("li");
                item.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.saldo.toFixed(2)}`;
                listaContas.appendChild(item);
            }
        }
    </script>
</body>
</html>
