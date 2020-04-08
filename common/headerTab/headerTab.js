(function () {

    var itemTmpl = '<a class="$key tab-item" href="../$key/$key.html">$text</a>'

    function init() {
        var items = [
            {
                key: 'menu',
                text: '点餐'
            }, {
                key: 'comment',
                text: "评价"
            }, {
                key: 'restaurant',
                text: '商家'
            }
        ]

        var str = ''
        items.forEach(function (item, index) {
            str += itemTmpl.replace(/\$key/g, item.key)
                .replace('$text', item.text)
        })
        $('.tab-bar').append($(str))

        //获取当前页面的url来获取key值
        var arr= window.location.pathname.split('/')
        var page = arr[arr.length-1].replace('.html','')

        //将当前的页面对应的key值的a元素添加active的类
        $('a.'+page).addClass('active')
    }

    init()
})();