$(function () {
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getbrandtitle",
        type:"get",
        success:function (data) {
            var html=template("leixin",data);
            $(".brief").html(html)



        }
    })

    $(".closefix").click(function () {
        this.parentNode.style.display="none";
    })
})