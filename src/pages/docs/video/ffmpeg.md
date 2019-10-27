```
ffmpeg -i test.h264 -vcodec copy -f mp4 test.mp4
```

```
ffmpeg -i test.h264 -vcodec h264 -preset slower test.mp4
```

`ultrafast`, `superfast`, `veryfast`,`faster`, `fast`, `medium`, `slow`, `slower`, `veryslow`, `placebo`

`-i` *url (input)*  
input file url

`-f` *fmt (input/output)*  
Force input or output file format. The format is normally auto detected for input files and guessed from the file extension for output files, so this option is not needed in most cases.

`-codec copy` or `-codec: copy` would copy all the streams without reencoding.
