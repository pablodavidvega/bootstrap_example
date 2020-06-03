
$(document).ready(function(){
    $(".btn").click(function(event){
        event.preventDefault();
        var dato2;
        dato2 = $("input").val ();
        if (dato2.length == 0) {
            alert('deberia ingresar mail');
        } 
        else {
            $(".newsletter-show").show(2000);
            $(".font-center").hide();
            $(".thanks1").after ("<b>" +dato2+""+"</b>"); 
            
        }
    });
    $(document).ready(function(){
        $(".see-more7").click(function(){
            $(".exp7").fadeToggle(1000);
        });
    });
});
 
                                      
                 

                