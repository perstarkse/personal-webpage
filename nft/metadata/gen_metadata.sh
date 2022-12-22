#!/bin/bash

counter=0
maxtokens=3
name='"name": "Synthwave Punk"'
description='"description": "Punk vibes with a synthwave twist! Aint no such thing as too much synth."'
image='"image": "https://ipfs.infura.io/ipfs/QmWc6YHE815F8kExchG9kd2uSsv7ZF1iQNn23bt5iKC6K3/image'


for i in $(seq $maxtokens)
    do 
        let counter++
        echo "{$name, $description, $image$counter\"}" > $counter.json 
done
