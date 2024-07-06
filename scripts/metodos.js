console.log("%cMètodes %carrays %ci strings", "font-weight: bold; color: red; font-size: 2.5em", "color: blue", "font-family: Arial"); // aplica cada conjunt d'estils de CSS al text a partir de cada %c

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "

// provar metodos trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()
// ! els mètodes d'strings no modifiquen la string, en generen una de nova ⚠

console.log(text.trim());

a = "text"

console.log(a.padStart(10, "-"));
console.log(a.padEnd(10, "-"));
console.log(a.padEnd(10, "-").padStart(20, "-"));
console.log(a.padEnd(a.length + 10, "-").padStart(a.length + 20, "-"));

dni = "12345678A"
console.log("DNI completo: " + dni);
console.log("DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X"));

email = "OmarOlmedoFerrer@Inventado.com"
console.log(email.toLowerCase());
console.log(email.toUpperCase());

console.log("Text original: '" + text + "'");
console.log("Text alterat: '" + text.trim().replace("l'Omar", "el profe") + "'");

alter = text.trim().replace("l'Omar", "el profe");

textAlt = text.trim().replaceAll(" ", "_") // guardo la string amb els espais canviats per guions baixos

console.log("Text sense espais: '" + textAlt + "'");
console.log("Text original: '" + text + "'");

console.log(text.trim().split(" "));

// provar mètodes de cerca indexOf(), includes(), ...With()

nom = "Omar"
console.log(text.indexOf(nom));
console.log(text.slice(text.indexOf(nom)));
console.log(text.slice(text.indexOf(nom), text.indexOf(nom) + nom.length));

console.log(text.includes(nom));
console.log(text.includes("Carlos"));

console.log("Text comença amb 'Aquesta': " + text.trim().startsWith("Aquesta"));
console.log("Text comença amb 'Aquestes': " + text.trim().startsWith("Aquestes"));

console.log("Text acaba amb 'mètodes': " + text.trim().endsWith("mètodes"));
console.log("Text acaba amb 'mètode': " + text.trim().endsWith("mètode"));

// censurar el nom en el text de dalt

censura = "el profe"

console.log("Text normal: " + text);
console.log("Text censurat: " + text.replace(nom, "".padEnd(nom.length, "X")));
console.log("Text censurat: " + alter.replace(censura, "".padEnd(censura.length, "X")));

// TODO: gestionar dades així amb bucles i condicionals (Això pel futur)

data0 = "NOM Omar"
data1 = "COG Olmedo"
data2 = "AGE 33"

data = "NOM Omar COG Olmedo AGE 33"