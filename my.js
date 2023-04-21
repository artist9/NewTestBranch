function* genatesequence() {
	yield 1;
	yield 2;
	return 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(one); // {value: 1, done: false}



