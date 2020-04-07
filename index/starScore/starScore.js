(function () {

    //商家得分模板
    var itemTel = '<div class="star-score">$startstr</div>'

    function _getStars() {
        var _score = this.score.toString()
        var scoreArray = _score.split('.')
        //  满星
        var fullstar = parseInt(scoreArray[0])
        // 半星
        var halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0
        //  零星
        var nullstar = 5 - fullstar - halfstar

        var starstr = ''
        for (var i = 0; i < fullstar; i++) {
            starstr+='<div class="star fullstar"></div>'
        }
        for (var j = 0; i < halfstar; j++) {
            starstr+='<div class="star halfstar"></div>'
        }
        for (var k = 0; i < nullstar; k++) {
            starstr+='<div class="star nullstar"></div>'
        }
        return itemTel.replace('$startstr',starstr)
    }

    window.StarScore = function (score) {
        this.score = score || " "
        this.getStars = _getStars;
    }
})();