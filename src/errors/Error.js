
class ImageApiError extends Error {
    constructor(message) {
      super(message);
      this.message = message;
    }
  }
  ImageApiError.prototype.name = 'ImageApiError'
  module.exports = ImageApiError;