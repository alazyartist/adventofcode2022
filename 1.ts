//number of calories
//seperated by newline

//find calorie total for each e
const fs = require("fs/promises");

const checkFile = async () => {
	const data = await fs.readFile("1input.txt", { encoding: "utf8" });
	let newData: any[] = [];
	let currentElf: any[] = [];
	data.split(/\r?\n/).forEach(async (line) => {
		if (line === "") {
			newData.push(currentElf);
			currentElf = [];
			return;
		}
		currentElf.push(parseInt(line));
	});
	const elfMap = newData
		.map((elf, index) => {
			return {
				index: index,
				total: elf.reduce((sum: number, b: number) => sum + b),
			};
		})
		.sort((a, b) => {
			if (a.total > b.total) return -1;
			if (a.total < b.total) return 1;
			return 0;
		});

	console.log(elfMap);
};
checkFile();

//209603 is final anser for part 2 top 3 elves totaled
