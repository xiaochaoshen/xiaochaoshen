$(function () {

    var location = decodeURIComponent(window.location.search);
    console.log(location)
    var ids = location.substr(12, 1)
    var pageids = 1;
    $.ajax({
        dataType: "json",
        url: "http://182.254.146.100:3000/api/getcategorybyid",
        type: "get",
        data: {categoryid: ids},
        success: function (data) {
            var html = template('product_02', data);
            console.log(data);
            $('.haha').append(html)
        }
    })

    $.ajax({
        dataType: "json",
        url: "http://182.254.146.100:3000/api/getproductlist",
        type: "get",
        data: {'categoryid': ids, 'pageid': pageids},
        success: function (data) {
            var html = template('product_01', data);
            console.log(data);
            $('#main').append(html)
            var num2 = data.totalCount / 10;

            var num3 = Math.ceil(num2);
            var max = num3;
            for (var i = 0; i < num3; i++) {
                var $li = $('<option>' + (i + 1) + '/' + num3 + '</option>')
                $('#selectPage>select').append($li)
            }
            function list(ids,pageids) {
                $.ajax({
                    url: 'http://182.254.146.100:3000/api/getproductlist',
                    type: 'get',
                    data: {'categoryid': ids, 'pageid': pageids},
                    success: function (data) {
                        var html = template('product_01', data);
                        $('#main').html(html)
                    }
                })
            }

            if(pageids<=1){
                pageids==2;
            }else if(pageids>=max){
                pageids=max-1;
            }
            //上一页按钮
            $('#btn-pre').click(function () {
                var pageids = parseInt($('#slt> option:selected').text())
                    var pagep=pageids-1;
                    list(ids,pagep)


            })
            //选择页面
            $('#slt ').on('change', function () {
                var pageids = parseInt($('#slt> option:selected').text())
                console.log(pageids)
                list(ids, pageids)

            })

        }
    })





    $(".closefix").click(function () {
        this.parentNode.style.display = "none";
    })

})
