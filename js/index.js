$("pre").text($("pre").html());

function showExample(subtitle) {
  const htmlExams = $("ul[title=" + subtitle + "] li");
  const examTitleArray = [];
  for (let i = 0; i < htmlExams.length; i++) {
    examTitleArray.push(htmlExams[i].textContent);
    htmlExams[i].addEventlisnter();
  }
  console.log(examTitleArray);
}
