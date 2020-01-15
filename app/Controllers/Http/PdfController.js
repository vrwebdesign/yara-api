"use strict";
const GOOGLE_DRIVE = "https://docs.google.com/viewerng/viewer";
const BASE_URL = "https://yara.resaa.net/pdf";
const Drive = use("Drive");
const fs = use("fs");
class PdfController {
  show({ response, params: { id } }) {
    response.redirect(`/pdfreader?url=${BASE_URL}/${id}.pdf`);
  }
  async source({ response, params: { id } }) {
    const is_exist = await Drive.exists(`pdf/${id}.pdf`);
    if (!is_exist) {
      return response.status(404).send("404 not found");
    }
    response.safeHeader("Content-type", "application/pdf");
    // response.safeHeader(
    //   "Content-Disposition",
    //   `attachment; filename=${id}.pdf`
    // );
    let pdf = await Drive.getStream(`pdf/${id}.pdf`);
    return pdf.pipe(response.response);
    let stream = await Drive.getStream(`pdf/${id}.pdf`);
    return stream.pipe(response.response);
    // let stream = fs.readFile(`./static/pdf/${id}.pdf`, (err, data) => {
    //   return response.send(data);
    // });
    // return response.send(pdf);
  }
}

module.exports = PdfController;
