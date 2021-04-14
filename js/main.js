$(document).ready(function () {
    

    // Fake database content

    var todoList = [
        {
            text: 'Fare la spesa',
            completed : false,
        },
        {
            text: 'Leggere un libro',
            completed : true,
        },
        {
            text: 'Seguire il corso Boolean',
            completed : true,
        },
        {
            text: 'Guardare un film',
            completed : false,
        },
        {
            text: 'Partita Warzone',
            completed : false,
        },
    ] ;


    // Referenze principali

    var inputText =$('.main-content .input .text-bar') ;

    var inputBtn =$('.main-content .input .btn') ;

    var todoListBox =$('.main-content .text .todo-list') ;

    var deleteIcon =$('.main-content .text .todo-list i.fa-times-circle') ;

    var todoListOriginal =$('.template li') ;



    // Loop array per popolare listTodo

    for(var i = 0 ; i < todoList.length;i++ ){

        var thisList = todoList[i] ;

        var thisText = thisList.text ;

        var todoListClone = todoListOriginal.clone() ;

        var spanText = todoListClone.find('.text-list span') ;

        spanText.text(thisText)

        todoListBox.append(todoListClone)

        // Capire se è stata completed

        var checkStatus = thisList.completed ;

        var checkIcon =$('.main-content .text .todo-list .text-list i.fa-check-circle');

        if(checkStatus == true){
            checkIcon.addClass('active');
        }

        

    }


    // Aggiungere con input

    


    // Rimuovere 

    $('body').on('click','.main-content .text .todo-list i.fa-times-circle', function(){

        



    } , function(){
        var thisCheck =$(this).parent('li');

        thisCheck.remove();
    });




    // End doc
});