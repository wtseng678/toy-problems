$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var para = document.getElementsByTagName("P");
  for (var i = 0; i < para.length; i++) {
  	var text = para[i].innerHTML.split(" ");
  	for (var j = 0; j < text.length; j++) {
  		if (text[j].length > 0) {
  			text[j] = "<span>" + text[j] + "</span>";
  		}
  	}
  	para[i].innerHTML = text.join(" ");
  	//para[i].style.color = "red";
  }

  setInterval(function() {   

  	$("span").each(function(element) { 
	  	var r = Math.floor(Math.random() * 256);
	  	var g = Math.floor(Math.random() * 256);
	  	var b = Math.floor(Math.random() * 256);
  		$(this).css("color", 'rgb(' + r + ',' + g + ',' + b + ')'); 
  	});
  }, 1000);
  return para;
  

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

});