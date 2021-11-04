let bg;
let girafas = []
let ite = 1;
let juego_finalizado = 0;
let gracias;
let artes = 0;
let artesanias = 0;
let resultados;
let json = {}; // new  JSON Object
var w = window.innerWidth;
var h = window.innerHeight;  

json.id = 0;


function preload(){
    bg = loadImage('imag/bg_resize.jpg')
    gracias = loadImage('imag/Gracias-01.png')

    for (let i=1; i<34; i++){
        girafas[i] = loadImage('imag/obra' + str(i) + '.png')
    }
}
function setup(){
    createCanvas(w, h)
    button = createButton(' ');
    button.position(w/3,512);
    button.style("background","url('imag/Botones-01.png')")
    button.style("padding","14px 65px")
    button.style("display","inline-block")
    button.style("border", "none")

    button_2 = createButton(' ');
    button_2.position(w/3 + 270,512);
    button_2.style("background","url('imag/Botones-02.png')")
    button_2.style("padding","14px 65px")
    button_2.style("display","inline-block")
    button_2.style("border", "none")

    button_3 = createButton(' ');
    // Botón de reinicio
    button_3.position(w/6,0);
    button_3.style("background","url('imag/Gracias-01.png')")
    button_3.style("padding","512px 512px")
    button_3.style("display","inline-block")
    button_3.style("border", "none")
    button_3.style("display", "none")
}

function draw(){
    background(bg)
    image(girafas[ite], w/3,50,412,412)
    if (juego_finalizado === 1){
        clear()
        button.style("display","none")
        button_2.style("display","none")
        button_3.style("display","block")
        image(bg, w/5,0,h,w)
    }
    button.mousePressed(arte);
    button.mouseReleased(arte_sig)
    button_2.mousePressed(artesania);
    button_2.mouseReleased(artesania_sig);
    button_3.mousePressed(resetSketch);
}

function resetSketch(){
    ite=1;
    juego_finalizado = 0;
    button.style("display","block")
    button_2.style("display","block")
    button_3.style("display","none")
}

function arte(){
    button.style("background","url('imag/Botones-04.png')")
    button.style("padding","16px 64px")
    artes++
}

function arte_sig(){
    button.style("background","url('imag/Botones-01.png')")
    button.style("padding","14px 65px")
    siguiente_imagen()
}

function artesania(){
    button_2.style("background","url('imag/Botones-03.png')")
    button_2.style("padding","16px 64px")
    artesanias++
}

function artesania_sig(){
    button_2.style("background","url('imag/Botones-02.png')")
    button_2.style("padding","14px 65px")
    siguiente_imagen()
}

function siguiente_imagen(){
    if (ite < 33){
        console.log(ite)
        ite++
    }
    else {
        resultados = 'Arte: ' + artes + '\n Artesanías: ' + artesanias
        juego_finalizado = 1; 
        console.log(resultados)
        json.artes = artes;
        json.artesanias = artesanias;
        // saveJSON(json, 'informe.json');
    }
    redraw()
}