# Get a temp filename
TMPFILE=`mktemp` || exit 1

# Add nodes and labels args to the __parse(..) function
sed "s/parse( src, err_off, err_la )/parse( src, err_off, err_la, prgNodes, prgLabels )/g" jscc/driver_web.js_ > $TMPFILE

rhino jscc/jscc.js -o www/js/cbiparser.js -t $TMPFILE cbi_grammar.par

# Delete temporary file
rm -f $TMPFILE

