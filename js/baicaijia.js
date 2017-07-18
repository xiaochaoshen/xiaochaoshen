$(function () {
getTit()
function getTit() {
    $.ajax({
        dataType: 'json',
        url: 'http://182.254.146.100:3000/api/getbaicaijiatitle',
        type: 'get',
        success: function (data) {
            var html = template('text1', data);
            $('.wapper').html(html);
            $('.dian').eq(0).addClass("active")
            getbaicaijiaproduct(0)
            $('.dian').click(function () {
               
                $('.dian').removeClass('active')
                $(this).addClass('active')

                var titleid=$(this).attr("data-tit")
                console.log(titleid)
                getbaicaijiaproduct(titleid)
            })
        }
    })
}
    
    function getbaicaijiaproduct(titleid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbaicaijiaproduct",
            data: {'titleid': titleid},
            success: function (data) {
                var html = template('text2', data);
                $("#main").html(html)
            }
        })

    }


   


    










})
