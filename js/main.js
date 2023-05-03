$(document).ready(function () {
  var jam = new Date().getHours();
  var pukul = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
  var pesan;
  var pagi = "Good Morning";
  var siang = "Good Afternoon";
  var sore = "Good Afternoon";
  var malam = "Good Evening ";

  if (jam >= 6 && jam < 10) {
    pesan = pagi;
  } else if (jam >= 10 && jam < 15) {
    pesan = siang;
  } else if (jam >= 15 && jam < 18) {
    pesan = sore;
  } else if (jam >= 18) {
    pesan = malam;
  }
  $("#pukul").append(pesan);
  $("#waktu").append(pukul);
});
