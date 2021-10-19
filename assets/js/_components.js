'use strict'

$('.switch-field-label').click(function () {
    const label = $(this)
    const main = label.parents('main')
    const cardContainer = $('.cardlist-container')
    const cardList = cardContainer.find('.card')
    const isGalleryView = label.attr('card-view') == 'gallery' ? true : false

    let gridTemp = cardContainer.attr('grid-template')
    let listTemp = cardContainer.attr('list-template')
    let addCol = gridTemp
    let rmCol = listTemp

    if (!isGalleryView) {
        addCol = listTemp
        rmCol = gridTemp
    }

    for (const card of cardList) {
        const column = $(card).parent()
        column.removeClass(rmCol).addClass(addCol)
        $(card)[isGalleryView ? 'removeClass' : 'addClass']('card-list-view')
    }
})

$('#back_to_top-btn').click(function () {
    $('body,html').animate(
        {
            scrollTop: 0,
        },
        400
    )
    return false
})
