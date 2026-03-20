function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('tennis hub')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function readSheet(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return JSON.stringify({ error: 'not found' });
  return JSON.stringify({ data: sheet.getDataRange().getValues() });
}

function writeSheet(sheetName, dataJson) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return JSON.stringify({ error: 'not found' });
  var rows = JSON.parse(dataJson);
  sheet.clearContents();
  rows.forEach(function(row) { sheet.appendRow(row); });
  return JSON.stringify({ ok: true });
}
