const letter = {
  a: "alfa	apple	airplane		arbol	abeja",
  b: "bravo	bingo	bus		boca	barco",
  c: "charlie	cat	carrot		casa	cocina",
  d: "delta	dog	duck		doctor	delfin",
  e: "Echo	economy	elephant		estrella	elefante",
  f: "Foxtrot	face	fish		flor	fruta",
  g: "golf	garden	guitar		gato	gallina",
  h: "hotel	happy	horse		hojas	hielo",
  i: "india	idea	iron isla invierno",
  j: "juliett	jacket	jeans		jirafa	jugo",
  k: "kilo	kitchen	ketchup		kilo	koala",
  l: "lima	lake	lamp		lapiz	libro",
  m: "mike	mango	moon		mango	mesa",
  n: "november 	nature	native		noche	nube",
  o: "oscar	orange	ocean		oso	oreja",
  p: "papa	pie	parrot		pato	pelota",
  q: "quebec	queen	quiz		Queso	quimica",
  r: "romeo	rocket	robot		raton	rio",
  s: "sierra	sun	spoon		sombrero	sapo",
  t: "tango 	truck	tiger		tiburon	tambor",
  u: "uniform	umbrella	use		uva	union",
  v: "victor	violin	voice		vaca	vela",
  w: "whiskey	wolf	window		waterpolo	wikipedia",
  x: "xray	xerox	xilophone		xilofono	xiaomi",
  y: "yankee	yogurt	yellow		yunque	yate",
  z: "zulu	zebra	zoo		zapato	zorro",
  ñ: "-	-	-		ñoño	ñandu",
  " ": "<br>"
};

const default_letter = "Not valid character";

function changeAcents(str) {
  const accents = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U"
  };
  return str
    .split("")
    .map((character) => accents[character] || character)
    .join("")
    .toString();
}

function spellText() {
  document.getElementById("outcome_field").innerHTML = "";
  let text = document.getElementById("user-input").value;
  text = changeAcents(text);

  for (let i of text) {
    let outcome = letter[i] || default_letter;
    let indivudualSentence = "";
    indivudualSentence =
      "<b>" + i.toUpperCase() + "</b>" + " as in " + outcome.toUpperCase();
    if (i == " ") {
      indivudualSentence = "<br>";
    }
    let newp = document.createElement("p");
    newp.innerHTML = indivudualSentence;
    document.getElementById("outcome_field").appendChild(newp);
  }
}

let input = document.getElementById("user-input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    spellText();
    document.getElementById("user-input").value = "";
    input.blur(); // hide keyboard when enter is pressed in mobiles
  }
});
