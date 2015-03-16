var main = function () {
  "use strict";
  
  var url = "http://namey.muffinlabs.com/name.json";
  var str = "";
  
  var names = url ;
  $.getJSON(url, function (nameyResponse) {
    for (i =0 ; i < nameyResponse.length; i++){
     str += nameyResponse[i] + " ";
    }
    $(".text").val(str);
  });
  console.log(str)
};

$(document).ready(main);
