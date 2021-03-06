// Впишите свои регулярки

verify(/ca[rt]/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop"]);

verify(/ferr(et)|(y)|(ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/ (?=\.)| (?=,)| (?=:)| (?=;)/,
  ["bad punctuation ."],
  ["escape the dot"]);

verify(/\w{7,}/,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/[^e]]/,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
yes.forEach(function(s) {
if (!regexp.test(s))
 console.log("Не нашлось '" + s + "'");
});
no.forEach(function(s) {
if (regexp.test(s))
 console.log("Неожиданное вхождение '" + s + "'");
});
}