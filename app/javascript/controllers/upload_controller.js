import { Controller } from "stimulus"
import { DirectUpload } from "@rails/activestorage"
const Dropzone = require("dropzone")
Dropzone.autoDiscover = false

export default class extends Controller {

  static targets = [ 'drop', 'file' ]

  uploadFile = (file, url) => {
    const upload = new DirectUpload(file, url, this)

    upload.create((error, blob) => {
      if (error) {
        console.error(file, error)
      } else {
        this.uploadSuccess(file, blob)
      }
    })
  };

  uploadSuccess(file, blob) {
    Rails.ajax({
      url: this.element.getAttribute('action'),
      type: "PATCH",
      data: `files=${blob.signed_id}`,
      dataType: 'script',
      success: function(data) {
        file.previewElement.innerHTML += ' - OK'
      },
      error: function(data) {
        file.previewElement.innerHTML += ' - ERROR - ' + data.split('Extracted source')[0]
        console.error(data)
      }
    })
  }

  connect() {
    const url = this.fileTarget.dataset.directUploadUrl

    this.myDropzone = new Dropzone(this.dropTarget, {
      url,
      autoProcessQueue: false,
      parallelUploads: 3,
      paramName: 'file',
      previewsContainer: '.dropzone-previews',
      previewTemplate: '<div><span data-dz-name></span></div>'
    });

    this.myDropzone.on('addedfile', (file) => this.uploadFile(file, url))
  }

  disconnect() {
    this.myDropzone.disable()
    this.myDropzone = null
  }

}
