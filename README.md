# eRetirements
The best places to retire, personalized for you.

# Description
eRetirements is a web app that matches you with your perfect retirement location. Using a short questionnaire, eRetirements allows you to answer the questions most important to you and rate how important each category of questions are to you. The website is hosted at http://eecs394-s16.github.io/eRetirements/.

# Download and Installation
No extra modules or dependencies are needed to run this project locally on your computer.
To download with git: open Terminal or Command Line and enter
```git clone https://github.com/eecs394-s16/eRetirements.git ```
To download without git: Open https://github.com/eecs394-s16/eRetirements, find the "Clone or download" button, and click "Download ZIP."
Once you have downloaded the source code, open the index.html file on your browser of choice (we suggest Google Chrome). 

# Code Example
This code gets the user's personalized results from the official eRetirements algorithm with an API call.
```
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
            temp_list.push(s_values[k]);
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
  window.location.href = "survey-results.html";
}
```


