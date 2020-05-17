var myImage = document.querySelector('img');
var linktodownload = document.querySelector('a');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/clipart4679363.png') {
      alert('Ouch! Stop poking me!');
      linktodownload.setAttribute("href", "images/clipart4679363.png")
      linktodownload.setAttribute("download", "clipart.png")
      myImage.setAttribute ('src',"https://developer.mozilla.org/static/img/beast-404.ce38fcf80386.png");
    } else {
      linktodownload.removeAttribute("href")
      linktodownload.removeAttribute("download")
      myImage.setAttribute ('src','images/clipart4679363.png');
    }
}