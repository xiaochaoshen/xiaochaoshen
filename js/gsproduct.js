$(function () {
    $('.dropdown-toggle').dropdown()
    var shopid=0;
    var areaid=0;
    var shopname="";
    var areaname="";
    getproduct(0, 0)

    $.ajax({
        url: 'http://182.254.146.100:3000/api/getgsshop',
        success: function (data) {
            var html = template('text1', data);
            $('#test1').html(html)
            $(".dian1").click(function () {
                var shopid = $(this).attr("data-shopid")
                console.log(shopid)

                getproduct(shopid,areaid)
                shopname=$(this).text()
                console.log(shopname)
                $("#gai1").html(shopname)
            })
        }
    })

    $.ajax({
        url: 'http://182.254.146.100:3000/api/getgsshoparea',
        success: function (data) {
            var html = template('text2', data);
            $('#test2').html(html)
            $(".dian2").click(function () {

               var areaid=$(this).attr("data-area")
                console.log(areaid)
                getproduct(shopid,areaid)

              var  aeraname1=String($(this).text())
                console.log(aeraname1)
             var  areaname=aeraname1.substr(5,2)
                console.log(areaname)
                $("#gai2").text(areaname)

            })

        }
    })


    function getproduct(shopid, areaid) {
        $.ajax({
            url: 'http://182.254.146.100:3000/api/getgsproduct',
            data: {'shopid': shopid, 'areaid': areaid},
            success: function (data) {
                var html = template('text3', data);
                $('#main').html(html)
            }
        })

    }


})