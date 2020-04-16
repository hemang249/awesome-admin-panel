$('#sidebar-toggle').click( function(e) {
    console.log("Click")
    if($('#sidebar')) {
        let sidebarState = $('#sidebar').attr('aria-hidden')
        $('#sidebar').attr('aria-hidden', sidebarState == 'true' ? false : true)
        $('#content').css("margin-left", "0")
    }
} )