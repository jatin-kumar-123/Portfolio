$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>550){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    //About owl carousel script
    $('.Aboutcarousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            }
        }

    });

    // projects owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

    // $('.sendMessage').click(function(){
    //     // location.reload();
    //     $('.ThankuMessage').addClass("appear");
    //     setTimeout(() => { $('.ThankuMessage').removeClass("appear");} , 2500);
    //     setTimeout(() => { document.getElementById("form").reset();} , 1000);
    // });

    


});

function SsendMail(params) {
    var tempParams = {
        sender_name:document.getElementById("sender_name").value,
        sender_mail:document.getElementById("sender_mail").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    emailjs.send("Gmail","template_48isvje",tempParams)
    .then(function(res){
        console.log("Mail Sent", res.status);
        // console.log(tempParams.sender_name);  //Just for debugging...
        if(tempParams.sender_name ){  //if details are entered, then only 'Thanku' message will appear...
            $('.ThankuMessage').addClass("appear");
            setTimeout(() => { $('.ThankuMessage').removeClass("appear");} , 2500);
            //setTimeout(() => { document.getElementById("form").reset();} , 300);
            document.getElementById("form").reset();
        }
    })
}

// var send = document.getElementById("sendButton");
// send.addEventListener('click', function(e){
//     e.preventDefault()
//     var name = ;
//     var email = ;
//     var subject = ;
//     var message = ;

// })

function sendMail(){
    var name = document.getElementById('sender_name').value;
    var senderEmail = document.getElementById('sender_mail').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'Name: '+name + '<br/>Email: ' + senderEmail + '<br/>Subject: '+ subject + '<br/>Message: '+ message;

    Email.send({
        SecureToken : "bdcab06b-e4b8-45bd-8ab4-b8b947949aff",
        To : "jatink9562@gmail.com",
        From : senderEmail,
        Subject : subject,
        Body : body
    }).then((value) => {
        console.log("value is: ",value);
        if(value == 'OK'){
            var thankuDiv = document.getElementById('Thankudiv');
            thankuDiv.style.display = "block";
            setTimeout(() => { 
                thankuDiv.style.display = "none";
            } , 2500);

            document.getElementById("form").reset();
        }
    });
}