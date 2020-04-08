const domain = 'meet.jit.si';
const room_name = 'aha';
$(function(){
    // https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md
    $('#enter').click(function(){
        let room =  $("#room").val()
        let nickname = $("#name").val()
        $('body').empty()
        $('<div id="meet"></div>').appendTo("body")
        console.log()
        const options = {
            roomName: room,
            width: $(window).width(),
            height: $(window).height(),
            parentNode: document.querySelector('#meet'),
            noSsl: false,
            userInfo: {
                //email: email,
                displayName: nickname
            }
        };
        
        const api = new JitsiMeetExternalAPI(domain, options);
        api.executeCommand('subject', room);
        api.executeCommand('displayName', nickname);
        console.log('go')

    })
    
})
