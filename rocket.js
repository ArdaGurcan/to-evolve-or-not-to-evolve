// let target;
function strDistance(a,b)
{
    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] != b[i])
            {
                distance++;
            }
        }
    }

    return distance
}
class Word {
    constructor(dna,target) {
        if (dna) {
            this.dna =dna;
        } else {
            this.dna = new DNA(null,target);
        }
        if(target)
        {
            this.dna.target = target;
        }
        this.fitness;
    }

    calcFitness() {
        this.fitness = Math.pow(1/(strDistance(this.dna.genes.join(""), this.dna.target)+1),5)
        totalFitness+=this.fitness
    }
}
