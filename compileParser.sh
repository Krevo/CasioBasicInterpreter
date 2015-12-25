# Get a temp filename
TMPFILE=`mktemp` || exit 1

# Add nodes and labels args to the __parse(..) function
sed "s/parse( src, err_off, err_la )/parse( src, err_off, err_la, prgNodes, prgLabels )/g" lib/jscc/driver_web.js_ > $TMPFILE

rhino lib/jscc/jscc.js -o public/js/cbiparser.js -t $TMPFILE cbi_grammar.par

# Delete temporary file
rm -f $TMPFILE

