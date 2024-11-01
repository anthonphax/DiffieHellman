import net from 'net';
import readline from 'readline';
import chalk from 'chalk';

console.log(chalk.green('Iniciando o cliente...'));

const client = net.createConnection({ port: 3000 }, () => {
    console.log(chalk.green('Conectado ao servidor.'));
});

client.on('data', (data) => {
    console.log("aqui ficam os dados recebidos")
});

client.on('end', () => {
    console.log(chalk.red('Desconectado do servidor.'));
});

client.on('error', (err) => {
    console.error(chalk.red(`Erro: ${err.message}`));
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log("aqui ficam os dados enviados")

    });

function diffieHellman() {
    
    // gerar num_primo();
    // gerar raíz_primitiva(num_primitivo);

    const q = 353; // raíz primitiva
    const a = 3; // num_primo


    let chave_alice = calcularChaveSecreta();
    let chave_bob = calcularChaveSecreta();

    key_exchange_1(g, p, PubA);

    key_exchange(PubB);


}
function raiz_primitiva(num_primo) {
  const phi = p - 1;
  const factors = [];
  const numFactors = factorize(phi, factors);

  console.log(`Primitive roots of ${p} are:`);
  for (let g = 2; g < p; g++) {
    if (isPrimitiveRoot(g, p, phi, factors, numFactors)) {
      console.log(g);
    }
  }
}

function powerMod(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp >>= 1;
    base = (base * base) % mod;
  }
  return result;
}

function mdc(a, b) { //minimo divisor comum
  return b === 0 ? a : gcd(b, a % b);
}

function factorize(n, factors) {
  let i = 0, d = 2;
  while (n > 1) {
    if (n % d === 0) {
      factors[i++] = d;
      while (n % d === 0) {
        n /= d;
      }
    }
    d++;
  }
  return i;
}

function isPrimitiveRoot(g, p, phi, factors, numFactors) {
  for (let i = 0; i < numFactors; i++) {
    if (powerMod(g, phi / factors[i], p) === 1) {
      return false;
    }
  }
  return true;
}

findPrimitiveRoots(17);