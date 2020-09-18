<div class="card">
<div class="card-header">
    <h3>${.vars['reserved-article-title'].data}</h3>
  </div>
  <video
    id="my-video"
    class="video-js card-img-top"
    controls
    preload="auto"
    poster="${Imagekbaf.getData()}"
    height="600px"
    data-setup="{'aspectRatio': '4:3', 'fluid': true}"
  >
    <source src="${Video.getData()}" type="video/mp4" />

    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
  <div class="card-body">
    <p class="card-text">${.vars['reserved-article-description'].data} </p>
  </div>
</div>

<script src="https://vjs.zencdn.net/7.8.3/video.js"></script>

<script>
var player = videojs('my-video');

player.on('ended', function() {
  alert("submit viewed");
});
</script>