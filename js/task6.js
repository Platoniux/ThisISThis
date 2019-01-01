;(function() {
  var allImage = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var currentSlide = 0;
  var newSlidesForTest = {image: 'ant.jpg', alt: 'Ant'};
  var arrayForSlider = [{image: 'girl.jpg', alt: 'Girl'}, {image: 'wtf.jpg', alt: 'WHAT?'}];

  console.log(nextSlide());
  console.log(priviousSlide());
  console.log(switchSlide(1));
  console.log(getInfoAboutSlide(currentSlide));
  console.log(addNewSlide(newSlidesForTest, 0));
  console.log(deleteSlide(1));

  function nextSlide() {
    if (currentSlide === (allImage.length - 1)) {
      currentSlide = 0;
      return allImage[currentSlide];
    }
    ++currentSlide;
    return allImage[currentSlide];
  }

  function priviousSlide() {
    if(currentSlide > 0) {
      --currentSlide;
      return allImage[currentSlide];
    }
    currentSlide = allImage.length - 1;
    return allImage[currentSlide];
  }

  function switchSlide(n) {
    if(n <= allImage.length) {
      currentSlide = n - 1;
      return allImage[currentSlide];
    }
    currentSlide = allImage.length - 1;
    return allImage[currentSlide];
  }

  function getInfoAboutSlide(a) {
    if (a < allImage.length) {
      var ind = a;
      console.log(allImage[ind].alt);
    } else {
      console.log('There is no element with this index');
    }
  }

  function addNewSlide(obj, index) {
    if (index < allImage.length) {
      currentSlide = index;
      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          addNewSlide(obj[i], currentSlide);
          ++currentSlide;
        }
      } else {
        allImage.splice(currentSlide, 0, obj);
      }
    } else {
      currentSlide = allImage.length - 1;
      allImage.push(obj);
    }
    return allImage;
  }

  function deleteSlide(index) {
    if (index < allImage.length) {
      currentSlide = index;
      allImage.splice(currentSlide, 1);
    } else {
      console.log('There is no element with this index');
    }
    return allImage;
  }
}());