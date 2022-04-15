/* Täällä vastaanotetaan lomakkeelta tiedot, lähtetetään
tiedot käsiteltäviksi ja vastaanotetaan JSON-tiedot.*/
$("#form").submit(function (e) {
    $("#list").empty();
    e.preventDefault();
    var data = new FormData(e.target);
    var value = Object.fromEntries(data.entries());
    // Ajax-metodissa määritetään lähetyksen.
    $.ajax({
        type: 'GET',
        url: '/dictionary',
        data: { "value": value.word },
        // Vastaanotetaan JSON-tiedosto ja lisätään teidot listaan.
        success: function (json) {
            var data = JSON.parse(json);
            var results = data.results[0].lexicalEntries
            results.forEach(obj => {
                $("#list").append('<div class="list-group-item list-group-item-action flex-column align-items-start active">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h3 class="mb-1">' + obj.text + '</h3>' +
                    '<p class="h5">' + obj.lexicalCategory.text + '</p></div>' +
                    '<p>Definition: ' + obj.entries[0].senses[0].definitions + '</p>' +
                    '<small>Etymology: ' + obj.entries[0].etymologies + '</small><br><br>' +
                    '<small>Example phrase: ' + obj.entries[0].senses[0].examples[0].text + '</small>' +
                    '</div>')
            })
        }
    })
});