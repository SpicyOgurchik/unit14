console.log("Let's get this party started!");
const $gifArea = $("#gif");
const $searchInput = $("#search");

$("#remove").on("click", function() {
    $gifArea.empty();
});

function addGif(inp) {
    let result = inp.data.length;
    if (result) {
      let random = Math.floor(Math.random() * result);
      let $gifDiv = $("<div>");
      let $gif = $("<img>", {
        src: inp.data[random].images.original.url,
      });
      $gifDiv.append($gif);
      $gifArea.append($gifDiv);
    }
  }

  $("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let search = $searchInput.val();
    $searchInput.val("");
  
    const d = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: search,
        api_key: "abc"
      }
    });
    addGif(d.data);
  });
