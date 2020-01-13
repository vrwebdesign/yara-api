"use strict";
const GOOGLE_DRIVE = "https://docs.google.com/viewerng/viewer";
const BASE_URL = "https://yara.resaa.net/pdf";
const Drive = use("Drive");
class PdfController {
  show({ response, params: { id } }) {
    response.redirect(`${GOOGLE_DRIVE}?url=${BASE_URL}/${id}.pdf/source`);
  }
  source({ response, params: { id } }) {
    let pdf = Drive.getStream(`pdf/${id}.pdf`);
    return pdf.pipe(response.response);
  }
}

module.exports = PdfController;
