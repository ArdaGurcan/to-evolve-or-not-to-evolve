let populationSize = 100000;

class Population {
    constructor(_target) {
        this.fittest;
        this.recordFitness=0;
        this.words = [];
        this.size = populationSize;
        this.matingpool;
        this.target = _target
        for (let i = 0; i < this.size; i++) {
            this.words[i] = new Word(null,_target);
        }
    }

    evaluate() {
        this.matingpool = [];
        let maxFitness = 0;
        for (let i = 0; i < this.size; i++) {
            this.words[i].calcFitness();
            let n = this.words[i].fitness;
            if (n > maxFitness) {
                maxFitness = n;
                if (maxFitness > this.recordFitness) {
                    this.recordFitness = maxFitness;
                    this.fittest = this.words[i];
                }
            }
        }
        for (let i = 0; i < this.size; i++) {
            for (
                let j = 0;
                j < (this.words[i].fitness / maxFitness) * 100;
                j++
            ) {
                this.matingpool.push(this.words[i]);
            }
        }

        // console.log(this.matingpool.length);
    }

    selection() {
        let newWords = [];
        if (this.fittest) {
            newWords.push(new Word(this.fittest.dna,this.target));
        }
        for (let i = 0; i < this.size; i++) {
            let parent1 = random(this.matingpool);
            let parent2 = random(this.matingpool);
            let child = parent1.dna.crossover(parent2.dna);
            newWords.push(new Word(child,this.target));
        }
        this.words = newWords;
    }
}
