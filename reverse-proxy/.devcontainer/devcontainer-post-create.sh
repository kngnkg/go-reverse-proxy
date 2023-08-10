#!/bin/bash

apt-get update && apt-get install -y \
    vim \
    less \
    tree \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
