process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    const { cwd } = require('node:process');
    process.stdout.write({ cwd });
    process.stdoout.write('\nprompt > ');

    console.log(`Current directory: ${cwd()}`);
});