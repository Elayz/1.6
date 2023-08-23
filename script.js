var button1 = document.querySelector('.main_button1');
var button2 = document.querySelector('.main_button2');
var button_text = button1.querySelector('.main_button_text_closed');
var expand_icon = button1.querySelector('.main_button_img');
var button_text2 = button2.querySelector('.main_button_text_closed');
var expand_icon2 = button2.querySelector('.main_button_img');
var main_block_hidden = document.querySelectorAll('.main_block_unhidden');
var main_blockTec = document.querySelector('.main_blockTec:nth-child(4)');
var feedback_call = document.querySelector('.main_panel_footer_block_right');
let feedback_massage = document.querySelector('.main_panel_footer_block_right:nth-child(2)');
var feedback_call_Mobile = document.querySelector('.main_panel_footer_block_right_mob');
let feedback_massage_Mobile = document.querySelector('.main_panel_footer_block_right_mob:nth-child(2)');
let side_panel_left = document.querySelector('.side_panel_left');
let burger = document.querySelector('.header_nav_element_left_burger');
let primePage = document.querySelector('.prime_page');
let burgerCloseButton = document.querySelector('.main_panel_header_right_close');
let sideMobilePanel = document.querySelector('.side_panel_left_mobile');
let burgerClose = document.querySelector('.main_panel_header_right');







var side_panel_right_call = document.querySelector('.side_panel_right_close_call');
var main_panel_footer_block_left_call = document.querySelector('.side_panel_right_closeButton_call');
var side_panel_right = document.querySelector('.side_panel_right_close');
var main_panel_footer_block_left = document.querySelector('.side_panel_right_closeButton');
var blureMask = document.querySelector('.BlureMask');




const media320 = window.matchMedia('(max-width: 320px) and (min-width: 1px)')
if(media320.matches) {
    burger.addEventListener('click', function () {
        primePage.style.zIndex = "-1";
        sideMobilePanel.style.zIndex = "2";
        blureMask.style.zIndex = "2";
        sideMobilePanel.style.animationName = "side_panel_left_mobile_open";
    });
    burgerCloseButton.addEventListener('click', function () {
        primePage.style.zIndex = "1";
              setTimeout(
            () =>{
                sideMobilePanel.style.zIndex = "-1";
                blureMask.style.zIndex = "-1";
            },
            0.8 * 1000
        )
        sideMobilePanel.style.animationName = "side_panel_left_mobile_close";
        blureMask.addEventListener('click', function () {

            side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";
            setTimeout(
                () =>{
                    side_panel_right_call.style.display = "none";
                },
                0.8 * 1000
            )
        });
    });
    feedback_massage_Mobile.addEventListener('click', function () {
        side_panel_right.style.display = 'block';
        side_panel_right.style.zIndex = '2';
        sideMobilePanel.style.animationName = "side_panel_left_mobile_close";
        side_panel_right.style.animationName = 'side_panel_right_open_call_anim';
    });
    main_panel_footer_block_left.addEventListener('click', function () {
        sideMobilePanel.style.animationName = "side_panel_left_mobile_open";
        side_panel_right.style.animationName = 'side_panel_right_close_call_anim';
    });
    feedback_call_Mobile.addEventListener('click', function () {
        side_panel_right_call.style.display = 'block';
        side_panel_right_call.style.zIndex = '2';
        sideMobilePanel.style.animationName = "side_panel_left_mobile_close";
        side_panel_right_call.style.animationName = 'side_panel_right_open_call_anim';

    });
    main_panel_footer_block_left_call.addEventListener('click', function () {
        sideMobilePanel.style.animationName = "side_panel_left_mobile_open";
        side_panel_right_call.style.animationName = 'side_panel_right_close_call_anim';
    });

}

const media768 = window.matchMedia('(max-width: 768px) and (min-width: 321px)')
if(media768.matches) {
    burger.addEventListener('click', function () {
            side_panel_left.style.zIndex = '2';
            primePage.style.zIndex = '-1';
            blureMask.style.zIndex = '1';
            side_panel_left.style.display = 'block';
            side_panel_left.style.animationName = 'side_panel_left_open';


    });
    burgerClose.addEventListener('click', function () {
        blureMask.style.display = '-2';
        side_panel_left.style.animationName = 'side_panel_left_close';
        setTimeout(
            () => {
                side_panel_left.style.display = 'none';
                primePage.style.zIndex = '2';
            },
            0.9 * 1000
        )


    });
    blureMask.addEventListener('click', function () {
        blureMask.style.display = '-2';
        side_panel_left.style.animationName = 'side_panel_left_close';
        setTimeout(
            () => {
                side_panel_left.style.display = 'none';
                primePage.style.zIndex = '2';
            },
            0.9 * 1000
        )
        if (getComputedStyle(side_panel_right_call).display == 'block'){
            side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";
            setTimeout(
                () =>{
                    side_panel_right_call.style.display = "none";
                },
                0.8 * 1000
            )
            side_panel_right_call.classList.remove('side_panel_right_open');
            side_panel_right_call.classList.add('side_panel_right_close');
        }
        else if (getComputedStyle(side_panel_right).display == 'block'){
            side_panel_right.style.animationName = "side_panel_right_close_call_anim";
            setTimeout(
                () =>{
                    side_panel_right.style.display = "none";
                },
                0.8 * 1000
            )
            side_panel_right.classList.remove('side_panel_right_open');
            side_panel_right.classList.add('side_panel_right_close');
        }

    });

    feedback_call.addEventListener('click', function () {
        side_panel_right_call.style.display = "block";
        blureMask.style.zIndex = "2";
        side_panel_right_call.classList.remove('side_panel_right_close_call');
        side_panel_right_call.classList.add('side_panel_right_open_call');
        side_panel_right_call.style.animationName = "side_panel_right_open_call_anim";
        side_panel_left.style.animationName = 'side_panel_left_close';

    });
    main_panel_footer_block_left_call.addEventListener('click', function () {
        side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";

        side_panel_left.style.zIndex = "2";
        side_panel_right_call.classList.remove('side_panel_right_open');
        side_panel_right_call.classList.add('side_panel_right_close');
        side_panel_left.style.animationName = 'side_panel_left_open';
    });
    feedback_massage.addEventListener('click', function () {
        side_panel_right.style.display = "block";
        blureMask.style.zIndex = "2";
        side_panel_left.style.animationName = 'side_panel_left_close';
        side_panel_right.classList.remove('side_panel_right_close');
        side_panel_right.classList.add('side_panel_right_open');
        side_panel_right.style.animationName = "side_panel_right_open_call_anim";
    });
    main_panel_footer_block_left.addEventListener('click', function () {
        side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";
        side_panel_right.style.animationName = "side_panel_right_close_call_anim";
        side_panel_left.style.animationName = 'side_panel_left_open';
        side_panel_left.style.zIndex = "2";

    });
}

