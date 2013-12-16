window.onload=function(){
    document.getElementById('switcher').onclick=function(event){
        var elm = event.target;
        if(elm.className=='slideon'){
            elm.className='clickon';
        }else{
            elm.className='slideon';
        }
    }
}

