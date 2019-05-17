import fs from 'fs';


export default file => {

    console.log('Asincrono');
 //   const file = process.argv[2];

    fs.readFile(file, (err, contents) => {
        if (err) {
            return console.log(err);
        }

        const lines = contents.toString().split('\n');

        for (let line of lines) {
            console.log(`Caracteres por linea: ${line.length}`);

        }

        console.log(`Número total de lineas: ${lines.length}`);

    });

    console.log(`fichero seleccionado : ${file}`);
}