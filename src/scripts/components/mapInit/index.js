import { tabs } from "../tabs";

export function mapInit () {
  var myMap;
  var placemarkCollections = {};
  var placemarkList = {};
  var shopList = [
    {
      'position': 'Офис',
      'shops': [
        {
          'coordinates': [55.731642, 37.5596046],
          'name': 'Саввинская набережная, 23с1, Москва',
          'tel': '+78007073187',
          'email': 'sale@af.expert'},
      ]
    },
    {
      'position': 'Производство',
      'shops': [
        {
          'coordinates': [58.032449, 56.144002],
          'name': 'улица Докучаева, 50, Пермь',
          'tel': '+78007073187',
          'email': 'sale@af.expert'},
      ]
    }
  ];

  let stringShopList = JSON.stringify(shopList);
  if(document.getElementById('shops')) {
    document.getElementById('shops').setAttribute('data-shops', `${stringShopList}`);
  }

  if(document.getElementById('map')) {
    ymaps.ready(init);
    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.731642, 37.559604],
        zoom: 12,
        controls: [],
        zoomMargin: [20],
      });
      var customIconLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="custom-icon"><img alt="" src="{{properties.iconImageHref}}" width="50" height="50"></div>'
      );
      for (var i = 0; i < shopList.length; i++) {
        var cityContainer = document.createElement('button');
        cityContainer.textContent = shopList[i].position;
        cityContainer.classList.add('city');
        cityContainer.classList.add('city__tab');
        cityContainer.dataset.city = i;
        document.getElementById('cities').appendChild(cityContainer);
        document.getElementById('cities').querySelector('.city__tab').classList.add('active');
        tabs({
          tabParentSelector: '.map',
          tabHeaderSelector: '.city__tab',
          tabHeaderActiveClass: 'active',
          event: 'click'
        })
        var cityCollection = new ymaps.GeoObjectCollection();
        for (var c = 0; c < shopList[i].shops.length; c++) {
          var shopInfo = shopList[i].shops[c];
          var shopPlacemark = new ymaps.Placemark(
            shopInfo.coordinates,
            {
              hintContent: shopInfo.name,
              balloonContent: shopInfo.name,
              hideIconOnBalloonOpen: false,
              iconImageHref: 'https://s1.hostingkartinok.com/uploads/thumbs/2023/08/4aa6836ae4e6e46d97d064f255288e64.png'
            },
            {
              iconLayout: customIconLayout
            }
          );

          if (!placemarkList[i]) placemarkList[i] = {};
          placemarkList[i][c] = shopPlacemark;
          cityCollection.add(shopPlacemark);
        }
        placemarkCollections[i] = cityCollection;
        myMap.geoObjects.add(cityCollection);
      }

      var selectedCityId = 0;
      var cities = document.getElementsByClassName('city');
      for (var i = 0; i < cities.length; i++) {
        cities[i].addEventListener('click', function() {
          selectedCityId = parseInt(this.dataset.city);
          myMap.setBounds(placemarkCollections[selectedCityId].getBounds(), {checkZoomRange:true}).then(function() {
            if (myMap.getZoom() > 15) myMap.setZoom(15);
          });
          showShops(selectedCityId);
        });
      }

      showShops(selectedCityId);
      document.addEventListener('click', function(event) {
        if (event.target.matches('#shops li') || event.target.matches('#shops p')) {
          var cityId = selectedCityId;
          var shopId = event.target.value;
          placemarkList[cityId][shopId].events.fire('click');
          var coordinates = shopList[cityId].shops[shopId].coordinates;
          var zoom = 15;
          myMap.setCenter(coordinates, zoom);
        }
      });
    }

    function showShops(cityId) {
      var shopsContainer = document.getElementById('shops');
      shopsContainer.innerHTML = '';
      if (shopList[cityId] && shopList[cityId].shops) {
        var shops = shopList[cityId].shops;
        for (var c = 0; c < shops.length; c++) {
          var shopContainer = document.createElement('li');
          shopContainer.value = c;
          let name = shops[c].name;
          let tel = shops[c].tel;
          let email = shops[c].email;
          shopContainer.innerHTML = '<li>' + name + '</li> <a class="map-phone" href="">' + tel + '</a> <a class="map-email" href="">' + email + '</a>';
          shopsContainer.appendChild(shopContainer);
          let email_link = document.querySelector('.map-email');
          let tel_link = document.querySelector('.map-phone');
          tel_link.href = `tel:${tel}`;
          email_link.href = `mailto:${email}`;
        }
      }
    }
  }
}
