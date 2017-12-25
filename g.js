var weburl = document.scripts;
//js[js.length - 1] 就是当前的js文件的路径
weburl = weburl[weburl.length - 1].src.substring(0, weburl[weburl.length - 1].src.lastIndexOf("/")+1);
//输出当前js文件所在的目录
//console.info(js);



    //var c;
    //var a = document.scripts;
    //var b = a[a.length - 1]
    //c = b.src.substring(0, b.src.lastIndexOf("/") + 1);

//本模式运行效率高，而且也可以用于插件判断路径
function jspath(){var a=document.scripts,b=a[a.length-1],c=b.src,d=c.substring(0,c.lastIndexOf("/")+1);return d}var jspath=jspath();

//一般用于某种封装的插件，当插件需要引用静态资源时，可用本函数迅速获得当前路径,但缺点是需要判断JS文件名。
function pjspath(){var a=document.scripts,p;for(var i=a.length;i>0;i--){if(a[i-1].src.indexOf("g.js")>-1){p=a[i-1].src.substring(0,a[i-1].src.lastIndexOf("/")+1)}}return p}var pjspath=pjspath();

//动态创建CSS
function crtcss(c){var a=document.getElementsByTagName("HEAD").item(0),b=document.createElement("link");b.href=c;b.rel="stylesheet";b.type="text/css";a.appendChild(b)}


