"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
// const pdf2html = require("pdf2html");
// var pdftohtml = require("pdftohtmljs");

// /** @type {import('@adonisjs/drive/src/DriveManager')} */
// const Drive = use("Drive");

Route.resource("/users", "UserController");
Route.get("view-pdf/:id", "PdfController.show");
Route.get("pdf/:id/source", "PdfController.source");
Route.get("pdfreader/:id", ({ view, params: { id } }) => {
  // var converter = new pdftohtml("./public/pdf/1.pdf", "sample.html");
  // converter
  //   .convert("ipad")
  //   .then(function() {
  //     console.log("Success");
  //   })
  //   .catch(function(err) {
  //     console.error("Conversion error: " + err);
  //   });
  // return "<h1>hello</h1>";
  return view.render("pdfreader", { id });
});
