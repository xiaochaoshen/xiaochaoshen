$(function () {
    var location=window.location.search
    console.log(location)
    id=location.substr(11,2)
    console.log(id)
    $.ajax({
        datatype:'json',
        type:'get',
        url:'http://182.254.146.100:3000/api/getmoneyctrlproduct',
        data:{'productid':id},
        success:function (data) {
            var html=template('text',data)
            $('#main').html(html)
        }
    })
})