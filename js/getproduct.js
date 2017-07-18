$(function () {
    var location=window.location.search;
    console.log(location)
    var id=location.substr(11,1);
    var listid=location.substr(19,1);
    console.log(id)
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getproduct",
        type:'get',
        data:{'productid':id},
        success:function (data) {
            var html=template('product',data);
            $("#main").html(html)
        }
    })

    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getproductlist",
        type:'get',
        data:{'listId':id},
        success:function (data) {
            var text=template('pinpai',data);
            $('.haha').html(text)
        }
    })
    
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getproductcom",
        type:'get',
        data:{'productid':id},
        success:function (data) {
            var text1 = template('text1', data);
            $('#comment').html(text1);
        }
    })

})
