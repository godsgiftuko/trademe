$('.form-card').submit(function (e) {
    e.preventDefault()

    const form = $(this).find('form')
    const inputs = form.find('.form-group input')
    // isInput(inputs)
    // nextStep($(this))

    $(this).addClass('d-none').next().removeClass('d-none')
})

$('.form-group input').keypress(function () {
    $(this).parents('.form-group').find('small').hide()
})

$('.toStep1').click(function () {
    stepWise($(this))
})

function isInput(inputs) {
    const list = []
    const showError = (element) =>
        $(element).parents('.form-group').find('small').hide()

    for (const input of inputs) {
        const each = $(input)
        const attr = each.attr('type')

        if (attr == 'checkbox' || attr == 'radio') {
            const radio = !each.is(':checked')
                ? list.push(each.attr('type'))
                : each
            // showError(radio);
        } else {
            // console.log(each);
            !each.val() ? list.push(each.attr('type')) : false
            each.parents('.form-group').find('small').show()
        }
    }
    console.log(list)
}

function isEmpty(input) {
    let value
    switch (input.attr('type')) {
        case 'text' || 'email' || 'password':
            // console.log(input);
            value = !input.val() ? false : input.val()
            break
    }
    return value
}

function stepWise(element) {
    const step = element.parents('.form-card')
    step.addClass('d-none')

    if (!step.prev().length) {
        step.next().removeClass('d-none')
        return
    }

    step.prev().removeClass('d-none')
}

$('#loginFormModal form').submit(function (e) {
    e.preventDefault()

    // if ()

    $.ajax({
        url: window.location.href,
        data,
        onBefore() {
            $(this).find('button').text('Loading...')
        },
        success(response) {
            console.log(response)
        },
        error(response) {
            console.log(response)
        },
    })
})
