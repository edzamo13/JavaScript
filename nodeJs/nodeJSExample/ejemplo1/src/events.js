
import fs from 'fs';
import readline from 'readline';


export default file => {

    console.log('Eventos');
    // const file = process.argv[2];
    let lines = 0;

    console.log(`Fichero seleccionado: ${file} \n`);

    const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity
    });

    rl.on('line', line => {
        ++lines
        console.log(`Ǹumero total de caracteres por linea: ${line.length}`)
    });

    rl.on('close', () => console.log(`Numero total de lineas: ${lines}`));

}