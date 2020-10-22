ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.829593, 37.371164],
        zoom: 13,
        controls: []
    });

    // // Создание метки с квадратной активной областью.
    // var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout text-center"><div class="title title-1">Контакты</div><div class="mb-3">Адрес</div><div class="mb-3">Телефон</div><div class="mb-3">Сайт</div></div></div>');
    //
    var squarePlacemark = new ymaps.Placemark(
        [55.829593, 37.371164]
    );
    map.geoObjects.add(squarePlacemark);

});
