"use strict";
const GOOGLE_DRIVE = "https://docs.google.com/viewerng/viewer";
const BASE_URL = "https://yara.resaa.net/pdf";
const Drive = use("Drive");
class PdfController {
  show({ response, params: { id } }) {
    response.redirect(`${GOOGLE_DRIVE}?url=${BASE_URL}/${id}.pdf/source`);
  }
  async source({ response, params: { id } }) {
    const is_exist = await Drive.exists(`pdf/${id}.pdf`);
    if (!is_exist) {
      return response.status(404).send("404 not found");
    }
    let pdf = await Drive.getStream(`pdf/${id}.pdf`);
    return pdf.pipe(response.response);
  }
}

module.exports = PdfController;
