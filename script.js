var button = document.querySelector('.main_button');
var button_text = button.querySelector('.main_button_text_closed');
var expand_icon = button.querySelector('.main_button_img');
var main_block_hidden = document.querySelectorAll('.main_block_unhidden');
var main_block_hidden2 =  document.querySelectorAll('.main_block:nth-child(n+7)');

button.addEventListener('click', function () {
    if (button_text.classList.contains('main_button_text_closed')){
        button_text.classList.remove('main_button_text_closed');
        button_text.classList.add('main_button_text_opened');
        expand_icon.classList.add('main_button_img_reverse');

        for (let item of main_block_hidden){
            item.classList.remove('main_block_unhidden');
            item.classList.add('main_block_hidden');
        }
    }
    else if (button_text.classList.contains('main_button_text_opened')){
        button_text.classList.remove('main_button_text_opened');
        button_text.classList.add('main_button_text_closed');
        expand_icon.classList.remove('main_button_img_reverse');

        for (let item of main_block_hidden){
            item.classList.remove('main_block_hidden');
            item.classList.add('main_block_unhidden');
        }
    }
    const media768 = window.matchMedia('(max-width: 768px) and (min-width: 321px)')
    const media1120 = window.matchMedia('(max-width: 1120px)')
    if(media768.matches) {
        for (let item of main_block_hidden2) {
            item.classList.remove('main_block');
            item.classList.add('main_block_hidden');
        }
        if (button_text.classList.contains('main_button_text_closed')) {
            for (let item of main_block_hidden2) {
                item.classList.remove('main_block_hidden');
                item.classList.add('main_block_unhidden');
            }
        } else if (button_text.classList.contains('main_button_text_opened')) {
            for (let item of main_block_hidden2) {
                item.classList.remove('main_block_unhidden');
                item.classList.add('main_block_hidden');
            }
        }
    }
});

new Swiper('.image-slider',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});