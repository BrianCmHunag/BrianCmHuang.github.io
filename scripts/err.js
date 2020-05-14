var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/clipart4679363.png') {
      alert('Ouch! Stop poking me!');
      myImage.setAttribute ('src',"https://developer.mozilla.org/static/img/beast-404.ce38fcf80386.png");
    } else {
      myImage.setAttribute ('src','images/clipart4679363.png');
    }
}