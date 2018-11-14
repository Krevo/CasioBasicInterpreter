#!/bin/bash

BUILD_DATE=`date "+%Y-%m-%d"`
sed 's/\(var CBI_BUILD_DATE\)\(.*\)/\1 = "'${BUILD_DATE}'";/g' src/js/cbiversion.js_ > public/js/cbiversion.js

now=`date "+%s"`
firstAug2014=`date -d '1 Aug 2014' "+%s"`
REVISION="r$(($now - $firstAug2014))"
sed -i 's/\(var CBI_VERSION\)\(.*\)/\1 = "'${REVISION}'";/g' public/js/cbiversion.js