$(document).ready(function(){
    
    var date = moment().format("MMMM Do YYYY");
    
    var date2 = $("#currentDay"); 
    
    date2.text(date);  

    $("textarea").each(function(){
        
        var noteLabel = 'note-' + $(this).attr('id');
        
        var note = localStorage.getItem("textarea");
        

    });

    $(".saveBtn").each(function(){
        $(this).on("click", function(){
            console.log(this);
            var id = $(this).attr('id');
            console.log(id);
            var noteLabel = 'note-' + id;
            localStorage.setItem('.saveBtn', noteLabel)
        })
    });

    $(".time-container").each(function(){
       
        var id = $(this).attr('id'); 
       

        var currHour = moment().hour();
        if (currHour > id) {
            
            $(this).css('background-color', 'grey');
        }

        if (currHour < id) {

            $(this).css('background-color', 'green');
            
        }

        if (currHour == id) {
            $(this).css('background-color', 'red');
        }
    });

})
