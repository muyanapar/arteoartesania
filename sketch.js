let bg;
let girafas = []
let ite = 1;
let juego_finalizado = 0;
let gracias;
let artes = 0;
let artesanias = 0;
let resultados;
let json = {}; // new  JSON Object

json.id = 0;


function preload(){
    bg = loadImage('imag/bg_resize.jpg')
    gracias = loadImage('imag/Gracias-01.png')

    for (let i=1; i<6; i++){
        girafas[i] = loadImage('imag/Girafa0' + str(i) + '.jpg')
    }
}
function setup(){
    createCanvas(1024, 1024)
    button = createButton(' ');
    button.position(canvas.width/2,512);
    button.style("background","url('imag/Botones-01.png')")
    button.style("padding","14px 65px")
    button.style("display","inline-block")
    button.style("border", "none")

    button_2 = createButton(' ');
    button_2.position(canvas.width/2 + canvas.width/4,512);
    button_2.style("background","url('imag/Botones-02.png')")
    button_2.style("padding","14px 65px")
    button_2.style("display","inline-block")
    button_2.style("border", "none")
}
function draw(){
    background(bg)
    image(girafas[ite], canvas.width/3,50,412,412)
    if (juego_finalizado === 1){
        clear()
        button.style("display","none")
        button_2.style("display","none")
        image(bg, 0,0,1024,2024)
        image(gracias, 0,0);
    }
    button.mousePressed(arte);
    button.mouseReleased(arte_sig)
    button_2.mousePressed(artesania);
    button_2.mouseReleased(artesania_sig);
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
    if (ite < 5){
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