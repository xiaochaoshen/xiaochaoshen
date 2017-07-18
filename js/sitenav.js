$(function () {
    $.ajax({
        url:'http://182.254.146.100:3000/api/getsitenav',
        success:function (data) {
            var html=template('text',data)
            $("#main").html(html)
        }
    })
})
