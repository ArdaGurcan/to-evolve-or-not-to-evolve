let mutationRate = 0.01;

class DNA {
    constructor(genes, target) {
        if(target)
        {
            this.target = target;
        }
        if (genes) {
            this.genes = genes;
        } else {
            
            this.genes = [];
            for (let i = 0; i < this.target.length; i++) {
                this.genes[i] = random("ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZabcçdegğhijklmnoöprqsştuüvyxz".split(""));
            }
        }
    }

    crossover(partner) {
        let newGenes = [];
        for (let i = 0; i < this.target.length; i++) {
            if (random() > mutationRate) {
                if (random() > 0.5) {
                    newGenes.push(partner.genes[i]);
                } else {
                    newGenes.push(this.genes[i]);
                }
            } else {
                newGenes.push(random("gprdaücnmesojtiul".split("")));
            }
        }

        return new DNA(newGenes);
    }
}
