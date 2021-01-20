

document.querySelector(`.js-go`).addEventListener("click",function(){
    // clearing previous items - if any
    document.querySelector(`.js-container`).textContent='';


    let input = document.querySelector(".js-userinput").value;
    // Replace spaces with "+" to add it in URL
    // input = input.replace(" ", "+");    // This only relaces the first occurance
    input = input.split(' ').join('+');
    var URL = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=pD8TD8xM6IOELgw4qBLZtKncLNcOuhbB`;
    

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', URL );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function(e){
        var data = e.target.response;
        var response = JSON.parse(data);
        
        var imageUrls = response.data;

        imageUrls.forEach(image => {
            var src = image.images.fixed_height.url;
            document.querySelector(`.js-container`).innerHTML += "<img src=\""+src+"\" class=\"container-image\">";
        });
        
        
    });

});