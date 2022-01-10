const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base=5,hasta=10, bandera=false) =>{
    try{   
        let salida='';
        let consola='';

        for(let i=1; i<=hasta; i++){
            salida+= `${base} ${'x'} ${i} ${"="} ${base*i}\n`;
            consola+= `${base} ${'x'.red} ${i} ${"=".magenta} ${base*i}\n`;
        }
        if(bandera){
            console.log("==============================".green);
            console.log('        tabla del:'.yellow ,colors.blue(base)   );
            console.log("==============================".green);
            console.log(consola);
        }
      

        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);

        return(`tabla-${base}.txt`);
    }catch(err){
        return(err)
    }    
}

module.exports ={
    crearArchivo
}