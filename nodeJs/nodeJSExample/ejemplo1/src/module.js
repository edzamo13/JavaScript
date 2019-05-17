import readline from 'readline';

import async from './async';
import events from './events';

const file = process.argv[2];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    ` Como quiere leer el fichero?
    1. De forma asicronica
    2. Con eventos
    Selecciones una opcion:  ` ,
    value => {
        console.log(`Seleccione ${value} \n\n`);

        switch (value) {
            case '2':
                events(file);
                break;
            case '2':
            default:
                async(file);
        }

        rl.close();
    }

);
