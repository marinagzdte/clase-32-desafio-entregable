import autocannon from "autocannon";
import { PassThrough } from "stream";

function run(url) {
    const buffer = [];
    const outputStream = new PassThrough();

    const inst = autocannon({
        url,
        connections: 100,
        duration: 20
    });

    autocannon.track(inst, { outputStream });

    outputStream.on('data', data => buffer.push(data));
    inst.on('done', function () {
        process.stdout.write(Buffer.concat(buffer));
    });
}

run('http://localhost:8080/info');


