function searchAnime(){

  var year = $('#year').val();
  var season = $('#season').val();
  var url = "https://api.moemoe.tokyo/anime/v1/master/" + year;
  if(season){
    var url = url + "/" + season;
  }

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(json){
      $('#result').empty();
      $('#result').append('<tr><th>No.</th><th>タイトル</th></tr>');
      for(var i=0; i<json.length; i++){
        $('#result').append('<tr><td>' + Number(i+1) + '</td><td><a target=_blank href=/anime_detail?search=' + json[i].title + ">" + json[i].title + '</a></td></tr>');
        //$('#result').append('<tr><td>' + Number(i+1) + '</td><td><a target=_blank href=https://www.amazon.co.jp/gp/aw/s/ref=nb_sb_noss?rh=i%3Ainstant-video&k=' + json[i].title + ">" + json[i].title + '</a></td></tr>');
        //$('#result').append('<tr><td>' + Number(i+1) + '</td><td><a target=_blank href=https://ja.m.wikipedia.org/wiki/' + json[i].title + ">" + json[i].title + '</a></td></tr>');
      }
    }
  });

}

function changeYear(){
  $('#season').val("");
  searchAnime();
}
