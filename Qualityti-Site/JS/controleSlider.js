var x = document.getElementById('qti-banner1');
var y = document.getElementById('qti-banner2');
function anterior () {
        
    if(x.style.display ==='none') {
        x.style.display ='flex';
        //x.style.transition ='2s';
        y.style.display ='none';
        //y.style.transition ='2s';
    }else {
        x.style.display ='none';
       // x.style.transition ='2s';
        y.style.display ='flex';
       // y.style.transition ='2s';

    };
};
function proximo () {
       
    if(x.style.display ==='none') {      
        x.style.display ='flex';
        y.style.display ='none';
    }else {
        x.style.display ='none';
        y.style.display ='flex';
    };
};