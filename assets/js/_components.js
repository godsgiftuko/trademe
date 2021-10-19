"use strict";

$(".switch-field-label").click(function() {
    const label = $(this);
    const viewPort = window.innerWidth;
    const cardList = $('.cardlist-container').find('.card');
    const isGalleryView = label.attr('card-view') == 'gallery' ? true : false;
    const isMediumUp = viewPort >= 768 ? true : false;
    let viewMode = 'card-list-view';
    const isMediumScreenUp = viewPort >= 768 ? true : false;
    
    let rmCol = 'col-md-12 col-lg-8';
    let adCol = 'col-md-6 col-lg-4';

    if (isGalleryView) {
        if (isMediumUp) {
            rmCol = 'col-md-12 col-lg-8';
            adCol = 'col-md-6 col-lg-4';
            viewMode = '';
        }
    }

    for (const card of cardList) {
        const column = $(card).parent();
        column.removeClass(rmCol).addClass(adCol);
        $(card)[isGalleryView & isMediumUp  ? 'removeClass' : 'addClass'](viewMode);
    }
    
    
    
    // if (!isGalleryView) {
    //     for (const card of cardList) {
    //         const column = $(card).parent();
    //         column.removeClass(`col-lg-4 ${isMediumScreenUp ?? 'col-md-6'}`).addClass(`col-lg-8 ${isMediumScreenUp ?? 'col-md-8'}`);
    //         $(card).addClass('card-list-view');
    //     }
    //     return;  
    // }
    
})
// $(".switch-field-label").click(function() {
//     const label = $(this);
//     const cardList = $('.cardlist-container').find('.card');
//     const isGalleryView = label.attr('card-view') == 'gallery' ? true : false;
//     const viewPort = window.innerWidth;
//     const isMediumScreenUp = viewPort >= 768 ? true : false;
//     // const isMediumScreenDown = viewPort >= 768 ? true : false;
//     const columnList = [4,6,8];
//     // let columnCode = isGalleryView ? 4 : 8;
    
    
    
    
//     if (!isGalleryView) {
//         for (const card of cardList) {
//             const column = $(card).parent();
//             column.removeClass(`col-lg-4 ${isMediumScreenUp ?? 'col-md-6'}`).addClass(`col-lg-8 ${isMediumScreenUp ?? 'col-md-8'}`);
//             $(card).addClass('card-list-view');
//         }
//         return;  
//     }
//     for (const card of cardList) {
//         const column = $(card).parent();
//         column.removeClass('col-lg-8').addClass('col-lg-4');
//         $(card).removeClass('card-list-view');
//     }
// })
