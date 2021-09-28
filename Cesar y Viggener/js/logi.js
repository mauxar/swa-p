var cesar = cesar || (function() {
    var proceso = function (txt, desp, action) {
        var replace = (function() {
            //En el cuerpo principal de la función del «llamado»
            //debemos empezar a definir los elementos necesarios
            //para el cifrado:
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l = abc.length;
            //Debemos devolver la posición del caracter.
            return function(c) {
                //Variable para iterar en el arreglo del abecedario.
                var i = abc.indexOf(c.toLowerCase());
                //Asegurarse que esté dentro del rango.
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        //Cifrar (avanzar).
                        pos += desp;
                        //Nuestro límite es el tamaño del «abc»; por lo tanto,
                        //debemos dar vueltas, como Winnie Pooh, sobre el mismo tamaño.
                        pos -= (pos >= l)?l:0;
                    } else {
                        //Descifrar (retroceder).
                        pos -= desp;
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];
                }
                 ///Devolver el caracter o la posición del caracter.
                return c;
            };
        })();
        //El abecedario necesita una expresión regular.
        var re = (/([a-z])/ig);
        //«alert (re)».
        //Esta es la función que se encarga del reemplazo
        //acorde a la posición obtenida respecto al caracter
        //para recorrer al abecedario.
        return String(txt).replace(re, function (match) {
            return replace(match);
        });
    };

    //Hay que definir la acción a realizar en el algoritmo.
    return {
            encode: function(txt, desp) {
            return proceso(txt, desp, true);
        },
            decode: function(txt, desp) {
            return proceso(txt, desp, false);
        }
    };
})();

//Ahora realizaremos la función correspondiente.
//Codificar (cifrar)
function cifrar(){
    document.getElementById("resultad").innerHTML = 
    cesar.encode(document.getElementById("cadena").value, 3);
}

//Decodificar (descifrar)
function descifrar(){
    document.getElementById("resultad").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, 3);
}
