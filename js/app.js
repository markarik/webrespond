


function eventlisteners(){
    document.querySelector('.navbtn').addEventListener('click' , function(){
        document.querySelector('.nav').classList.toggle('nav--show')
    })

    /* video switch */
    
}
function btnswitchs(){
    document.querySelector('.videoswitch').addEventListener('click' , function(){


        let btn = document.querySelector('.videoswitch_btn');
      
        if(!btn.classList.contains('btnslide')) {
            btn.classList.add('btnslide')
            document.querySelector('.videoitem').pause();
           
        } 
        else{
            btn.classList.remove('btnslide')
            document.querySelector('.videoitem').play();
        }  
        
    })
}

    eventlisteners(); 
    btnswitchs();
    eventlistener();
    

function eventlistener(){
    const ui = new UI();

    document.querySelector('.laptopform').addEventListener('submit',function(event)
    {
        event.preventDefault();
        const name =document.querySelector('.inputname').Value;
        const LastName =document.querySelector('.inputlastname').Value;
        const Email=document.querySelector('.inputemail').Value;


let value = ui.checkEmpty(name,LastName,Email);

console.log(value);
    })
}
    
    


function UI(){

    }

    UI.prototype.checkEmpty = function(name,LastName,Email){
        let result;
        if(name =='' || LastName =='' || Email==''){
            result = false;
        }
        else{
            result = false;
        }
        return result;
    }


     