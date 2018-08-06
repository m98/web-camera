import { log } from './utils'
import { VideoInputs } from './models/VideoInput.model'

export class Browser {
  /**
   * Checks if the current browser supports camera
   * @returns {boolean}
   */
  supportCamera() {
    /**
     * `_navigator` is the `navigator` object; we assign it to `_navigator` to make type checking
     * available
     * @type {Navigator}
     * @private
     */
    const _navigator: Navigator | any = navigator
    return !!(
      _navigator.getUserMedia ||
      _navigator.webkitGetUserMedia ||
      _navigator.mozGetUserMedia ||
      _navigator.msGetUserMedia
    )
  }

  /**
   * Get list of available cameras
   * @param {(data: (VideoInputs | null), error: (Error | null)) => void} cb
   * @link If you're not familiar with callback style, please read this document:
   * https://basarat.gitbooks.io/typescript/docs/promise.html
   */
  getCameras(cb: (data: VideoInputs | null, error: Error | null) => void) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      log('enumerateDevices() not supported.', 'warn')
      return
    }

    const videoInputs: VideoInputs = []
    // List cameras and microphones:
    navigator.mediaDevices
      .enumerateDevices()
      .then(function(devices) {
        devices.forEach(function(device) {
          if (device.kind === 'videoinput') {
            videoInputs.push({
              deviceId: device.deviceId,
              groupId: device.groupId
            })
          }
        })

        cb(videoInputs, null)
      })
      .catch(function(err) {
        log(err.name + ': ' + err.message, 'warn')
        cb(null, err)
      })
  }

  /*getAccess() {

  }*/
}
