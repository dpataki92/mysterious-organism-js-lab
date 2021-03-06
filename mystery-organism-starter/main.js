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
    },
    willLikelySurvive() {
      let goodBaseCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'G' || this.dna[i] === 'C') {goodBaseCounter += 1}
      }
      return Math.round((goodBaseCounter / this.dna.length) * 100) >= 60 ? true : false;
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

const instancesToSurvive = () => {
  let arr = [];
  for (let i = 0; arr.length != 30; i++) {
    let pAeq = pAequorFactory(i, mockUpStrand);
    if (pAeq.willLikelySurvive()) {
      arr.push(pAeq);
    }
  }
  return arr;
}





