var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/brockhampton.jpeg') {
      myImage.setAttribute ('src','images/brockhampton2.jpg');
    } else {
      myImage.setAttribute ('src','images/brockhampton.jpeg');
    }
}