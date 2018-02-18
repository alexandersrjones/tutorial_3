var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");

var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

bgText.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    
    if(ev.keyCode == 13){
        //do something to the background
        
        console.log(c1.checked, c2.checked, c3.checked);
        
        if(c1.checked){
            //document.body.style.backgroundColor =bgText.value
            if(bgText.value == "one turkey"){
                document.body.style.backgroundImage="url(img1.jpg)";
            } else if(bgText.value == "close turkey"){
                document.body.style.backgroundImage="url(img2.jpg)";
            } else if(bgText.value == "many turkey"){
                document.body.style.backgroundImage="url(img3.jpg)";
            } else{
                document.body.style.backgroundColor=bgText.value;
            }
        }
        else if(c2.checked){
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "one turkey"){
                prevDiv.style.backgroundImage="url(img1.jpg)";
            } else if(bgText.value == "close turkey"){
                prevDiv.style.backgroundImage="url(img2.jpg)";
            } else if(bgText.value == "many turkey"){
                prevDiv.style.backgroundImage="url(img3.jpg)";
            } else{
                prevDiv.style.backgroundColor=bgText.value;
            }
        }
        
        else if(c3.checked){
            //menu.style.backgroundColor = bgText.value;
            if(bgText.value == "one turkey"){
                menu.style.backgroundImage="url(img1.jpg)";
            } else if(bgText.value == "close turkey"){
                menu.style.backgroundImage="url(img2.jpg)";
            } else if(bgText.value == "many turkey"){
                menu.style.backgroundImage="url(img3.jpg)";
            } else{
                menu.style.backgroundColor=bgText.value;
            }
        }
        
        else {
            alert("Choose an option");
        }
        bgText.value= "";
        
        numUse++; //add one
        if(numUse > 5){
            //alert("You've reached the limit. Please pay to use more!");
            document.getElementById("display").innerHTML = "You've reached the limit. Please pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    
    if(picNum > 3){
        picChooser.value = 1;
    }
    if(picNum < 1){
        picChooser.value = 3;
    }
    
    prevDiv.style.backgroundImage = "url(img"+picChooser.value+".jpg)";
});