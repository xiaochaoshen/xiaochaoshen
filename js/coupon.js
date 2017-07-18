$(function () {
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcoupon',
        success:function (data) {
            var html=template('text1',data);
            $("#main").html(html)
        }

    })
})
