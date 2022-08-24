let navigation = document.querySelector('#navigation');

window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navigation.style.top = '0'
    }
    else{
        navigation.style.top = '-51px'
    }
}