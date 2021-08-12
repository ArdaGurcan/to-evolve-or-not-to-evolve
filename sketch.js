let population;
let time = 0;
let totalFitness = 0;
let generation = 0;
let allDone = false;
let obstacles;
let populations = [];
function setup() {
    createCanvas(800, 600);
    populations.push(new Population("Arda"));
    populations.push(new Population("Gürcan"));
    populations.push(new Population("Games"));
    populations.push(new Population("Projects"));
    populations.push(new Population("Simulations"));
    // population = new Population("arda");
}

function draw() {
    let complete = true;
    for (let i = 0; i < populations.length; i++) {
        if (
            !populations[i].fittest ||
            populations[i].fittest.dna.genes.join("") != populations[i].target
        ) {
            complete = false;
            totalFitness = 0;

            time++;

            populations[i].evaluate();
            populations[i].selection();
            time = 0;
            generation++;
            // console.log(
            //     "Average Fitness: " + totalFitness / populationSize / Math.pow(10, 1)
            // );
            // console.log("Max Fitness: " + populations[i].recordFitness);
            // console.log("Population Size: " + populationSize);
            // console.log("Generation: " + generation);
            // console.log("Mutation Chance: " + mutationRate * 100 + "%");
            // console.log("Fittest: " + populations[i].fittest.dna.genes.join(""))
        }
    }
    console.log(
        populations[0].fittest.dna.genes.join("") +
            " " +
            populations[1].fittest.dna.genes.join("") +
            "\n" +
            populations[2].fittest.dna.genes.join("") +
            ", " +
            populations[3].fittest.dna.genes.join("") +
            ", " +
            populations[4].fittest.dna.genes.join("") +
            "..."
    );
    if (complete) {
        console.log(generation)
        noLoop();
    }
}
