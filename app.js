let info = [];

fetch("/data/3978_standings.json")
  .then((res) => res.json())
  .then(
    (data) => (
      (info = data.standings.stages.stage[0].group[0].entities.entity),
      createHtml(info)
    )
  )
  .catch((err) => console.log(err));

Handlebars.registerHelper("getColor", function (name) {
  if (name == "KXIP") {
    return "linear-gradient(#ea2126, rgba(201, 19, 24, 0.9), #a70409)";
  }
});

function createHtml(info) {
  let rawTemplate = document.querySelector("#teamTemplate").innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let generatedHtml = compiledTemplate(info);
  let post = document.getElementById("team-data");
  post.innerHTML = generatedHtml;
  
}
createHtml();
