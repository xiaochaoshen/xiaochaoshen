$(function () {
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getcategorytitle",
        type:"get",
        success:function (data) {
           var html=template("leixin",data);
            $(".brief").html(html)
            

            $(".panel-default").click(function () {
                var id=$(this).data('id');
                console.log(id)
                $.ajax({
                    dataType:"json",
                    url:"http://182.254.146.100:3000/api/getcategory?titleid="+id,
                    type:"get",
                    success:function (data) {
                        var text=template("text",data);
                        $(".liebie").html(text)
                    }
                })
            })
           
        }
    })
    
    $(".closefix").click(function () {
        this.parentNode.style.display="none";
    })
})