$(function () {
    $.ajax({
        dataType:"json",
        url:"http://182.254.146.100:3000/api/getinlanddiscount",
        type:'get',
        success:function (data) {
            var html=template('text',data);
            $("#main").html(html)
        }
    })
    
    
    
    
    
    
    
    
})
