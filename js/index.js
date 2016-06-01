var total_completed = 0;
var modal;
var openModal;
var closepageDiv;
var star_num = 0;
var popup = false;
var lightgreenRGB = "rgb(144, 238, 144)";
var tealHex = '#6C9B74';
var grayHex = '#EBEBEB';
var current = 1;
var category;
var num_completed = 0;
var temp_completed = 0;
var num_required_completed = 10;
var isThirdCommunityCompleted = false;
var clickItem;
var temp_result = {};
$(document).ready(function() {

  initPage();

  //when user hovers over category circle
  $(".category").hover(function() {
    $(this).css('border-color', tealHex); //teal/blue
  }, function () {
    if (category_num_completed[this.id] > 0){
      $(this).css('border-color', lightgreenRGB); //lightgreen
    } else {
      $(this).css('border-color', grayHex); //gray
    }
  });

  //when user clicks results button
  $(document).on("click", "#results", function(event){
    getResultsFromApi();
  });
  $(document).on("click", "#modal-results", function(event){
    getResultsFromApi();
  });

  //when you click on the progress bars below
  $(document).on("click", ".progressdiv", function(event){
    var id = event.target.id;

    var index = parseInt(id.substring(11));//gets index of div from its id
    current = index;

    var questionAndAnswers = categories[category];
    var total = questionAndAnswers.length;

    for (var n = 0; n < total; n++){
      boldProgressDiv(n, current);
    }

    displayAnswers(questionAndAnswers,total);

  });

  $('.category').click(function(e) {
    var $clickedItem = $(e.target);
    var idName = jQuery(this).attr("id");
    showQuestion(idName);
    for(var i = 0; i < categories[category].length; i++)
    {
      temp_result[i] = categories[category][i]["results"];
    }

    // console.info(temp_result);
  });

});

function initPage() {

  //hide quiz modal for landing
  $('.Quiz').hide();

  openModal = document.getElementById('openModal');

  $(window).load(function(){
    openModal.style.display = "block";
  });

  // Get the modal
  modal = document.getElementById('myModal');

  allModal = document.getElementsByClassName('modal');

  closepageDiv = document.getElementById('closepage');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[1];
  var oSpan = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function(event) {
    modal.style.display = "none";
  }

  oSpan.onclick = function(event) {
    openModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == allModal) {
      allModal.style.display = "none";
    }
  }

}


//creates html to display answers onto page
function displayAnswers(questionAndAnswers, total){
  var currentQuestionAndAnswers = questionAndAnswers[current-1];
  $('#question_number').text( "Question " + current +" out of " + total);
  $('#question_content').text(currentQuestionAndAnswers["question"]);

  var answers = currentQuestionAndAnswers["answers"];
  var len = answers.length;
  var str = "";
  for(var i = 0; i < len; i++)
  {
    var j = i+1;
    var styles = "style='border-radius:10px; text-align:center;";
    if(categories[category][current-1]["results"][i]){
      styles += " background-color:lightgreen;";
      document.getElementById("next").disabled = false;
    }
    styles+="width:90%'";
    str += "<li><button id='button"+j+"' class='list-group-item answer'"+styles+" onclick='focusButton("+j+","+len+","+(current-1)+")'>  " + answers[i] +
    "</button></li>";

  }
  $('#question_option').html(str);
}

function getResultsFromApi(){
  var keys = Object.keys(categories);
  for (var i = 0; i < keys.length; i++){
    var c = categories[keys[i]];
    for (var j = 0; j < c.length; j++){
      var section = c[j];
      var s_name = section["name"];
      var s_results = section["results"];
      var s_values = section["values"];
      var temp_list = [];
      var temp_value = "";

      for(var k = 0; k < s_results.length; k++){
        if(s_results[k]) {
          if (s_name == "idealCommunity"){
            temp_list.append(s_values[k]);
          }
          else {
            temp_value = s_values[k];
            break;
          }
        }
      }

      if(s_name == "idealCommunity") {
        dataForApi[s_name] = temp_list;
      } else {
        if (temp_value != "") {
          dataForApi[s_name] = temp_value;
        }
      }
    }
  }
  saveData(dataForApi);
  window.location.href = "file:///C:/Users/Joel/Desktop/eRetirements/survey-results.html";
}

function boldProgressDiv(n, current){
  if (n == current - 1) {
    $("#progressdiv"+(n+1)).css("border-width","2px");

  } else {
    $("#progressdiv"+(n+1)).css("border-width","1px");
  }
}

var removeOpenModal = function() {
  $(openModal).remove();
}

function showQuizDivs(){
  $('.row').css("opacity","0.5");
  $('.Quiz').show();
  $("#prev").show();
  $("#next").show();
  $("#skip").show();
  $("#finish").show();
  $("#progress").show();

  $("#submitRating").hide();

}

