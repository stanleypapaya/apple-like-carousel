$(document).ready(function(){
    var totWidth = 0
    var positions = new Array()

    $('#slides > .slide').each(function(i){  //循环遍历所有幻灯片并将它们的宽度累积相加，并储存在totWidth
        positions[i] = totWidth
        totWidth += $(this).width()
    })
    
    $('#slides').width(totWidth)       // 将slides的宽度更改为所有幻灯片宽度的和

    $('#menu > ul > li > a').click(function(e,keepScroll){
        $('li.menuItem').removeClass('active').addClass('inact')
        $(this).parent().addClass('active')

        var index = $(this).parent().index()
        $('#slides').stop().animate({
            marginLeft: -positions[index - 1] + 'px'
        },500)

        e.preventDefault()

        if(!keepScroll) clearInterval(timer)
    })

    var current = 1;
    function autoAdvance(){
        if(current == -1) return false;
        $('#menu > ul > li > a').eq(current%$('#menu > ul > li > a').length).trigger('click',[true])
        current++
    }

    var changeEvery = 5;

    var timer = setInterval(function(){
        autoAdvance()
    },changeEvery*1000)

})