let pageCounter = 1;
const animalContainer = $("#animal-info");
const btn = $("#btn");

btn.on("click", () => {
  $.ajax({
    url: `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`,
    method: "GET",
    success: (data) => {
      renderHTML(data);
      pageCounter++;
      if (pageCounter > 3) {
        btn.addClass("hide-me");
      }
    },
    error: (data) => {
      console.log("We connected to the server, but it returned an error.");
    },
  });
});

function renderHTML(data) {
  let htmlString = "";
  data.forEach(function (animal) {
    htmlString += `<p>${animal.name} is a ${animal.species} that likes to eat`;
    animal.foods.likes.forEach(function (like, index) {
        htmlString += index === 0 ? like : `and ${like}`
    });
    htmlString += ' and dislikes '
    animal.foods.dislikes.forEach(function (dislike, index) {
        htmlString += index === 0 ? dislike : `and ${dislike}`
    });
    htmlString += '.</p>'
  });
    animalContainer.append(htmlString);
}

