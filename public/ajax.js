$.get('/todos', function(data) {
    
});

$('form').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/todos', formData, function(data){
        console.log(data);
    });

});