var exampleTodos = [
'wash clothes',
'wash dishes',
'feed cat',
'learn grunt'
]

todosArray = [];

var Todo = function(title) {
  this.todoID = _.uniqueId('todoID');
  this.title = title;
  this.completed = false;
}

var todoTemplate = _.template($('.todo-template').text());
var todoTitleTemplate = _.template($('.todo-title-template').text());
var todoTitleEditTemplate = _.template($('.todo-title-edit-template').text());

_.each(exampleTodos, function(example) {
  addTodo({title: example});
});

// var enter = $.Event('keypress');
// enter.which = 13; // EnterKey
// $('.js-new-todo>input').on(enter, function(){
//   var newTitleText = $('.js-new-todo>input').val()
//   $('.js-new-todo>input').val('')
//   addTodo({title: newTitleText});  
// });

$('.js-add-new').on('click', function(){
  var newTitleText = $('.js-new-todo>input').val()
  $('.js-new-todo>input').val('')
  addTodo({title: newTitleText});
})

$(document).on('click','.js-not-editing', function(){
  var id = $(this).parent().attr('id');
  beginEditingTodo(id);
  $(this).toggleClass('js-editing');
  $(this).toggleClass('js-not-editing');
})

$(document).on('click','.js-editing', function(){
  var id = $(this).parent().attr('id');
  finishEditingTodo(id);
  $(this).toggleClass('js-editing');
  $(this).toggleClass('js-not-editing');
})



$(document).on('click', '.js-todo-complete', function(){
  var id = $(this).parents('.js-todo-item').attr('id');
  completeTodo(id);
})

$(document).on('click', '.js-todo-remove', function(){
  var id = $(this).parents('.js-todo-item').attr('id');
  removeTodo(id);
})





function addTodo (obj) {
  todosArray.push(new Todo(obj.title));
  $('.js-todo-items-list').prepend(todoTemplate( _.last(todosArray) ));
  updateStats();
}

function removeTodo (id) {
  todosArray = _.reject(todosArray, function(item){
    return item.todoID === id;
  });
  $('#'+id).remove();
  updateStats();  
}

function completeTodo (id) {
  for (i = 0; i < todosArray.length; i++) {
    if (todosArray[i].todoID === id) {
      if(todosArray[i].completed === false) {
        todosArray[i].completed = true;
        $('#' + id).addClass('completed');
        console.log('marking completed');
      }
      else if(todosArray[i].completed === true) {
        todosArray[i].completed = false;
        $('#' + id).removeClass('completed');
        console.log('marking incomplete');
      }     
    }
  }
  updateStats();
}

function beginEditingTodo (id) {
  var titleText = $('#' + id +'>.js-todo-title').text();
  $('#' + id +'>.js-todo-title').replaceWith(todoTitleEditTemplate({title: titleText}))
  $('#' + id +'>.js-todo-title').focus(); 
}

function finishEditingTodo (id) {
  var newTitleText = $('#' + id +'>.js-todo-title').val();
  removeTodo(id);
  addTodo({title: newTitleText});
  updateStats();
}

function updateStats () {
  var total = todosArray.length;
  var completed = _.filter(todosArray, function(item) {
    return item.completed === true;
  }).length;
  var incomplete = total - completed;
  $('.js-todos-total').text('total: ' + total);
  $('.js-todos-completed').text('completed: ' + completed);
  $('.js-todos-incomplete').text('incomplete: ' + incomplete);
}