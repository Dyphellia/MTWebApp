(function () {


    //右侧类目模板
    var itemTmpl = '<div class="menu-item">' +
        '<img src=$picture class="img">' +
        '<div class="menu-item-right">' +
        '<p class="item-title">$name</p>' +
        '<p class="item-desc">$description</p>' +
        '<p class="item-zan">$praise_content</p>' +
        '<p class="item-price">￥$min_price<span class="unit">/$unit</span></p>' +
        '</div>' +
        '<div class="select-content">' +
        '<div class="minus"></div>' +
        '<div class="count">$chooseCount</div>' +
        '<div class="plus"></div>' +
        '</div>' +
        '</div>'


    /*
 * 渲染列表
 * param array
 * */
    function initRightList(list) {
        $('.right-list-inner').html("")

        list.forEach(function (item, index) {
            if (!item.chooseCount) {
                item.chooseCount = 0
            }

            var str = itemTmpl.replace('$picture', item.picture)
                .replace('$name', item.name)
                .replace('$description', item.description)
                .replace('$praise_content', item.praise_content)
                .replace('$min_price', item.min_price)
                .replace('$unit', item.unit)
                .replace('$chooseCount', item.chooseCount)


            var $target = $(str)
            $target.data('itemData', item)
            $('.right-list-inner').append($target)
        })
    }


    /*
  * 渲染右侧title
  * param obj
  * */
    function initRightTitle(str) {
        $('.right-title').text(str)
    }

    function addClick() {
        $('.menu-item').on('click', '.plus', function (e) {
            var $count = $(e.currentTarget).parent().find('.count')
            $count.text(parseInt($count.text() || '0') + 1);
            var $item = $(e.currentTarget).parents().find('.menu-item').first()
            var itemData = $item.data('itemData')
            itemData.chooseCount += 1
        })
        $('.menu-item').on('click', '.minus', function (e) {
            var $count = $(e.currentTarget).parent().find('.count')

            if ($count.text()==0) return

            $count.text(parseInt($count.text() || '0') - 1);

            var $item = $(e.currentTarget).parents().find('.menu-item').first()
            var itemData = $item.data('itemData')
            itemData.chooseCount -= 1
        })
    }

    //方法入口
    function init(data) {
        initRightList(data.spus || [])
        initRightTitle(data.name)
        addClick()
    }

    window.Right = {
        refresh: init

    }
    // init()
})();