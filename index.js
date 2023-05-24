var noOfColor=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfColor;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var b=this.innerHTML;
       switch(b)
       {
        case 'w':
            new Audio("crash.mp3").play();
            break;
        case 'a':
            new Audio("kick-bass.mp3").play();
            break;
        case 's':
            new Audio("snare.mp3").play();
            break;
        case 'd':
                new Audio("tom-1.mp3").play();
                break;
        case 'j':
                    new Audio("tom-2.mp3").play();
                    break;
        case "k":
            new Audio("tom-3.mp3").play();
            break;
        case 'l':
                new Audio("tom-4.mp3").play();
                break;
       }
    })

}
