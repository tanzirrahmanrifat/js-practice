// date 
function myDate(){
  document.getElementById('demo').innerHTML = Date();
};


// change attribute 
function myFuntion(){
  document.getElementById('change').innerHTML ='Hello Bangladesh';
};

// show variable 
function myText(){
  var x = 5;
  var y = 6;
  var z = x + y;
  document.getElementById('declared').innerHTML = z;
};
// show let 
function myHome(){
  let x = 7;
  let y = 7;
  let z = x * y;
  document.getElementById('store').innerHTML = z;
};

// show const 
function myRule(){
  const x = 49;
  const y = 7;
  const z = x / y;
  document.getElementById('general').innerHTML = z;
};

// arithmetic 
function myTypical(){
  let a = 10;
  let x = 10 + 20 + 45 * a;
  document.getElementById('arithmetic').innerHTML = x;
};


// number and string 
function myMultiple(){
  let x = "Rifat";
  let y = 67;
  let z = x + y
  document.getElementById('multiple').innerHTML = z;
};

// number and string 
function myMulone(){
  let x = "67";
  let y = 67;
  let z = x + y
  document.getElementById('mulone').innerHTML = z;
};

// change icon   
chnageCon = (icon) => icon.classList.toggle("fa-xmark");



chnageIcon = (icon) => icon.classList.toggle("fa-xmark");


// get contant 
$(document).ready(function(){
  $(".btn1").click(function(){
    alert("text: " + $("#text").text());
  });
  $(".btn2").click(function(){
    alert("HTML: " + $("text").text());
  });
});


//set contant and attribute
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#text1").text("Hello Bangla");
  });
  $("#btn2").click(function(){
    $("#text2").text("Love With Them");
  });
  $("#btn3").click(function(){
    $("#fname").val("Rifat");
  });
});


// call back function 
$(document).ready(function(){
  $("#btncall1").click(function(){
    $("#textcall").text(function(i , origText){
      return "oldtext: " + origText + "New Text: Hello Bangladesh (index: " + i + " )";
    });
  });
  $("#btncall2").click(function(){
    $("#textcall2").text(function(i , origText){
      return "oldtext: " + origText + "New HTML: Hello <b>Bangladesh</b> (index: " + i + " )";
    });
  });
});

// append 
$(document).ready(function(){
  $("#btnappend1").click(function(){
    $("#appendtext").append("<b>appended text</b>");
  });
  $("#btnappend2").click(function(){
    $("ol").append("<li>Love Bangladesh</li>");
  });
});


// prepend 
$(document).ready(function(){
  $("#btnprepend1").click(function(){
    $("#prependtext").prepend("<b>prepend text</b>");
  });
  $("#btnprepend2").click(function(){
    $("#ol").prepend("<li>Bangladesh is Beautiful</li>");
  });
});

// after before 
$(document).ready(function(){
  $("#btnafter").click(function(){
    $("img").after("<i>after</i>");
  });
  $("#btnbefore").click(function(){
    $("img").before("<b>before</b>");
  });
});

// remove empty 
$(document).ready(function(){
  $("#remove").click(function(){
    $("#div1").remove();
  });
  $("#empty").click(function(){
    $("#div2").empty();
  });
});

// add classes 
$(Document).ready(function(){
  $("#class").click(function(){
    $(".p").addClass("blue");
    $(".classhead").addClass("important");
  });
});
// bind 
$(document).ready(function(){
  $("#bind1").bind("click",function(){
   alert("This paragraph was clicked");
  });
});

// blur 
$(document).ready(function(){
  $("#input").blur("click", function(){
    alert("this input text will blur");
  });
});
// change 
$(document).ready(function(){
  $("#changetext").change("click", function(){
    alert("this input text will change");
  });
});


// hide-show
$(document).ready(function(){
  // hide 
  $("#hide").click(function(){
      $(".p").hide();
  });
  // show 
  $("#show").click(function(){
      $(".p").show();
  });
});

// toggle 
$(document).ready(function(){
  $("#toggle").click(function(){
    $("#togg").toggle();
  });
});

// fade-in 

$(document).ready(function(){
  $(".c-btn").click(function(){
    $("#fade0").fadeOut();
    $("#fade1").fadeOut("slow");
    $("#fade2").fadeOut(3000);
  });
});


// slide toggle 

$(document).ready(function(){
  $("#slide").dblclick(function(){
    $("#slidetoggle").slideToggle();
  });
});


// animated 
$(document).ready(function(){
  $("#animate").mouseover(function(){
    $("#animate1").animate({
      height: 'toggle'
    });
  });
});


// slide down and stop 
$(document).ready(function(){
  $("#clicksl").click(function(){
    $("#slide").slideDown(5000);
  });
  $("#stopsl").click(function(){
    $("#slide").stop();
  });
});

// callback 
$(document).ready(function(){
  $("#call").click(function(){
    $("#callitem").hide("slow", function(){
      alert("This content is hidden");
    });
  });
});

// chainng 

$(document).ready(function(){
  $('#chngbtn').click(function(){
    $('#chaing').css("color","red").slideUp(3000)
    .slideDown(3000);
  });
});

// Selects the current html hide 
$(Document).ready(function(){
  $("#current").click(function(){
    $(this).hide();
  });
});

// event hide 
$(document).ready(function(){
  $("#phide").click(function(){
    $(this).hide();
  });
});

