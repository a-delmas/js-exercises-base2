var images = document.getElementsByTagName("img")
for(let i=0; i<images.length; i++)
images[i].addEventListener("mouseover", function(){
    images[i].src="images/image1_2.jpg"
});

for(let i=0; i<images.length; i++)
images[1].addEventListener("mouseout",function(){
    images[i].src="images/image1.jpg"
});

