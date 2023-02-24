let buttons=document.getElementsByTagName('button');
let outputs=document.getElementById('output');


for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        let input=this.innerText;
        display(input)
    }
}
function display(input){
    let current=outputs.innerText
    if (current=='0'){
        if(input!='c'&&input!='back'&&input!='='){
            outputs.innerText=''
            outputs.innerText+=input
        }

    }else{
        if (input=='back'){
            outputs.innerText=current.substring(0,current.length-1)
            if (outputs.innerText==''){
                outputs.innerText='0'
            }
        }
        if(input=='c'){
            outputs.innerText='0'
        }
        if (input!='c'&&input!='back'&&input!='='){
            outputs.innerText+= input
        }
        if (input=='='){
            let show=outputs.innerText
            outputs.innerText= eval(show)
        }
    }
}