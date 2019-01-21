


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
    


    document.querySelector('.laptopform').addEventListener('submit',function(event){

    })