// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna(),
    compareDNA(pAequor) {
      let identicalBaseCounter = 0;
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) {identicalBaseCounter += 1}
      }
      console.log( `Specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have ${Math.round((identicalBaseCounter / this.dna.length) * 100)}% DNA in common`)
    }
  }
}

const mutate = (dna) => {
  const randBaseIndex = Math.floor(Math.random() * dna.length);
  let base = dna[randBaseIndex]; 
  let newBase = returnRandBase();
  if (base === newBase) {
    mutate(dna)
  } else {
    dna[randBaseIndex] = newBase
  }
  return dna;
}



let pAeq = pAequorFactory(1, mockUpStrand)

console.log(pAeq);

console.log(pAeq.compareDNA(pAequorFactory(2, mockUpStrand)));




