;(function() {
  var allImage = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var currentSlide = 1;
  var newSlidesForTest = {image: 'ant.jpg', alt: 'Ant'};
  var arrayForSlider = [{image: 'girl.jpg', alt: 'Girl'}, {image: 'wtf.jpg', alt: 'WHAT?'}];

  console.log(nextSlide());
  console.log(priviousSlide());
  console.log(switchSlide(1));
  console.log(getInfoAboutSlide(currentSlide));
  console.log(addNewSlide(newSlidesForTest, 0));
  console.log(currentSlide);
  console.log(deleteSlide(1));
  console.log(currentSlide);

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
    if(n < allImage.length) {
      currentSlide = n;
      return allImage[currentSlide];
    }
    currentSlide = allImage.length - 1;
    return allImage[currentSlide];
  }

  function getInfoAboutSlide(a) {
    if (a < allImage.length) {
      console.log(allImage[a].alt);
    } else {
      console.log('There is no element with this index');
    }
  }

  function addNewSlide(obj, index) {
    var indexForArray = index;
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        addNewSlide(obj[i], indexForArray);
        ++indexForArray;
      }
    } else {
      if (index <= currentSlide) {
        allImage.splice(indexForArray, 0, obj);
        ++currentSlide;
      } else if (index < arr.length) {
        allImage.splice(indexForArray, 0, obj);
      } else {
        allImage.push(obj);
      }
    }
    return allImage;
  }
  

  function deleteSlide(index) {
    if (index <= currentSlide) {
      allImage.splice(index, 1);
      --currentSlide;
    } else if (index < allImage.length) {
      allImage.splice(index, 1);
    } else {
      console.log('There is no element with this index');
    }
    return allImage;
  }
}());