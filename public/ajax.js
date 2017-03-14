$('#new-todo-form').submit(function(e){
    e.preventDefault();

    var todoItem = $(this).serialize();

    $.post('/todos', todoItem, function(data){
        debugger
    });
});