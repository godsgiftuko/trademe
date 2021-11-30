const menu = $(".dropdown-modal");
const menuList = menu.find(".dropdown-modal-body ul");
const cancelBtn = menu.find('#close-dropdown-modal');

const dataList = [
    {
        title: 'refine',
        subTitle: 'refine subtitle',
        data: [
            {
                title: 'All locations',
                list: ['Category', 'Location', 'Condition', 'Shipping', 'Payment']
            }
        ]
    },
    {
        title: 'category',
        subTitle: 'Motorbikes',
        data: [
            {
                title: 'All locations',
                list: ['motor', 'motorbikes', 'bicycle', 'truck']
            }
        ]
    },
    {
        title: 'locations',
        subTitle: 'refine subtitle',
        data: [
            {
                title: 'All locations',
                list: ['New zealand', 'north island', 'northland', 'auckland']
            }
        ]
    },
    {
        title: 'condition',
        subTitle: 'refine subtitle',
        data: [
            {
                title: 'All locations',
                list: ['New zealand', 'north island', 'northland', 'auckland']
            }
        ]
    },
    {
        title: 'shipping_method',
        subTitle: 'refine subtitle',
        data: [
            {
                title: 'All locations',
                list: ['New zealand', 'north island', 'northland', 'auckland']
            }
        ]
    }
];

const clearList = () => menuList.find('li').remove();

cancelBtn.click(function () {
    menu.hide();
    clearList();
});

const addListItem = function (dataSet) {
    for (const data in dataSet) {
        const listItemId = dataSet[data];
        menuList.append(`
        <li class="dropdown-list-item nav-item d-flex px-3 py-2  justify-content-between align-items-center _black f-16" style="border-bottom: 1px solid lightgrey" clickable="true">
            <span  class="_grey">${ listItemId }</span>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet" focusable="false" role="img" aria-labelledby="tg-63ac1ac9-9918-92d4-b7e9-332d8a8ad67a"><path d="M5.29 14.71a1 1 0 0 0 1.41 0l6-6a1 1 0 0 0 0-1.41l-6-6a1 1 0 0 0-1.41 1.41L10.59 8l-5.3 5.29a1 1 0 0 0 0 1.42z"></path><title id="tg-63ac1ac9-9918-92d4-b7e9-332d8a8ad67a"></title>
        </svg>
    </li>
        `);
    }
    return dataSet;
}

const popMenu = function ({ title }) {
    const menuHeader = menu.find(".dropdown-modal-header");
    const menuHeaderNav = menuHeader.find(".dropdown-modal-header-top_nav");
    const menuHeaderNav2 = menuHeader.find(".dropdown-modal-header-bottom_nav");
    const menuTitle = menuHeaderNav.find('.dropdown-modal-header-title');
    const defTitle = menuTitle.attr('default-title');

    if (title == defTitle) {
        menuHeaderNav2.addClass('d-flex'); 
        cancelBtn.css('order', '1');
    } else {
        menuHeaderNav2.removeClass('d-flex'); 
        cancelBtn.css('order', '-1');
    }
    menuTitle.text(title);
    menu.show();

}

$('.browse-dropdown-btn button').click(function () {
    const ref = $(this).attr("data-ref");
    // const preRef = ref.split(' ').length
    //     ? ref.replace(' ', '_')
    //     : ref;

    const findDataname = (data) => (data.title == ref);
    const data = !dataList.length
        ? menuList.append(`<li class="nav-item px-3 py-2 d-flex justify-content-between align-items-center _black f-16">No data</li>`)
        : addListItem(dataList.find(findDataname).data[0].list);

    popMenu({
        title: ref
    });
});

// $(document).load(function() {
//     $.ajax({
//         url: window.location.href,
//         type: "GET",
//         data: `location`,
//         success: function (data) {
//             // $("#result").html(data);
//             console.log('working');
//             // window.history.pushState("Details", "Title", "/yourNewPage");
//         }
//     });
// })


