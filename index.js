function introduction(name) {
 return `Hi, my name is ${name}.`
}
introduction("Daniel");

function introductionWithLanguage(name, language) {
 return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Daniel", "Javascript");

function introductionWithLanguageOptional(name, language = "JavaScript") {
 return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Gracie", "Python"));
//Hello