let ball = Number(prompt("To'plagan balingizni kiriting: "));

if(ball < 80){
  alert("🔥O'qishga kira olmadingiz! ");
}
else if(ball < 100){
  alert("Siz super-kontrakt asosida o'qishga tavsiya qilindingiz! Kontrakt miqdori yiliga 💰3000$");
  let sum = Number(prompt("💰🤑 Qancha pulingiz bor? $:"));
  if (sum >= 3000){
    alert("😃 Siz o'qishga qabul qilindindiz!")
  }
  
  else{
    alert("🔥O'qishga kira olmadingiz! ")
  }
}

else if(ball < 150){
  alert("Siz kontrakt asosida o'qishga tavsiya qilindingiz! Kontrakt miqdori yiliga 💰2000$");

  let sum = Number(prompt("🤑 Qancha pulingiz bor? $:"));

  if (sum >= 2000){
    alert("😃 Siz o'qishga qabul qilindindiz!")
  }

  else{
    alert("🔥O'qishga kira olmadingiz! ")
  }
}

else if(ball <= 180){
  alert( "😃 Tabriklaymiz siz grant asosida o'qishga qabul qilindingiz!")
}


