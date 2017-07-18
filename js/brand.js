$(function () {
    var loca=window.location.search;
    var id=loca.substr(9,2)

    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getbrand",
        data:{'brandtitleid':id},
        success:function (data) {
            var html=template("leixin",data);
            $(".brief").html(html)

                $('em').each(function (i,v) {
                    $(v).text(i+1)
                })

        }
    })

    
    
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getbrandproductlist",
        data:{'brandtitleid':id,'pagesize':4},
        success:function (data) {
            var html=template("text1",data);
            $("#prolist").html(html)

            var productid=data.result[0].productId;
            console.log(productid)
            var img=data.result[0].productImg;
            console.log(img)
            var name=data.result[0].productName;
            console.log(name)
            $.ajax({
                url:'http://182.254.146.100:3000/api/getproductcom',
                data:{'productid':productid},
                success:function (data) {
                    var html=template('text2',data)
                    $("#com ").html(html)
                    $('.picn').html(img)
                    $('.titn').html(name)
                }
            })
        }
    })


})
