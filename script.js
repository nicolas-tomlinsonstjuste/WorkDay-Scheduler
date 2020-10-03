$(document).ready(function(){
    
    var date = moment().format("MMMM Do YYYY");
    
    var date2 = $("#currentDay"); 
    
    date2.text(date);  

    $("textarea").each(function(){
        
        var noteLabel = 'note-' + $(this).attr('class').split(" ")[1];
       
        
        var note = localStorage.getItem(noteLabel);
        $(this).val(note)

    });

    $(".saveBtn").each(function(){
        $(this).on("click", function(){
            var id = $(this).attr('id');
            var noteLabel = 'note-' + id;
            console.log($("."+id).val())
            localStorage.setItem(noteLabel, $("."+id).val())
        })
    });

    $(".time-container").each(function(){
        
       
        var id = $(this).attr('id');
        

        //console.log("currHour")
        //console.log("id")
       

        var currHour = moment().hour();
        console.log({currHour,id});
        if (currHour > id ) {
            
            $(this).css('background-color', '#FEECF0');
        }

        if (currHour < id) {

            $(this).css('background-color', '#EFFAF3');
            
        }

        if (currHour == id) {
            $(this).css('background-color', '#FFFBEA');
        }
    });

})
