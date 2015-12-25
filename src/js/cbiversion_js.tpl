var CBI_VERSION = "v0.8.0";
var CBI_BUILD_DATE = "xxx";

function cbiGetVersion(withBuildDate) {
  toReturn = "Casio Basic Interpreter "+CBI_VERSION;
  if (withBuildDate) {
    toReturn += ' (built: '+CBI_BUILD_DATE+')';
  }
  return toReturn;
}
