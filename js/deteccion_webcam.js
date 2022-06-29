const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        $video.srcObject = stream;
        $video.controls = true;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `¡Sucedió el siguiente error!: <p><mark>${err}</mark></p>`
        );
        console.log(`¡Sucedió el siguiente error!: ${err}`);
      });
  }
}
