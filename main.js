/**
 * Created by orilo on 15.06.2019.
 */


(function ($, $win) {



// accordion function

    var $mywar;

    $(function () {
        $(".accordion").click(function () {
            console.log($(this));

            if ($($(this).find('.arrow')).hasClass('right')) {
                $($(this).find('.arrow')).removeClass('right')
                $($(this).find('.arrow')).addClass('up')
            } else {
                $($(this).find('.arrow')).removeClass('up')
                $($(this).find('.arrow')).addClass('right')
            }

            if ($($(this).find('.panel')).css("display") === "block") {
                $($(this).find('.panel')).css("max-height", "0px");
                $($(this).find('.panel')).css("display", "none");
            } else {
                $($(this).find('.panel')).css("display", "block");
                $($(this).find('.panel')).css("max-height", "50px");
            }


        });
    });

// main article change function

    let paintins = [
        {
            title: 'Kraków: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis vitae risus sed convallis. Pellentesque iaculis mauris odio, sit amet gravida elit eleifend sit amet. Etiam bibendum sem ut vulputate porta. Ut at scelerisque metus,' +
            ' at vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris placerat gravida magna quis elementum. Aenean et rhoncus velit. Etiam risus tellus, commodo in sagittis ut, volutpat vitae tortor. Duis ut' +
            ' porttitor ante. Duis finibus tellus sapien, vel ultricies dolor vestibulum in. Aliquam venenatis rutrum mi, non pulvinar tortor venenatis congue. Ut tincidunt orci sed ultricies scelerisque. In at dignissim metus. Cras eget tellus ut lacus maximus lobortis in quis diam.' +
            'Integer auctor feugiat sem eget porttitor. Aenean ullamcorper pharetra nunc, at mattis est molestie eu. Vivamus suscipit non felis eget ullamcorper. Proin pulvinar enim nec dui placerat, nec cursus nisl vehicula. Nulla odio',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: '$_20.jpg'
        },
        {
            title: 'Wrocław: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum est quis ligula consequat, at suscipit nisi auctor. Maecenas eleifend tempus tempor. Nam eget tellus nisi.' +
            ' Curabitur sapien libero, tincidunt a mi quis, faucibus rhoncus nunc. Quisque facilisis tincidunt ex et suscipit. Pellentesque tortor ligula, tincidunt in urna sit amet, accumsan gravida tortor.' +
            ' Nullam pulvinar facilisis tellus, nec pulvinar tellus. Nulla purus lectus, dictum eget sodales at, sodales at nibh. Sed ultrices dolor libero, eu convallis mi varius ut. Pellentesque ultrices metus eget' +
            ' bibendum suscipit. Nam suscipit justo id magna malesuada, sit amet tempor arcu hendrerit. Aliquam erat volutpat.Nam ante massa, vehicula a turpis quis, euismod accumsan tellus. ' +
            'Cras tristique tellus sit amet laoreet euismod. Ut molestie varius semper. Phasellus gravida rutrum arcu, ac tincidunt orci dapibus at.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'abstrakcyjne-obrazy-do-salonu-nowoczesny-obraz-505150713.jpg'
        },
        {
            title: 'Warszawa: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in enim quis neque dapibus congue. Aliquam finibus ornare est, eu vulputate nibh ultricies iaculis. Duis orci magna, ornare eu pretium sed, auctor eu ligula. Curabitur a nibh quis urna elementum tempus in vel enim. Maecenas in quam quis justo dignissim interdum. Fusce iaculis sit amet velit vel pretium. Aliquam ultrices odio vitae mauris iaculis vehicula. Ut tempus cursus dictum. Suspendisse.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'akwarela-12087247_8169298083.jpg'
        },
        {
            title: 'Gdańsk: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in erat mauris. Sed nisl nulla, tristique in interdum non, ultricies hendrerit dolor. Donec elementum justo et blandit ultrices. Proin hendrerit sem in ex pulvinar dictum. Nulla tempor vitae tellus in pretium. In convallis nulla orci, id tempor lectus pulvinar sit amet. Integer quis augue tincidunt, ultrices enim at, sagittis elit. Quisque nec suscipit nulla, ac accumsan tortor. Maecenas porttitor diam elit, vitae bibendum ante dictum pellentesque. Integer fermentum felis lacus, et vehicula justo venenatis in. Etiam placerat hendrerit enim eu.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'images.jpg'
        },
        {
            title: 'Poznań: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam lacus, blandit imperdiet lacus sagittis, luctus posuere felis. Curabitur augue lacus, porttitor non eros sed, porta tempor nibh. Nullam non consequat massa, eget rhoncus quam. Aliquam neque lacus, dignissim efficitur vulputate vel, rutrum consequat neque. Nunc gravida lorem sit amet.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'new-16.jpg'
        },
        {
            title: 'Lublin: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur purus sed lectus rhoncus tempor. Vivamus elit mi, gravida non risus non, tristique sollicitudin elit. Nulla convallis imperdiet nulla. Vivamus vel ornare diam, a gravida ipsum. Duis ultricies, arcu at ornare euismod, dui ex bibendum orci, a scelerisque justo nulla sed lorem. Etiam condimentum, leo nec pellentesque porta, leo metus porta metus, non commodo risus nunc id massa. Etiam libero ex, fermentum ut sollicitudin nec.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'plakaty-w-ramie-walking-slonia.jpg.jpg'
        },
        {
            title: 'Kołobrzeg: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur purus sed lectus rhoncus tempor. Vivamus elit mi, gravida non risus non, tristique sollicitudin elit. Nulla convallis imperdiet nulla. Vivamus vel ornare diam, a gravida ipsum. Duis ultricies, arcu at ornare euismod, dui ex bibendum orci, a scelerisque justo nulla sed lorem. Etiam condimentum, leo nec pellentesque porta, leo metus porta metus, non commodo risus nunc id massa. Etiam libero ex, fermentum ut sollicitudin nec.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'pobrane.jpg'
        },
        {
            title: 'Szczecin: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nulla in tellus suscipit dignissim quis sed felis. Proin suscipit, felis eu auctor fermentum, ante leo tincidunt metus, at interdum ligula orci in arcu. Nulla sapien magna, eleifend tempus imperdiet a, vulputate at ante. Duis ut neque nunc. Fusce ullamcorper lobortis feugiat. Nunc auctor ac urna nec faucibus. Aliquam elementum eleifend quam quis laoreet. Sed rutrum feugiat elit, et interdum dolor iaculis ac. Morbi porttitor non magna quis rhoncus. Integer ut quam venenatis, ultricies erat nec, fermentum elit. Vestibulum.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'images%20(1).jpg'
        },
        {
            title: 'Rzeszów: grafika, akwarela, malarstwo olejne',
            main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec urna massa. Praesent feugiat porta dui. Pellentesque eget lacus ligula. Aliquam finibus arcu ut elit suscipit scelerisque. Aliquam erat volutpat. Cras ullamcorper blandit mollis. Cras.',
            footer_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image_url: 'images%20(2).jpg'
        },
    ];

    $(function () {
        $('.js-paintings').click(function () {

            $($(this).parent().parent().parent().parent().find('.article-accordion')).fadeOut(100);

            let counter = $(this).attr('data-text');
            let courent_title = paintins[counter].title;
            let courent_img_url = paintins[counter].image_url;
            let courent_main_text = paintins[counter].main_text;
            let courent_fotter_text = paintins[counter].footer_text;

            if(counter<3 || counter>5) {
                console.log('tak');
                console.log($($(this).parent().parent().parent().parent().find('.main-img-right > img')));
                $($(this).parent().parent().parent().parent().find('.main-img-right > img')).css("width", "200px");
                $($(this).parent().parent().parent().parent().find('.main-img-right > img')).css("height", "150px");
            } else {
                console.log($($(this).parent().parent().parent().parent().find('.main-img-right > img')));
                $($(this).parent().parent().parent().parent().find('.main-img-right > img')).css("width", "150px");
                $($(this).parent().parent().parent().parent().find('.main-img-right > img')).css("height", "200px");
            }


            $($(this).parent().parent().parent().parent().find('.article-title')).text(courent_title);
            $($(this).parent().parent().parent().parent().find('.text')).text(courent_main_text);
            $($(this).parent().parent().parent().parent().find('.img-main-js')).attr("src", courent_img_url);
            $($(this).parent().parent().parent().parent().find('.fotter-text-js')).text(courent_fotter_text);


            $($(this).parent().parent().parent().parent().find('.article-accordion')).fadeIn(400);
        });
    });


})(jQuery, window);

