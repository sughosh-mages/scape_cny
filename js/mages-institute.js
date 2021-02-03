AFRAME.registerComponent("videohandler", {
  init: function () {
      var marker = this.el;

      this.vid = document.querySelector("#vid");

      marker.addEventListener('markerFound', function () {
          this.vid.play();
      }.bind(this));

      marker.addEventListener('markerLost', function() {
          this.vid.pause();
          this.vid.currentTime = 0;
      }.bind(this));
  }
});

window.onload = function () {
  let clickCount = 0;
  document.querySelector(".play-video-button")
    .addEventListener("click", function () {
      var vid = document.querySelector("#vid");
      let pbut = document.getElementById("playButton");
      clickCount++;
      if (clickCount % 2 != 0) {
        pbut.style.backgroundImage =
          "url('../textures/stop.png')";
        vid.play();
      } else {
        pbut.style.backgroundImage =
          "url('../textures/play.png')";
        vid.pause();
        vid.currentTime = 0;
      }
    });
};
