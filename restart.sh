#!/usr/bin/bash

clear;
rm /var/log/apache2/error.log;
service apache2 restart;
