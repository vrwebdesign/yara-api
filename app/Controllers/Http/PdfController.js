'use strict';
const GOOGLE_DRIVE = 'https://docs.google.com/viewerng/viewer';
const BASE_URL = 'https://resaa.net/pdfs';
// const BASE_URL = 'https://www.nps.org.au/assets';
class PdfController {
  show({ response, params: { id } }) {
    response.redirect(`${GOOGLE_DRIVE}?url=${BASE_URL}/${id}.pdf`);
  }
}

module.exports = PdfController;
