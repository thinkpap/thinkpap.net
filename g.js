var weburl = document.scripts;
//js[js.length - 1] ���ǵ�ǰ��js�ļ���·��
weburl = weburl[weburl.length - 1].src.substring(0, weburl[weburl.length - 1].src.lastIndexOf("/")+1);
//�����ǰjs�ļ����ڵ�Ŀ¼
//console.info(js);



    //var c;
    //var a = document.scripts;
    //var b = a[a.length - 1]
    //c = b.src.substring(0, b.src.lastIndexOf("/") + 1);

//��ģʽ����Ч�ʸߣ�����Ҳ�������ڲ���ж�·��
function jspath(){var a=document.scripts,b=a[a.length-1],c=b.src,d=c.substring(0,c.lastIndexOf("/")+1);return d}var jspath=jspath();

//һ������ĳ�ַ�װ�Ĳ�����������Ҫ���þ�̬��Դʱ�����ñ�����Ѹ�ٻ�õ�ǰ·��,��ȱ������Ҫ�ж�JS�ļ�����
function pjspath(){var a=document.scripts,p;for(var i=a.length;i>0;i--){if(a[i-1].src.indexOf("g.js")>-1){p=a[i-1].src.substring(0,a[i-1].src.lastIndexOf("/")+1)}}return p}var pjspath=pjspath();

//��̬����CSS
function crtcss(c){var a=document.getElementsByTagName("HEAD").item(0),b=document.createElement("link");b.href=c;b.rel="stylesheet";b.type="text/css";a.appendChild(b)}


