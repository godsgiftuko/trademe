$('.moreOpt').click(function(e) {
    const optContent = $('.moreOpt-content');
    $(this).find('span').text(!optContent.hasClass('d-none') ? 'More options' : 'Fewer options');
    $(this).find('i').toggleClass('rotate-180');
    optContent.toggleClass('d-none');
})

$('#my_bottom_tab li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    const _parents = $(this).parents('.hero_bottom_nav');
    const actBtn = _parents.find('button');
    const selects = _parents.find('.search_box_form select');
    
    // actBtn.text( ? actBtn.text())
    // data-id="odometer"

    // for (const select of selects) {
    //     console.log(selects)
    // }
    // console.log(odometer);
})

$("input[type=text]").keypress(function() {
    $(this).siblings(".clear-input").show();
})

$(".clear-input").click(function() {
    $(this).hide().siblings('input[type=text]').val('');
})



