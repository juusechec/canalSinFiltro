#!/bin/bash

images=$@

for file in "$@"; do
  echo "Archivo: $file"
  newname=$(sha256sum "$file")
  newname=$(echo $newname | sed 's/ .*//')
  filename="${file%.*}"
  extension="${file##*.}"
  echo "Nuevo nombre: $newname.$extension"
  mv $file $newname.$extension
done
