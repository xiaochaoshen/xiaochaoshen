
$(function () {
    $.ajax({
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        type:"get",
        success:function (data) {
            var html=template("shangpin",data);
            $("#chanpin").html(html);
            var num2=data.totalCount/10;
            console.log(num2);
            var num3=Math.ceil(num2);
            console.log(num3)
            for (var i = 0; i < num3; i++) {
                var $li = $('<option>' + (i + 1) + '/' + num3 + '</option>')
                $('#selectPage>select').append($li)
            }

            //选择页面

            $('#slt ').on('change', function () {
                var pageids = parseInt($('#slt> option:selected').text())
                console.log(pageids)
                
                function list(pageids) {
                    $.ajax({
                        url: 'http://182.254.146.100:3000/api/getmoneyctrl',
                        type: 'get',
                        data: { 'pageid': pageids},
                        success: function (data) {
                            var html = template('shangpin', data);
                            $('#chanpin').html(html)
                        }
                    })
                }
                list( pageids)
            })
        }
    })
})