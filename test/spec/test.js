/* global describe, it */

(function () {
    'use strict';

    describe('User should be able to add and remove todo items to the list', function () {
        describe('Add a new todo item to our list', function () {
            it('should prepend the text in the input box to the top of the todo list after clicking add ', function () {
              
            });
            it('should add the text as a new element in the todo list array after clicking add ', function () {

            });            
            it('should prepend the text in the input box to the top of the todo list after hitting enter key ', function () {

            });
            it('should add the text as a new element in the todo list array after hitting enter key ', function () {

            });                        
        });
        describe('Remove a todo item from our todo list', function () {
            it('should remove row from the DOM upon clicking the remove button', function () {

            });
            it('should remove the matching todo element from the todo array upon clicking remove button', function () {

            });            
        });
    });

    describe('The todo item should be marked as complete when the checkbox is clicked', function () {
        it('should mark todo.complete = false upon clicking the checkmark glyph', function () {

        });
        it('should change the formatting of the todo items row upon clicking the checkmark glyph', function() {

        });
        it('should toggle back to incomplete if the checkmark glyph is clicked again', function() {

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
