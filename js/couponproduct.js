$(function () {
    var location=window.location.search;
    // console.log(location)
    var id=location.substr(10,1)
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcouponproduct',
        data:{'couponid':id},
        success:function (data) {
            var htnl=template('text',data)
            $("#main").html(htnl)
            $('#main li').on('click',function () {
                $('#zhezhao').css({'display':'block'});
                console.log(2)
               var index=$(this).index()
                var img=data.result[index].couponProductImg;
                console.log(img)
                $('#zhezhao').html(img)

                $('#zhezhao').on('click',function () {
                    $('#zhezhao').css({'display':'none'})
                })

            })
        }
    })




})
