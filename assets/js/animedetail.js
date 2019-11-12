(function (){

  var animesearch = $('#animesearch').text();
  var apiurl = "https://2ndrelaypumpstation.net/Api/v1/programs?title=" + animesearch;
  //var url = "https://2ndrelaypumpstation.net/Api/v1/programs";

console.log(apiurl);

  $.ajax({
    url: apiurl,
    method: 'GET',
    contentType: 'application/json',
    //dataType: 'json',

    //成功
    success: function(json) {
      showData(json);
    },

    //失敗
    error: function(err) {
      console.log(err);
      $(function(){
        $("#error").text("＊ 情報取得に失敗しました。 ＊");
      });
    },
  });

}) ();

function showData(json){

  console.log(json);
  console.log(json.results);

  for (var i=0, len=json.results.length; i<len; i++){
    var result = json.results[i];
  }


}
