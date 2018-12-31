window.onload =  function () {
    // var element = document.getElementById('outerDiv');
    // //  console.log(element.innerHTML);
    
    // var paragraphs = document.getElementsByTagName("p");
    // // console.log(paragraphs.length);

    //  paragraphs = document.getElementsByClassName("subPara");
    // //  console.log("<p> element with class subPara : " + paragraphs.length);
    
    // var Qpara = document.querySelectorAll("p");
    // // console.log(Qpara.length);
    
 
    // var qdiv = document.querySelector('#outerDiv');
    // // console.log(qdiv.innerHTML);
    
    // var inner = document.getElementById("innerDiv");
    // // console.log(element2.innerHTML);
    
    // // element2.document.removeChild(element2);

    // // console.log(element2.innerHTML);

    // var element4 = document.createElement('article');
    // element4.innerText = "My new <article> element";
    
    // element.appendChild(element4);

    // element3  = inner.insertBefore(document.createElement("article", inner.firstChild));
    // element3.innerText = "My new <article> element";

    var innerDiv = document.getElementById("innerDiv");
    var newDiv= document.createElement("div");
    for(var i = 0; i< innerDiv.childNodes.length; i ++) {
        var anchor = newDiv.appendChild(document.createElement("a"));
        anchor.setAttribute("href", "http//www.bing.ca");
        anchor.text = innerDiv.childNodes[i].textContent;
        newDiv.appendChild(document.createElement("br"));
    }
    innerDiv.replaceNode(newDiv);
    innerDiv.innerHTML = newDiv.innerHTML;
     


 
};

 