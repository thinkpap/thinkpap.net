/*
$("").thinkads({
    folder: [{ res: "", url: "", word: "", mres: "", murl: "", mword: "" }],
    rand: 1,
    model: "image", display: "", width: "", height: "", margin: "", pos: 1,
    mmodel: "image", mdisplay: "", mwidth: "", mheight: "", mmargin: "", mimgcel: 0.3
});
 */


$(function ()
{
$("#art_tad_a").thinkads({
  folder: [
  {"res": "image/11001201.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/","mres": "image/mob1.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/"},
  {"res": "image/11001202.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/","mres": "image/mob2.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/"}],
  rand: 1,  margin: "15px auto 0px auto"

});


    $("#art_rad_a").thinkads({
        folder: [
        {"res": "image/mob2.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/", "mres": "image/mob1.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/" },
        {"res": "image/mob1.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/","mres": "image/mob2.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/"}],
        rand: 1,mmargin: "10px 0 5px 0"
    });
    $("#art_rad_dd").thinkads({
       
    });

    $("#art_fad_a").thinkads({
        folder: [
        {"res": "image/11001201.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/","mres": "image/mob1.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/"},
        {"res": "image/11001202.jpg", "url": "http://www.cnhelpca.com/industryspecial/maitakea/","mres": "image/mob2.jpg", "murl": "http://www.cnhelpca.com/industryspecial/maitakea/"
        }],
        rand: 1,
        margin: "0px auto 0px auto",
        mdisplay: "none", mmargin: "15px 0 25px 0"
    });

})