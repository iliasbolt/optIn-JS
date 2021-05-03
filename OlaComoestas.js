var websites = [
    'https://themezee.com/newsletter/',
    'https://carney.co/daily-carnage/',
    'https://www.thedailybeast.com/newsletters',
    'https://inside.com/rtt/?',
    'https://www.invisionapp.com/inside-design/subscribe/',
    'https://blog.hubspot.com/subscriptions',
    'https://austinkleon.com/newsletter/',
    'https://design.startupdigest.com/',
    'https://news.every.to/',
    'https://drawinglinks.substack.com/',
    'https://divinations.every.to/',
    'https://danco.substack.com/',
    'https://buttondown.email/dancohen',
    'https://hurryslowly.co/newsletter/',
    'https://www.adamgrant.net/writing/granted/',
    'https://www.theskimm.com/daily-skimm',
    'https://www.litmus.com/subscribe/',
    'https://generalassemb.ly/get/blog-post-newsletter',
    'https://www.yourdailypitch.com/newsletter',
    'https://hackernewsletter.com/',
    
]

var MailInputHints = ['Your Email Adress','Your Email Adress...','Put Your Email Adress'
,'name@example.com',
'johndoe@example.com',
'Email adress',
'Email Adress',
'Your email adress',
'me@example.com',
'me@adress.com',
]

var buttonHints = ['Sign Up',
'Sign up',
'Subscribe',
]

var boite = "aya.ilyasboltbolt@gmail.com"
var inputType = 'email';
var num,index = 0;
var identifier = "";
var identifierIsValid  = false;
var checkbox_found = false;
var IfAllGood_in_Form_TypeEmail = false;
function Proccessing (index){
    
        //window.setTimeout(Proccessing(),5000);//tsanna 7ta ytcharga site
        //open website
        window.location.href = websites[index];
        //window.setTimeout(function(){},5000);//tsanna 7ta ytcharga site
        //easy mode just the input with type email and have id or name    
        var data = document.querySelectorAll('input[type="email"]');
        try{
             var Input_class = data[0].className;
        var form = data[0].form;
        var Input_id = data[0].id;
        }
        catch{
            console.log('error in getting id or classname');
        }
       
        //HERE WORKING WELL FORMS WITH INPUT TYPE EMAIL 
        if(Input_id != "" || !isNaN(Input_id))//ya nakhod id or class :)
        {
            identifier = Input_id;
            identifierIsValid = true;
        }
        if(!identifierIsValid)//if mal9itx id ghanakhod class
        {
            identifier = form.className
            identifierIsValid = false;
        }   
        
        //console.log("form -> input value -> "+form.elements.item(0).value)
        //look for checkboxes in the form
        try{
            var checkbox = document.querySelectorAll(identifier == true ?'#'+identifier+' input[type="checkbox"]' : '.'+identifier+' input[type="checkbox"]').length;
        }catch{
            console.log('can\'t select checkboxex cuz input have not id or class :( ')
        }
        if(checkbox == 0)
        {
            try{
               //alert("nocheckbox Found");
            //ok fill the input and SUBMIT 
            data[0].value = /*boite*/"aya.ilyasboltbolt@gmail.com";
            form.submit();
            }
            catch{
                console.log('no form submitting !')
            }
            
        }
        else
        {
            try{
                //alert("checkbox found");
                data[0].value = boite;
                if(identifier == "")//ila input ma3ando la id la className ghankhdem b id dial form
                {
                    var found = false;
                    //khass nselectionner checkboxex b id awla classname dial form
                    if(form.id != '' && !isNaN(form.id))
                    {
                        identifier = form.id;
                        found = true;
                    }
                    if(!found && form.className != '' && !isNaN(form.className))
                    {
                        identifier = form.className;
                        found = false;
                    }
                    //alert(identifier)
                    //error in querying for selecting checkoxes
                    //check all checkboxex in page 
                    try{
                        Allcheckboxes = document.querySelectorAll("input[type='checkbox']")
                        for(var c = 0; c < Allcheckboxes.length; c++) {
                            Allcheckboxes[c].checked = true ;
                        }
                    }catch{
                        console.log('error in check boxes');
                    }
                    
                    form.submit();
                }
            }
            catch{
                console.log("no first script doest orn here no form no input type email ;(")
            }

            
        }




        //HERE OTHER TYPE INPUT TYPE EMAIL OR TEXT NO FORM ;)
        //get all forms



        var AllInputs = document.getElementsByTagName('input')
        for(let y = 0 ; y<AllInputs.length;y++)
        {
            //console.log("Place holder   ->  "+AllInputs[y].placeholder);
            //console.log("type de input   ->  "+AllInputs[y].type);
            //type email 
            if(AllInputs[y].type == "email")//input type email 
            {
                AllInputs[y].value = /*boite*/"aya.ilyasboltbolt@gmail.com";
                //check All checkboxes 
                try{
                    Allcheckboxes = document.querySelectorAll("input[type='checkbox']")
                    for(var e = 0; e < Allcheckboxes.length; e++) {
                            Allcheckboxes[e].checked = true ;
                    }
                }
                catch{
                    console.log("no beckboxes found");
                }
                //locate the button for submit
                var parentdiv = AllInputs[y].parentNode;
                var button = parentdiv.childNodes;
                //if parent is form 
                try{
                    //try some other method 
                   AllInputs[y].form.submit();
                }
                catch{
                    console.log('ok')
                }
                for(t = 0;t<button.length;t++)
                {
                    if(button[t].nodeName == "BUTTON")
                    { 
                       button[t].id = "okbb";
                       document.getElementById("okbb").click();
                    }
                }
            }
            
        }

        var MailInputHints = ['Your Email Adress','Your Email Adress...','Put Your Email Adress'
        ,'name@example.com',
        'johndoe@example.com',
        'Email adress',
        'Email Address',
        'Your email adress',
        'me@example.com',
        'me@adress.com',
        'Enter your email address',
        'Email Address',
        'Enter your email',
        'Email Address'
        ]
        //HERE OTHER TYPE INPUT TYPE TEXT OR TEXT NO FORM ;)
        try{
            Allcheckboxes = document.querySelectorAll("input[type='checkbox']")
            for(var e = 0; e < Allcheckboxes.length; e++) {
                    Allcheckboxes[e].checked = true ;
            }
        }
        catch{
            console.log("no beckboxes found");
        }

        var AllInputs = document.querySelectorAll('input');
        for(var cv = 0;cv < AllInputs.length;cv++)
        {
            for(cj = 0 ; cj<MailInputHints.length;cj++)
            {
                if(AllInputs[cv].placeholder == MailInputHints[cj])//check for placeholders
                {
                    console.log(AllInputs[cv]);
                    AllInputs[cv].value = "aya.ilyasboltbolt@gmail.com";
                    //if type is text but in form 
                    try{
                        AllInputs[cv].form.submit();
                    }
                    catch{
                        console.log("type text but in form");
                    }
                    var btn = AllInputs[cv].parentNode;
                    var cdv = btn.childNodes;
                    for(t = 0;t<cdv.length;t++)
                    {
                        if(cdv[t].nodeName == "BUTTON")
                        { 
                            cdv[t].id = "okbbc";
                           document.getElementById("okbbc").click();
                        }
                    }
                }
            }
        }
    }

//startintg Proccessing  ============

//next Website
/*
document.onkeydown = function(e){
    var e = e || window.event; 
    if(e.ctrlKey && e.keyCode == 81) {
    var index=0;
    window.setInterval(function(){
        Proccessing(index);
        index++;
        if(index >= websites.length)
            window.close();
    },5000);
}

}
*/