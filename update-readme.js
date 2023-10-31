const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

const { exec } = require('child_process');

// the error is thrown because the command is not recognized
exec("git log --pretty=format:'%h' -n 1", (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	generateReadMe(stdout);
});

function generateReadMe(commitHash) {
	fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
		if (err) throw err;
		const output = Mustache.render(data.toString(), {
			commit: commitHash,
		});
		fs.writeFileSync('README.md', output);
	});
}
