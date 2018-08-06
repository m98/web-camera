export class Dom {
  addCameraToPage() {
    document.body.appendChild(this._createVideoElement())
    // this._createCanvasElement();
    const videoElement: HTMLVideoElement = document.getElementById(
      '___webCamera-video'
    ) as HTMLVideoElement

    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      videoElement.srcObject = stream
      videoElement.play()
    })
  }

  protected _createVideoElement() {
    let videoTag: HTMLVideoElement = document.createElement('video')
    videoTag.id = '___webCamera-video'
    videoTag.setAttribute('width', '640')
    videoTag.setAttribute('height', '480')
    videoTag.setAttribute('autoplay', 'true')
    return videoTag
  }

  protected _createCanvasElement() {
    let canvasTag: HTMLCanvasElement = document.createElement('canvas')
    canvasTag.id = '___webCamera-canvas'
    canvasTag.setAttribute('width', '640')
    canvasTag.setAttribute('height', '480')
    return canvasTag
  }
}
