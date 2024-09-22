console.log("Generador de dominios");

let pronouns = ["the", "our"];
let adjetives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];
let domainHacks = [
    { hack: ".es", replace: "es" },
    { hack: ".to", replace: "to" },
    { hack: ".on", replace: "on" },
    { hack: ".it", replace: "it" },
    { hack: ".me", replace: "me" }
]; 

pronouns.forEach(pronoun => {
  adjetives.forEach(adjective => {
    nouns.forEach(noun => {
      extensions.forEach(extension => {
        console.log(`${pronoun}${adjective}${noun}${extension}`);
      });

      domainHacks.forEach(({hack, replace}) => {
        let domainHackName = `${pronoun}${adjective}${noun}`;
        let newDomain = domainHackName.replace(replace, '') + hack;
        console.log(newDomain);
      });
    });
  });
});