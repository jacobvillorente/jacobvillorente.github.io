/**
  Developed by Prashant Shrestha (thank you so so much!!)
  + https://prashant.me
*/
var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  // Your Last.fm Username
  user: "jacobvillorente",
  // Your API key
  api_key: "5a63699f70d693d92333aaf9d2840e67",
  additional: "&format=json&limit=1"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted =
        "<img src='https://i.imgur.com/EgWjJry.png'>" + recentTrack.name;
      $("a#tracktitle")
        .html(formatted)
        .attr("href", recentTrack.url)
        .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
        .attr("target", "_blank");

      var artistFormatted =
        "<img src='https://i.imgur.com/fae5XZA.png'>" +
        recentTrack.artist["#text"];
      $("a#trackartist")
        .html(artistFormatted)
        .attr("title", "Artist : " + recentTrack.artist["#text"]);
      $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
    },
    error: function(resp) {
      $("a#tracktitle").html(
        "<img src='https://i.imgur.com/EgWjJry.png'>" + "nothing"
      );
    }
  });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
