// qaryb

$(document).on('click', '#qaryb-git-modal-link', function () {
    console.log('hello')
    $('#qaryb-git-modal').addClass('is-active')
})

$(document).on('click', '#qaryb-git-modal .modal-close', function () {
    $('#qaryb-git-modal').removeClass('is-active')
})

$(document).on('click', '#qaryb-loc-modal-link', function () {
    console.log('hello')
    $('#qaryb-loc-modal').addClass('is-active')
})

$(document).on('click', '#qaryb-loc-modal .modal-close', function () {
    $('#qaryb-loc-modal').removeClass('is-active')
})
