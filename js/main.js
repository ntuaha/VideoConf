const domain = 'meet.jit.si';
const room_name = 'aha';
$(function(){

    const options = {
        roomName: room_name,
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet'),
        noSsl: false,
        userInfo: {
            email: 'ntuaha@gmail.com'
        }
    };
    
    const api = new JitsiMeetExternalAPI(domain, options);
    console.log('go')
})
