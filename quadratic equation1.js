const a = 1; b = 5; c = 6;  // stands for x**2 - 6*x + 9 = 0
let solutionA = 0
let solutionB = 0
solutionA = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
solutionB =  (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
console.log(solutionA, solutionB)