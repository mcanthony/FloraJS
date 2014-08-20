#!/bin/bash
F="index.html"
if [ -f $F ]
then
  rm $F
fi
touch $F
(
  echo "<!DOCTYPE html><html><head><title>$1 | $2</title>"
  echo "<meta name='viewport' content = 'user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0' />"
  echo "</head><body>"
  echo "<h1>$1</h1>"
  echo "<h3>$2</h3>"
  find . -name "*.html" -type f -exec basename "{}" \; | sed 's/\(.*\)/<p><a href="\1">\1<\/a><\/p>/'
  echo "</body></html>"
) > $F
exit
