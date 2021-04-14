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

    var todoListBox =$('.main-content .text .todo-list') ;

    var todoListOriginal =$('.template li') ;

    var status =false ; 


    // Loop array per popolare listTodo

    for(var i = 0 ; i < todoList.length;i++ ){

        var thisList = todoList[i] ;

        var thisText = thisList.text ;

        var checkStatus = thisList.completed ;

        var todoListClone = todoListOriginal.clone() ;

        var spanText = todoListClone.find('.text-list span') ;

        var checkIcon =todoListClone.find('.text-list i.far.fa-check-circle');


        if(checkStatus){
            checkIcon.addClass('active');
            spanText.addClass('active');
        }

        spanText.text(thisText);

        todoListBox.append(todoListClone);

       

    }


    // Validazione chack

    



    // Aggiungere con input

    $('body').on('click','.main-content .box .input .btn', function(){

        var todoListClone = todoListOriginal.clone() ;
        var spanText = todoListClone.find('.text-list span') ;
        var thisTextBar = inputText.val().trim();

        if(thisTextBar !== ''){
            spanText.text(thisTextBar);
            todoListBox.append(todoListClone);
            inputText.val('')
        }else if(thisTextBar == ''){
            inputText.val('')
        }


        var todoListClone = todoListOriginal.clone() ;

        var spanText = todoListClone.find('.text-list span') ;

    
    
    });


    // Convalidare lista

    $('body').on('click','.main-content .box ul li .text-list span', function(){


         var thisClick = $(this);

         thisClick.toggleClass('active');

          var clickList = thisClick.next();

          clickList.toggleClass('active');
    
    });

  
    // Aggiungere con tasto start

    inputText.keyup(function (event) { 
        
        var thisKey =event.which ;

        if(thisKey === 13){
            var todoListClone = todoListOriginal.clone() ;
        var spanText = todoListClone.find('.text-list span') ;
        var thisTextBar = inputText.val().trim();

        if(thisTextBar !== ''){
            spanText.text(thisTextBar);
            todoListBox.append(todoListClone);
            inputText.val('')
        }else if(thisTextBar == ''){
            inputText.val('')
        }


        var todoListClone = todoListOriginal.clone() ;

        var spanText = todoListClone.find('.text-list span') ;

        }
    });





    // Rimuovere 

    $('body').on('click','.main-content .text .todo-list i.fa-times-circle',function(){

        var thisCheck =$(this).parent('li');

        thisCheck.slideUp(500, function(){

            var thisCheck =$(this).parent('li');

            thisCheck.remove();

        });

    });




    // End doc
});