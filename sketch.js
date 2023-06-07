let angulo = 0;
let angleStep = 0.01;

function setup() {
  createCanvas(512, 512);
  background(0);
}

function draw() {
  // Generar tono de gris aleatorio
  let grayscale = random(250);
  
  // Lineas aleatorias
  let x1 = noise(angulo) * width;
  let y1 = noise(angulo + 10) * height;
  let x2 = noise(angulo + 20) * width;
  let y2 = noise(angulo + 30) * height;
  
  // Dibujar línea en tono de gris
  stroke(grayscale);
  
  
  line(x1, y1, x2, y2);
  
  // Actualizar ángulo para la próxima iteración
  angulo += angleStep;
}



