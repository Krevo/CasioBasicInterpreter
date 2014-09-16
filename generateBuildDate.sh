#!/bin/bash

FIND='var CBI_BUILD_DATE'
REPLACE=`date +%F`
echo $FIND;
echo $REPLACE;
sed -i 's/\(var CBI_BUILD_DATE\)\(.*\)/\1 = "'${REPLACE}'";/g' www/js/cbihelper.js
