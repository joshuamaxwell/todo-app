/* global describe, it */

(function () {
  'use strict';

  describe('User should be able to add and remove todo items to the list', function () {
      describe('Add a new todo item to our list', function () {
          it('should prepend the text in the input box to the top of the todo list after clicking add ', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            expect($('.todo-items-list').first()).to.contain(todoString);
          });
          it('should add the text as a new element in the todo list array after clicking add ', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            expect( _.last(todosArray) ).to.equal( todoString );
          });            
          it('should prepend the text in the input box to the top of the todo list after hitting enter key ', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            var enter = $.Event('keypress');
            enter.which = 13; // EnterKey
            $('.js-new-todo').trigger(enter);
            expect($('.todo-items-list').first()).to.contain(todoString);              
          });
          it('should add the text as a new element in the todo list array after hitting enter key ', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            var enter = $.Event('keypress');
            enter.which = 13; // EnterKey
            $('.js-new-todo').trigger(enter);
            expect( _.last(todosArray) ).to.equal( todoString );              
          });                        
      });
      describe('Remove a todo item from our todo list', function () {
          it('should remove row from the DOM upon clicking the remove button', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            var todoID = _.last(todosArray).todoID;
            //click the remove button for the recently added todo item
            $('#' + todoID + ' .js-todo-remove').click();
            //then check to see if the html element is still on the page
            expect($('#' + todoID)).to.be.null;
          });
          it('should remove the matching todo element from the todo array upon clicking remove button', function () {
            var todoString  = 'walk the dog';
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            var todoID = _.last(todosArray).todoID;
            //click the remove button for the recently added todo item
            $('#' + todoID + ' .js-todo-remove').click();              
            var todoIDs = _.pluck(todosArray, 'todoID');
            expect(todoIDs).to.not.contain(todoID);
          });            
      });
  });

  describe('The todo item should be marked as complete when the checkbox is clicked', function () {
      it('should mark todo.complete = false upon clicking the checkmark glyph', function () {
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            var todoObj = _.last(todosArray);
            //click the checkmark button for the recently added todo item
            expect(todoObj.completed).to.be.false;
            $('#' + todoObj.todoID + ' .js-todo-complete').click();
            var todoObj = _.last(todosArray);              
            expect(todoObj.completed).to.be.true;
      });
      it('should add class ".completed" the todo items row upon clicking the checkmark glyph', function() {
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            var todoObj = _.last(todosArray);
            //click the checkmark button for the recently added todo item
            $('#' + todoObj.todoID + ' .js-todo-complete').click();
            expect( $('#' + todoObj.todoID).attr('class') ).to.contain('completed');
      });
      it('should toggle back to incomplete if the checkmark glyph is clicked again', function() {
            $('.js-new-todo').val(todoString);
            $('.js-add-new').click();
            var todoObj = _.last(todosArray);
            //click the checkmark button for the recently added todo item
            $('#' + todoObj.todoID + ' .js-todo-complete').click();
            $('#' + todoObj.todoID + ' .js-todo-complete').click();
            expect( $('#' + todoObj.todoID).attr('class') ).to.not.contain('completed');
            var todoObj = _.last(todosArray);              
            expect(todoObj.completed).not.to.be.true;
      });
  });

  describe('The todo item dom element should be editable', function() {
    describe('The todo item dom element should change to editable upon double-clicking of the title', function () {
      //add a class to make the input box editable?
    });
    describe('The todo item dom element should change back to non-editable upon hitting enter key', function() {
      //remove editable class upon hitting enter key
    });
    describe('Original todo title text should be replaced with text that was entered in the editable-mode todo item', function() {

    });
  });         
})();
