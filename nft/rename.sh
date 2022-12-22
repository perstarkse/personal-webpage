#!/bin/bash

counter=0;

for f in images/*; do
  counter +=1 
  mv "$f" "$counter"
done
