let btnClose = document.querySelector('.btn-close'),
    rightSidebar = document.querySelector('.window-chat__right-sidebar')


btnClose.addEventListener('click', () => {
    rightSidebar.classList.add('none')
})

// let btnDelete = document.querySelector('.button-delete'),
//     btnEdit = document.querySelector('.btn-edit')
    

// let popupFade = document.querySelector('.popup-fade'),
//     modalEdit = document.querySelector('.modal-edit')

// Модальное окно
function modal(btn, modalBody) {
    $(btn).click(function() {
        $(modalBody).show();
        // $('html').addClass('overflow-hidden');
        return false;
    });	
    
    $('.modal__close').click(function() {
        $(this).parents(modalBody).hide();
        // $('html').removeClass('overflow-hidden');
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(modalBody).hide();
            // $('html').removeClass('overflow-hidden');
        }
    });
    
    $(modalBody).click(function(e) {
        if ($(e.target).closest('.modal').length == 0) {
            $(this).hide();					
            // $('html').removeClass('overflow-hidden');
        }
    });
}

modal('.button-delete', '.modal-delete');
modal('.btn-edit', '.modal-edit');
modal('.btn-addchat', '.modal-addchat');
modal('.btn-adduser', '.modal-adduser');

let btnOpenChat = document.querySelector('.btn-back'),
    btnCloseChat = document.querySelector('.btn-closechat'),
    leftChat = document.querySelector('.window-chat__left-sidebar')

let check = 0;
btnOpenChat.addEventListener('click', () => {
    if (!check) {
        leftChat.style.display = 'flex'
        btnOpenChat.querySelector('img').src = 'img/close-modal.svg'
        check = 1
    } else {
        leftChat.style.display = 'none'
        btnOpenChat.querySelector('img').src = 'img/back.svg'
        check = 0
    }
})


btnCloseChat.addEventListener('click', () => {
    leftChat.style.display = 'none'
    btnOpenChat.querySelector('img').src = 'img/back.svg'
    check = 0
})


let btnMore = document.querySelector('.btn-more'),
    settingsList = document.querySelector('.window-chat__group-btn')

btnMore.addEventListener('click', () => {
    settingsList.classList.toggle('open')
})


