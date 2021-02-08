// AFRAME.registerComponent("videohandler", {
//   init: function () {
//       var marker = this.el;

//       this.vid = document.querySelector("#vid");
//       var playButton = document.getElementById("playButton");

//       marker.addEventListener('markerFound', function () {
//           this.vid.play();
//           playButton.style.backgroundImage = "url('./textures/stop.png')";
//           playButton.visibility = "visible";
//       }.bind(this));

//       marker.addEventListener('markerLost', function() {
//           this.vid.pause();
//           this.vid.currentTime = 0;
//           playButton.visibility = "hidden";
//       }.bind(this));
//   }
// });

AFRAME.registerComponent("markerhandler", {
  init: function () {
    var marker = this.el;
    var model = document.querySelector("#emodel");
    var music = document.querySelector("#emusic");
    music.components.sound.playSound();
    // var playButton = document.getElementById("playButton");

    marker.addEventListener('markerFound', function () {
      // this.model.setAttribute('animation-mixer', {loop: "once", clampWhenFinished: "true"});
      // model.setAttribute('animation-mixer', {timeScale: 1});
      model.setAttribute('animation-mixer', {clip: "*"});
    }.bind(this));

    marker.addEventListener('markerLost', function() {
      // this.model.removeAttribute('animation-mixer');
      // model.setAttribute('animation-mixer', {timeScale: 0});
      model.setAttribute('animation-mixer', {clip: "temp"});
    }.bind(this));
  }
});

window.onload = function () {
  // var model = document.querySelector("#test");
  // // model.setAttribute('animation-mixer', {timeScale: 1});

  // model.addEventListener('animation-finished', function () {
  //   console.log("animation-finished");
  //   // model.setAttribute('animation-mixer', {timeScale: 0});
  //   model.setAttribute('animation-mixer', {clip: " "});
  //   model.setAttribute('animation-mixer', {clip: "*"});
  //   // model.components.animation-mixer.playAction();
  //   // console.log(model.components.animation-mixer.mixer);
  //   // model.components.animation-mixer.playAnim();
  //   // model.components.animation-mixer.mixer.clipAction(clip, model).play();
  //   console.log("animation-finished-end");
  // });

  // model.addEventListener('animation-loop', function () {
  //   console.log("animation-loop");
  //   // model.setAttribute('animation-mixer', {timeScale: 0});
  // });
  
  // document.querySelector(".play-video-button").addEventListener("click", function () {
  //   var vid = document.querySelector("#vid");
  //   var playButton = document.getElementById("playButton");
  //   if (vid.paused) {
  //     playButton.style.backgroundImage = "url('./textures/stop.png')";
  //     vid.play();
  //   }
  //   else {
  //     playButton.style.backgroundImage = "url('./textures/play.png')";
  //     vid.pause();
  //     vid.currentTime = 0;
  //   }
  // });
};
