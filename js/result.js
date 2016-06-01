var apiURL = "https://infinite-shelf-93535.herokuapp.com/";
// var apiURL = "https://eretirements.herokuapp.com";
var dataForApi;

$(document).ready(function() {
	console.log("checking1");
	dataForApi = '';
	dataForApi = localStorage.getItem('data');
	if (!dataForApi){
		console.log("doesnt exist");
	}
	else {
		console.log("checking2");
		// localStorage.removeItem('_results');
		//decodes a string data encoded using base-64
		// apiResult = atob(apiResult);
		//parses to Object the JSON string
		dataForApi = JSON.parse(dataForApi);
		//do what you need with the Object
		console.log(dataForApi);
		createSurvey(dataForApi);
	}
});

function createSurvey(data) {

  $.ajax
  ({
    type: "POST",
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Content-Type", "application/json");
      xhr.setRequestHeader ("Authorization", "Basic " + btoa("elitecohen@gmail.com" + ":" + "Stanselms3"));
    },
    // crossDomain: true,
    // async: false,
    url: apiURL,
    // username: "elitecohen@gmail.com",
    // password: "Stanselms3",
    data: data,
    success: function (res){
      // console.log('api results:')
      console.log(res);
      
			loadResult(res);
    },
    error: function(err, err1) {
      $(".survey-results").html("Please refresh the page.<br><img src='loading.gif'/>");
     
    }
  });
}

function loadResult(apiResult) {

	city1_state_name = apiResult["city1"]["state"]["name"];
	city1_name = apiResult["city1"]["name"];
	city1_img = apiResult["city1"]["images"][0]["url"];
	city1_link ="http://www.eretirements.com/best-places-to-retire/"+ textConvert(city1_state_name) + "/" + textConvert(city1_name);
	console.info(city1_link);
	city2_state_name = apiResult["city2"]["state"]["name"];
	city2_name = apiResult["city2"]["name"];
	city2_img = apiResult["city2"]["images"][0]["url"];
	city2_link ="http://www.eretirements.com/best-places-to-retire/"+ textConvert(city2_state_name) + "/" + textConvert(city2_name);

	city3_state_name = apiResult["city3"]["state"]["name"];
	city3_name = apiResult["city3"]["name"];
	city3_img = apiResult["city3"]["images"][0]["url"];
	city3_link ="http://www.eretirements.com/best-places-to-retire/"+ textConvert(city3_state_name) + "/" + textConvert(city3_name);

	str = "";
	str = "<li><a href = " + city1_link + ">" +
	"<div class='image-height-fixer' >" +
	"<img src=" +city1_img +" alt>" +
	"</div>" +
	"<h3> City 1 : " +
	"<span>" + city1_name + ", " + city1_state_name + "</span>" +
	"</h3></a></li>";
	str += "<li><a href = " + city2_link + ">" +
	"<div class='image-height-fixer' >" +
	"<img src=" +city2_img +" alt>" +
	"</div>" +
	"<h3> City 2 : " +
	"<span>" + city2_name + ", " + city2_state_name + "</span>" +
	"</h3></a></li>";
	str += "<li><a href = " + city3_link + ">" +
	"<div class='image-height-fixer' >" +
	"<img src=" +city3_img +" alt>" +
	"</div>" +
	"<h3> City 3 : " +
	"<span>" + city3_name + ", " + city3_state_name + "</span>" +
	"</h3></a></li>";

	$(".top-cities").html(str);

}

function textConvert(str) {
	// debugger;
	var temp = str.split(" ");
	var result = "";
	for(var i = 0; i < temp.length; i++)
	{
		temp[i] = temp[i].toLowerCase();
		if(i != temp.length - 1)
		{
			result += temp[i] + "-";
		}
		else
		{
			result += temp[i];
		}

	}
	return result;
}
