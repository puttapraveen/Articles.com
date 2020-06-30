function call(){

const a=document.querySelectorAll('input[name="mode"]');
for (const c of a){
    if(c.checked){
        if(c.value=='dark-mode'){
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
            break;
        }
        document.body.style.backgroundColor="white";
            document.body.style.color="black";
    }    
}
}