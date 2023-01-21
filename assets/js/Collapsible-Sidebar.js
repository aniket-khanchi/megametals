$(document).ready(function () {
    
    $('#machine_shop_row').hide() ;
    $('#tool_room_row').hide() ;
    $('#standard_room_row').hide() ;


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $("#hpdc_machines_btn").on('click', function () {
        $("#hpdc_machines_row").show();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').hide() ;
      });
    
      $("#machine_shop_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').show() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').hide() ;
      });

      $("#tool_room_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').show() ;
        $('#standard_room_row').hide() ;
      });

      $("#standard_room_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').show() ;
      });

});



