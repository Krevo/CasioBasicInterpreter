mkdir -p public/js

echo "Compile parser"
sh ./compileParser.sh

echo "Get last version number and date"
sh ./generateBuildDate.sh

echo "Generate javascript"
cat src/js/*.js public/js/cbiversion.js public/js/cbiparser.js > public/js/cbi.js
rm public/js/cbiparser.js
rm public/js/cbiversion.js

echo "Generate html"
cp src/*.html public


