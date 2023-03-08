function DNAtoRNA(dna) {
  return dna.toUpperCase().replaceAll("T", "U")
}

console.log(DNAtoRNA("gcast"))