```
ffmpeg -i test.h264 -vcodec copy -f mov test.mov
```

`-i` *url (input)*  
input file url

`-f` *fmt (input/output)*  
Force input or output file format. The format is normally auto detected for input files and guessed from the file extension for output files, so this option is not needed in most cases.

`-codec copy` or `-codec: copy` would copy all the streams without reencoding.
