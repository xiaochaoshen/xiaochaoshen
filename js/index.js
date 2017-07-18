$(function () {
    $.ajax({
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getindexmenu",
        type:"get",
        success:function (data) {

            var html=template("item",data);
            $("#menu").html(html);
            $(".row >li:nth-last-of-type(-n+4)").css('display','none')
            $(".row>li:nth-of-type(8)").on('click',function () {
                $(".row>li:nth-last-of-type(-n+4)").toggle(200)
            })
        }
    })
    $.ajax({
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        type:"get",
        success:function (data) {

            var html=template("shangpin",data);
            $("#chanpin").html(html);
        }
    })




})

