#! /bin/bash

#ls -la 1>file_1.txt 2>file_2.txt
#ls +la 1>file_1.txt 2>file_2.txt
#ls +la >file.txt 2>&1
ls +la >&file.txt
