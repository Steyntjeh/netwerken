$(document).ready(function() {

    // URL to fetch the pokemons from PokeAPI
    let pokeUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

    $.ajax({
        url: pokeUrl,
        type: 'GET',
        success: function(response) {
            console.log(response.results);

            $.each(response.results, function(i, item) {
                
                    //console.log(item);
                    console.log(item.url);

                    var pokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + '"';

                    $(".pokemon").append('<div class="card">' + '<img src="' + pokemonImage + '">' + '<p><a href="detail.html">' + item.name +'</a></p></div>')
               // })
            }
        )}
    })

})