var showRating = function(){

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

  document.getElementById("submitRating").disabled = true;

  var questionAndAnswers = categories[category];
  var title = categoryNames[category];
  document.getElementById("category_title").innerHTML = title;

  var starsHTML = "";
  //four stars
  for (var s = 0; s < 4; s++){
    starsHTML += "<span id=star"+s+" class='star'>&#9733</span>";
  }

  $('#question_option').html(starsHTML);

  $(".star").click(function(e){
    rate(e);
  });

  var stars = $('#question_option').children();

  if (ratings[category] > 0) {
    document.getElementById("submitRating").disabled = false;
  }

  for (var r = 0; r < ratings[category]; r++){
    stars[r].style.color = "orange";
  }

  $('#question_content').html("Please rank how important this category is to you. <br> (1 star = least important, 4 stars = most important)");

  //clears the text displaying current question index
  $('#question_number').html("");

  $("#prev").hide();
  $("#next").hide();
  $("#skip").hide();
  $("#finish").hide();
  $("#progress").hide();
  $("#submitRating").show();

}


var rate = function(e) {

  document.getElementById("submitRating").disabled = false;

  var $clickedItem = $(e.target);

  star_num = $clickedItem.index() + 1;
  $clickedItem.css({'color':'orange'});
  $clickedItem.prevAll().css({'color':'orange'});
  $clickedItem.nextAll().css({'color':'lightgray'});

}

var submitRate = function() {

  ratings[category] = star_num;

  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;

  num_completed += temp_completed;
  category_num_completed[category] = num_completed;
  if(num_completed == total)
  {
    $("#" +category).find(".completed").css({'visibility': 'visible'});
  }
  percent = (1-num_completed/total) * 100;

  $("#" +category).css({'background-image':
  'linear-gradient(to bottom, transparent '+ percent +'%, #90EE90 0)'});
  $("#" +category + " h3").html(num_completed +"/"+total);

  (percent < 100) ? $("#" +category).css('border-color', lightgreenRGB) : $("#" +category).css('border-color', grayHex);

  $('.Quiz').hide();
  total_completed += temp_completed;
  console.log("total_completed_saved:" + total_completed);
  $('.row').css("opacity","1");

}

var changeBackgroundColor = function(selector, value) {
  $(selector).css('background-color',value);
}

var focusButton = function(buttonIndex,len,questionIndex){
  if (categories[category][questionIndex]["results"].indexOf(true) == -1)
  {
    temp_completed += 1;
  }

  var progressdivSelector = "#progressdiv"+(questionIndex+1);
  var buttonSelector = "#button"+buttonIndex;
  if (category == "community" && questionIndex == 2){

    isThirdCommunityCompleted = true;

    var newBackgroundColor;
    ($(buttonSelector).css("background-color") == lightgreenRGB) ? newBackgroundColor = 'white' : newBackgroundColor = 'lightgreen';
    changeBackgroundColor(buttonSelector,newBackgroundColor);

    var areAnyGreen = false;
    for (var i=1;i<=len;i++){
      if ($("#button"+i).css("background-color") == lightgreenRGB){
        areAnyGreen = true;
        break;
      }
    }

    (areAnyGreen) ? newBackgroundColor = 'lightgreen' : newBackgroundColor = 'white';
    changeBackgroundColor(progressdivSelector,newBackgroundColor)
    categories[category][questionIndex]["results"][buttonIndex-1] = !categories[category][questionIndex]["results"][buttonIndex-1];//1-4
  }
  else {
    for (var i=1; i<=len; i++)
    {
      changeBackgroundColor("#button"+i,'white')
    }
    changeBackgroundColor(buttonSelector,'lightgreen');
    changeBackgroundColor(progressdivSelector,'lightgreen');
    categories[category][questionIndex]["results"] = [false,false,false,false];//1-4
    categories[category][questionIndex]["results"][buttonIndex-1] = true;//1-4
  }
  document.getElementById("next").disabled = false;
}

var closePageEvent = function(){
  closepageDiv.style.display = "block";
}

var closewithoutSave = function(){

  var questionAndAnswers = categories[category];
  var total = questionAndAnswers.length;
  //clear all users results
  for (var i=0; i<categories[category].length; i++)
  {

    // categories[category][i]["results"] = [false,false,false,false];
    categories[category][i]["results"] = temp_result[i];
    // console.info(temp_result);
  }
  $(".Quiz").hide();
  $('.row').css("opacity","1");

}

function saveData(obj) {
  //converts to JSON string the Object
  obj = JSON.stringify(obj);
  console.log(obj);
  //creates a base-64 encoded ASCII string
  // obj = btoa(obj);
  //save the encoded accout to web storage
  localStorage.setItem('data', obj);
}