const media9000 = window.matchMedia('(max-width: 9000px) and (min-width: 769px)')
if(media9000.matches) {
    feedback_call.addEventListener('click', function () {
        side_panel_right_call.style.display = "block";
        blureMask.style.zIndex = "2";
        side_panel_right_call.classList.remove('side_panel_right_close_call');
        side_panel_right_call.classList.add('side_panel_right_open_call');
        side_panel_right_call.style.animationName = "side_panel_right_open_call_anim";
    });
    main_panel_footer_block_left_call.addEventListener('click', function () {
        side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";
        setTimeout(

        )
        blureMask.style.zIndex = "-1";
        side_panel_right_call.classList.remove('side_panel_right_open');
        side_panel_right_call.classList.add('side_panel_right_close');
    });


    feedback_massage.addEventListener('click', function () {
        side_panel_right.style.display = "block";
        blureMask.style.zIndex = "2";
        side_panel_right.classList.remove('side_panel_right_close');
        side_panel_right.classList.add('side_panel_right_open');
        side_panel_right.style.animationName = "side_panel_right_open_call_anim";
    });
    main_panel_footer_block_left.addEventListener('click', function () {
        side_panel_right.style.animationName = "side_panel_right_close_call_anim";
        blureMask.style.zIndex = "-1";
        side_panel_right.classList.remove('side_panel_right_open');
        side_panel_right.classList.add('side_panel_right_close');
    });
    blureMask.addEventListener('click', function () {
        blureMask.style.zIndex = "-1";
        side_panel_right.classList.remove('side_panel_right_open');
        side_panel_right.classList.add('side_panel_right_close');
        side_panel_right_call.classList.remove('side_panel_right_open');
        side_panel_right_call.classList.add('side_panel_right_close');

        side_panel_right_call.style.animationName = "side_panel_right_close_call_anim";
        setTimeout(
            () =>{
                side_panel_right_call.style.display = "none";
            },
            0.8 * 1000
        )
        side_panel_right.style.animationName = "side_panel_right_close_call_anim";
        setTimeout(
            () =>{
                side_panel_right.style.display = "none";
            },
            0.8 * 1000
        )
    });
}





button1.addEventListener('click', function () {
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
    if(media768.matches) {

        for (let item of main_block_hidden) {
            item.classList.remove('main_block');
            item.classList.add('main_block_hidden');
        }
        if (button_text.classList.contains('main_button_text_closed')) {
            for (let item of main_block_hidden) {
                item.classList.remove('main_block_hidden');
                item.classList.add('main_block_unhidden');
            }
        } else if (button_text.classList.contains('main_button_text_opened')) {
            for (let item of main_block_hidden) {
                item.classList.remove('main_block_unhidden');
                item.classList.add('main_block_hidden');
            }
        }
    }
});
button2.addEventListener('click', function () {
    const media768 = window.matchMedia('(max-width: 768px) and (min-width: 321px)')
    if(media768.matches) {
        main_blockTec.style.display = "none";
        if (button_text2.classList.contains('main_button_text_closed')){
            button_text2.classList.remove('main_button_text_closed');
            button_text2.classList.add('main_button_text_opened');
            expand_icon2.classList.add('main_button_img_reverse');
            main_blockTec.style.display = "flex";
        }
        else if (button_text2.classList.contains('main_button_text_opened')){
            button_text2.classList.remove('main_button_text_opened');
            button_text2.classList.add('main_button_text_closed');
            expand_icon2.classList.remove('main_button_img_reverse');
            main_blockTec.style.display = "none";
        }
    }
    const media1366 = window.matchMedia('(max-width: 9000px) and (min-width: 769px)')
    if(media1366.matches) {
        if (button_text2.classList.contains('main_button_text_closed')){
            button_text2.classList.remove('main_button_text_closed');
            button_text2.classList.add('main_button_text_opened');
            expand_icon2.classList.add('main_button_img_reverse');

        }
        else if (button_text2.classList.contains('main_button_text_opened')){
            button_text2.classList.remove('main_button_text_opened');
            button_text2.classList.add('main_button_text_closed');
            expand_icon2.classList.remove('main_button_img_reverse');

        }
    }
});

new Swiper('.image-slider',{
    slidesPerView: 'auto',
    spaceBetween: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});