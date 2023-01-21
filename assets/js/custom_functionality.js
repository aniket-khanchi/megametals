


function onload_function(){ /* this is the jQuery equivalent of documents.ready */

    /* all scripting you do should go inside here for example */

    

    var len_cont = document.getElementsByClassName("fade_div").length ;
    for (let i = 0; i < len_cont; i++) {
        document.getElementsByClassName("fade_div")[i].style.display = "none";
    };
};


function dosomething(e){
//     var len_cont = document.getElementsByClassName("fade_div").length ;
// for (let i = 0; i < len_cont; i++) {
    var fd_div_cot = e.querySelectorAll(".fade_div") ;
    fd_div_cot[0].style.display = "flex";
// };
    
}


function dosomething_leave(e){
    // var len_cont = document.getElementsByClassName("fade_div").length ;
    // for (let i = 0; i < len_cont; i++) {
        var fd_div_cot = e.querySelectorAll(".fade_div") ;
        fd_div_cot[0].style.display = "none";
    // };
}

$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

$('#ai_btn').click(function(){
  window.location.href='#ai';
  $('#ai').click() ;
});

$('#ame_btn').click(function(){
    window.location.href='#ame';
    $('#ame').click() ;
});

$('#em_btn').click(function(){
    window.location.href='#em';
    $('#em').click() ;
});

$('#opfe_btn').click(function(){
    window.location.href='#opfe';
    $('#opfe').click() ;
});

$('#opfe_btn').click(function(){
    window.location.href='#opfe';
    $('#opfe').click() ;
});

$('#wp_btn').click(function(){
    window.location.href='#water';
    $('#water').click() ;
});

$('#f_btn').click(function(){
    window.location.href='#fur';
    $('#fur').click() ;
});