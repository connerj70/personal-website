---
path: "/blog/ds-store-removal"
title: "Golang: How To Programatically Remove DS Store files and MACOSX folders From Zip Archives"
date: "2020-01-03"
featuredImage: "../images/zipo.jpg"
---

Last week I was trying to upload a zip file to a third party api from my golang web server.
<br></br>
I ran into the problem of this third party api not allowing zip archives that contain DS Store files or MACOSX folders to be uploaded
<br></br>
This prompted me to write a quick golang program that would remove DS Store files and MACOSX folders from zip archives.
<br></br>
I would like to share my process for coming up with this program and some of the gotchas that I ran into along the way.
