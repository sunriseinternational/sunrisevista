function SendEmail(name, captcha, content) {

    var url = "https://CreativeMITE.com:443/Services/EmailService.asmx";
    $.ajax({
        type: "POST",
        url: url + "/SunriseVistaReceiveMail",
        data: "{name:'" + name + "',negativeCaptcha:'" + captcha + "',content:'" + content + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccessCall,
        error: OnErrorCall
    });

    function OnSuccessCall(response) {
        console.log(response, "Your message sent.");
        redirect("success")
    }

    function OnErrorCall(response) {
        console.log(response);
        redirect("fail")
    }
}

function SendYourMail(){
    var name = document.getElementById("name").value;
    var captcha = document.getElementById("captcha").value;
    var email = document.getElementById("email").value;
    var message =  document.getElementById("message").value;
    var content = "Customer Email: " + email + "\n Cutomer Message: " + message;

    if (name != "" || message != ""){
        if (captcha == ""){
            SendEmail(name, captcha, content);
        }
        else{
            console.log("Please send make sure you are human!")
            redirect("fail")
        }
    }
    else{
        redirect("empty")
    }
}

function redirect(path){
    var messageURL = 'message.html'
    location.href = messageURL + '?q=' + path;
}

