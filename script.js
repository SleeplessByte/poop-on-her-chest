+function() {

  document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    var image = document.getElementsByTagName("img")[0];

    // TODO wait until loadeds
    var w = image.width;
    var r = canvas.height / canvas.width;
    var h = image.height;

    ctx.drawImage( image, 0, 0, w, h );
  })

}()
