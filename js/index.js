$("pre").text($("pre").html());

function showHTMLExample(subtitle) {
  //   $("div[class*=" + subtitle + "]").css("display", "block");
  $(".HTML").hide();
  $("div[class*=" + subtitle + "]").show();
}

function about(title) {
  $(".aside").hide();
  $("div[title*=" + title + "]").show();
}
