//animação, ação, drama, ficção          científica, aventura
//relâmpago mcqueen,     LIVRE,          animação, ação, aventura
//homem-aranha,          12,             ação, fantasia, ficção científica
//procurando nemo,       LIVRE,          aventura, animação, ação
//homem de ferro 1,      12,             ação, ficção científica, drama, aventura
//madagascar,            LIVRE,          ação,aventura
//fuja,                  16,             drama, aventura
//barbie,                12,             drama, aventura
//aladdin,               10,             ação, aventura, ficção cientifíca
//tropa de elite,        16,             ação, aventura, drama
//Free fire,             16,             ação, aventura
 

  let campoIdade;
  let campoFantasia;
  let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAção = createCheckbox("Gosta de ação?");
  campoDrama = createCheckbox("Gosta de drama?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAção = campoAção.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAção, gostaDeDrama);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
  }

function geraRecomendacao(idade, gostaDeAção, gostaDeDrama) {
 
  if (idade >= 12) {
  if (idade >= 16) {
  return "free fire";

  } else {
 
  if (idade >= 12) {
  if(gostaDeAção|| gostaDeDrama) {
  return "Homem aranha";          
  } else{
  return "Procurando Nemo";
  }
  } else {
 
 
  if (gostaDeDrama) {
  return "Madagascar";
  } else {
  return "Homem de ferro";
  }
  }
  }
  } else {
 
 
  if (gostaDeAção) {
  return "Alladin";
  } else {
  return "Relâmpago mcqueen";
  }
  }
  }

