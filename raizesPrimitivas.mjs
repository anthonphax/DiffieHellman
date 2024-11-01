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

function gcd(a, b) {
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

function findPrimitiveRoots(p) {
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

// Exemplo de uso:
findPrimitiveRoots(17);	