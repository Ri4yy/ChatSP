let btnClose = document.querySelector('.btn-close'),
    btnOpenUserGroup = document.querySelector('.btn-openuser'),
    rightSidebar = document.querySelector('.window-chat__right-sidebar')
 
// Открытие левого сайдбара с пользователями
btnOpenUserGroup.addEventListener('click', () => {
    rightSidebar.classList.remove('none')
})
// Закрытие левого сайдбара с пользователями
btnClose.addEventListener('click', () => {
    rightSidebar.classList.add('none')
})

// Модальное окно
function modal(btn, modalBody) {
    $(btn).click(function() {
        $(modalBody).show();
        return false;
    });	
    
    $('.modal__close').click(function() {
        $(this).parents(modalBody).hide();
        return false;
    });		
     
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(modalBody).hide();
        }
    });
    
    $(modalBody).click(function(e) {
        if ($(e.target).closest('.modal').length == 0) {
            $(this).hide();					
        }
    });
}
// Вызов модалки
modal('.button-delete', '.modal-delete');
modal('.btn-edit', '.modal-edit');
modal('.btn-addchat', '.modal-addchat');
modal('.btn-adduser', '.modal-adduser');

// Получениы высоты блока с чатами
function getHeightSidebar() {
    newHeightSidebar = leftSidebar.offsetHeight - 64 - 85;
    chatSidebars.forEach((chat) => {
        chat.style.maxHeight = newHeightSidebar + 'px';
    })
}

// Открытие/Закрытие левого сайдбара с группами
let btnOpenChat = document.querySelector('.btn-back'),
    btnCloseChat = document.querySelector('.btn-closechat'),
    leftChat = document.querySelector('.window-chat__left-sidebar')

let check = 0;
btnOpenChat.addEventListener('click', () => {
    if (!check) {
        leftChat.style.display = 'flex'
        btnOpenChat.querySelector('img').src = 'img/close-modal.svg'
        getHeightSidebar()

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


// Получение высоты сайдбаров
let leftSidebar = document.querySelector(".window-chat__left-sidebar"),
    chatSidebars = document.querySelectorAll('.window-chat__items'),
    listChat = document.querySelectorAll('.window-chat__item--list')

let newHeightSidebar = null;

// Скрытие чатов при клике на мобиле
window.addEventListener('DOMContentLoaded', () => {
    getHeightSidebar()

    if(window.innerWidth <= 766) {
        listChat.forEach(chat => {
            chat.addEventListener('click', () => {
                leftChat.style.display = 'none'
                btnOpenChat.querySelector('img').src = 'img/back.svg'
                check = 0
            })
        });
    }
})

window.addEventListener('resize',(e) => {
    getHeightSidebar()
});





