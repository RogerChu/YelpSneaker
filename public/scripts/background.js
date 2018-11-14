var counter = 0;
function changeBG(){
    var imgs = [
        
        "url(https://images.unsplash.com/photo-1537674884168-0de70b2481d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6424abbf3072f03885daab071aabcab0&auto=format&fit=crop&w=1912&q=80)",
        "url(https://media.gettyimages.com/photos/sneakers-of-russell-westbrook-of-team-lebron-before-the-game-against-picture-id921551782)",
        "url(https://media.gettyimages.com/photos/the-sneakers-russell-westbrook-of-the-oklahoma-city-thunder-are-worn-picture-id1057947462)",
        "url(https://media.gettyimages.com/photos/russell-westbrook-of-the-oklahoma-city-thunder-ties-sneaker-before-picture-id1055280766)",
        "url(https://media.gettyimages.com/photos/the-sneakers-of-russell-westbrook-of-the-oklahoma-city-thunder-are-picture-id655826552)",
        "url(https://media.gettyimages.com/photos/the-sneakers-of-russell-westbrook-of-the-oklahoma-city-thunder-are-picture-id1052574138)",
        "url(https://media.gettyimages.com/photos/the-sneakers-of-russell-westbrook-of-the-oklahoma-city-thunder-are-picture-id1052573662)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);


