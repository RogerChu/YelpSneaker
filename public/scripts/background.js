var counter = 0;
function changeBG(){
    var imgs = [
        
 
        "url(https://images.unsplash.com/photo-1537636568536-a2e00b44cb85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f7995c62ac150dd57cbc7a02c20ea66&auto=format&fit=crop&w=1930&q=80)",
        "url(https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-0.3.5&s=11ef1c3846b5de92037d68e19ce3824a&auto=format&fit=crop&w=1868&q=80)",
        "url(https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=551bd701d38a1f0ca7a55eb428cbd88b&auto=format&fit=crop&w=1955&q=80)",
        "url(https://images.unsplash.com/photo-1488704906310-183eeda75d51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=281f5480f376422f87a76c0ab8249cac&auto=format&fit=crop&w=1950&q=80)",
        "url(https://images.unsplash.com/photo-1489647767089-3944a3baa54e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0fc4f1447ff66cd94dbd4b5e79cbeef3&auto=format&fit=crop&w=1955&q=80)",
        "url(https://images.unsplash.com/photo-1506026830518-84410c0a880f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3ff8066730c4ed77432b8bb953714c&auto=format&fit=crop&w=1868&q=80)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);


