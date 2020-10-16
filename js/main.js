$(function(){
/* создали функцию для слайдера */
   $('.photo__slider').slick({
       /* вывели кнопки с подключением бибилиотеки слайдера slick */
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>'
   });
});