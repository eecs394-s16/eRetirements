var showQuestion = function(idName){
  showQuizDivs();

  category = idName;
  //set current question to be first one
  current = 1;
  temp_completed = 0;
  num_completed = category_num_completed[category];
  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;

  //opens question popup to first skipped question
  if (num_completed > 0){
    for(var k = 0; k < total; k++){
      if (String(questionAndAnswers[k]["results"]) == String([false, false, false, false])){
        current = k+1;
        break;
      }
    }
  }

  changeQuestion(category);

  var strb ="";
  for(var i=0; i<total; i++)
  {
    var j =i+1;
    var styles = "";
    if (categories[category][i]["results"].indexOf(true) > -1)
    {
      styles = "style = 'background-color:lightgreen; border-radius: 5px'";
    }
    else
    {
      styles = "style = 'border-radius: 5px'";
    }

    strb += "<div id='progressdiv"+j+"' class='progressdiv'"+styles+">Q"+j+"</div>";
  }

  $('#progress').html(strb);
  for (var n = 0; n < total; n++){
    boldProgressDiv(n, current);
  }

}

var changeQuestionPrev = function() {
  current -= 1;
  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;
  if(current < 1)
  {
    $('.Quiz').hide();
    $('.row').css("opacity","1");
  }
  else
  {
    changeQuestion(category);
  }

}
var changeQuestionSkip = function(){
  var currentProgressDiv = "#progressdiv"+(current);
  if ($(currentProgressDiv).css('background-color') != lightgreenRGB){
    changeBackgroundColor(currentProgressDiv,'white');
  }

  current += 1;
  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;

  percent = (1-num_completed/total) * 100;
  if(category != "geography")
  {
    if(current > total){
      showRating();
    }
    else
    {
      changeQuestion(category);
    }
  }
  else {
    $('.row').css("opacity","1");
    $('.Quiz').hide();

    hideQuizDivs();

    $("#submitRating").hide();

  }
  
}

var changeQuestionNext = function(){
  current += 1;
  num_completed = category_num_completed[category];
  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;
  
  if(category != "geography")
  {

    if(current > total){
      showRating();
    }
    else
    {
      changeQuestion(category);
    }
  }
  else {
    $('.row').css("opacity","1");
    $('.Quiz').hide();
    hideQuizDivs();

    $("#submitRating").hide();

  }
  



}

var changeQuestion = function(category){

  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;
  for (var n = 0; n < total; n++){
    boldProgressDiv(n, current);
  }

  var title = categoryNames[category];

  document.getElementById("category_title").innerHTML = title;
  document.getElementById("next").disabled = true;
  displayAnswers(questionAndAnswers, total);

  if (total_completed + temp_completed == num_required_completed && !popup) {
    popup = true;
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-100"
      }
    });
    tooltips.tooltip( "open" );
    modal.style.display = "block";
    document.getElementById('results').disabled = false;
  }

}
