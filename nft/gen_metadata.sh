#!/bin/bash

counter=0
maxtokens=90
name='"name": "Synthwave Punk"'
description='"description": "Punk vibes with a synthwave twist! Aint no such thing as too much synth."'
image='"image": "https://synthwavepunk.infura-ipfs.io/ipfs/QmeqKgVqbSCihprysnZbqXBK1WKvKLpSXAq62x6rkMcDqG/'


for i in $(seq $maxtokens)
    do 
        let counter++
        echo "{$name, $description, $image$counter.png\"}" > $counter 
done
