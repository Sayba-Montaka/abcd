for(let i = 0; i<37; i++){
  
document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){


  let text = this.innerHTML;
  console.log(text);
  audioPlay(text);
 

  document.addEventListener("keypress",function(event){
    let text = event.key;
    audioPlay(text);

  });

  function audioPlay(text) {
    switch(text){
      case "Aa" :
        var audio = new Audio("sounds/a.mp3");
        audio.play();

        let img = new Image();
        img.src = "pictures/apple.jpg";

        break;
      case "Bb" :
          var audio = new Audio("sounds/b.mp3");
          audio.play();
          break;
      case "Cc" :
          var audio = new Audio("sounds/c.mp3");
          audio.play();
          break;
      case "Dd" :
          var audio = new Audio("sounds/d.mp3");
          audio.play();
          break;
      case "Ee" :
          var audio = new Audio("sounds/e.mp3");
          audio.play();
          break;
      case "Ff" :
          var audio = new Audio("sounds/f.mp3");
          audio.play();
          break;        
      case "Gg" :
          var audio = new Audio("sounds/g.mp3");
          audio.play();
          break;
      case "Hh" :
          var audio = new Audio("sounds/h.mp3");
          audio.play();
          break;
      case "Ii" :
          var audio = new Audio("sounds/i.mp3");
          audio.play();
          break;
      case "Jj" :
          var audio = new Audio("sounds/j.mp3");
          audio.play();
          break;
      case "Kk" :
          var audio = new Audio("sounds/k.mp3");
          audio.play();
          break;
      case "Ll" :
          var audio = new Audio("sounds/l.mp3");
          audio.play();
          break;
      case "Mm" :
          var audio = new Audio("sounds/m.mp3");
          audio.play();
          break;
      case "Nn" :
          var audio = new Audio("sounds/n.mp3");
          audio.play();
          break;
      case "Oo" :
          var audio = new Audio("sounds/o.mp3");
          audio.play();
          break;
      case "Pp" :
          var audio = new Audio("sounds/p.mp3");
          audio.play();
          break;
      case "Qq" :
          var audio = new Audio("sounds/q.mp3");
          audio.play();
          break;
      case "Rr" :
          var audio = new Audio("sounds/r.mp3");
          audio.play();
          break;  
      case "Ss" :
          var audio = new Audio("sounds/s.mp3");
           audio.play();
          break;
      case "Tt" :
          var audio = new Audio("sounds/t.mp3");
          audio.play();
          break;
      case "Uu" :
          var audio = new Audio("sounds/u.mp3");
          audio.play();
          break;
      case "Vv" :
          var audio = new Audio("sounds/v.mp3");
          audio.play();
          break;
      case "Ww" :
          var audio = new Audio("sounds/w.mp3");
          audio.play();
          break;
      case "Xx" :
        var audio = new Audio("sounds/x.mp3");
        audio.play();
        break;
  
        case "Yy" :
         var audio = new Audio("sounds/y.mp3");
        audio.play();
        break;
        case "Zz" :
        var audio = new Audio("sounds/z.mp3");
        audio.play();
        break;
        case "1 <br> One" :
            var audio = new Audio("sounds/1.mp3");
            audio.play();
            break;
        case "2 <br> Two" :
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;
        case "3 <br> Three" :
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break;
        case "4 <br> Four" :
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;
        case "5 <br> five" :
          var audio = new Audio("sounds/5.mp3");
          audio.play();
          break;
          case "6 <br> six" :
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "7 <br> seven" :
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
        case "8 <br> eight" :
            var audio = new Audio("sounds/8.mp3");
            audio.play();
            break;
        case "9 <br> nine" :
            var audio = new Audio("sounds/9.mp3");
            audio.play();
            break;
        case "10 <br> ten" :
          var audio = new Audio("sounds/10.mp3");
          audio.play();
          break;
  
    
  
    }
  }


});
}




