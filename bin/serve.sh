#!/bin/sh

docker run --rm --volume="$PWD:/srv/jekyll" -it -p 4000:4000 jekyll/jekyll:4.1.0 jekyll serve
