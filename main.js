let ball = Number(prompt("To'plagan balingizni kiriting: "));

if(ball < 80){
  alert("đĽO'qishga kira olmadingiz! ");
}
else if(ball < 100){
  alert("Siz super-kontrakt asosida o'qishga tavsiya qilindingiz! Kontrakt miqdori yiliga đ°3000$");
  let sum = Number(prompt("đ°đ¤ Qancha pulingiz bor? $:"));
  if (sum >= 3000){
    alert("đ Siz o'qishga qabul qilindindiz!")
  }
  
  else{
    alert("đĽO'qishga kira olmadingiz! ")
  }
}

else if(ball < 150){
  alert("Siz kontrakt asosida o'qishga tavsiya qilindingiz! Kontrakt miqdori yiliga đ°2000$");

  let sum = Number(prompt("đ¤ Qancha pulingiz bor? $:"));

  if (sum >= 2000){
    alert("đ Siz o'qishga qabul qilindindiz!")
  }

  else{
    alert("đĽO'qishga kira olmadingiz! ")
  }
}

else if(ball <= 180){
  alert( "đ Tabriklaymiz siz grant asosida o'qishga qabul qilindingiz!")
}


