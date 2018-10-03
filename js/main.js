window.addEventListener('load', init);

function init(){
  // document.getElementById('button').addEventListener('click', defineId, false);
  var menu = document.getElementById('menu');
  menu.addEventListener('click', menuButtonHandler);
  // add event to element with id="button"
  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', bookSearch, false);
}

function menuButtonHandler(event) {
  console.log(event.target.id);

  var menu = document.getElementById('button')


  $.ajax  ({
    url: "https://www.googleapis.com/books/v1/volumes?q= " + event.target.id,
    dataType: "json",
    type: 'GET',

    success: function(data) {

      console.log(data);

      var menu = document.getElementById('button')
      document.getElementById('results').innerHTML = ""

      for(var i = 0; i < data.items.length; i++){
        // store current books volume info
        var jdata = data.items[i].volumeInfo;

        // create elements
        var newColSm4 = document.createElement('div');
        var newImg    = document.createElement('img');
        var newH2     = document.createElement('h2');
        var newH3     = document.createElement('h3');
        var newH4     = document.createElement('h4');
        var newAnchor = document.createElement('p');

        newColSm4.className = 'whiteSpace';

        // add text to tags
        newH2.innerText = jdata.title;

        // create image if one exists
        if(jdata.imageLinks) {
          newImg.src = jdata.imageLinks.thumbnail;
        } else {
          newImg.src = 'img/nobook.jpg';
        };

        // create publish date if one exists
        if(jdata.publishedDate) {
          newH4.innerText = jdata.publishedDate;
        } else {
          newH4.innerText = 'no publish date found';
               };

            //create discription if on exists
            if(jdata.description) {
                newAnchor.innerText = jdata.description;
            } else {
                newAnchor.innerText = 'no description found';
            };

        // create author if one exists
        if(jdata.authors) {
          newH3.innerText = jdata.authors[0];
        } else {
          newH3.innerText = 'no author found';
        };

        // add tags to document
        newColSm4.appendChild(newImg);
        newColSm4.appendChild(newH2);
        newColSm4.appendChild(newH3);
        newColSm4.appendChild(newH4);
        newColSm4.appendChild(newAnchor);

        // add results to the screen
        var results = document.getElementById("results");
        results.appendChild(newColSm4);
      };
     }

  })
}


function bookSearch(){
  console.log("test");
	var search = document.getElementById("search").value;

	document.getElementById("results").innerHTML = "";
  

	$.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    type: 'GET',

    success: function(data) {

			console.log(data);



	    for(var i = 0; i < data.items.length; i++){

	   		var jdata = data.items[i].volumeInfo;


	   		var newColSm4 = document.createElement('div');
	   		var newImg    = document.createElement('img');
	   		var newH2     = document.createElement('h2');
	   		var newH3     = document.createElement('h3');
	   		var newH4     = document.createElement('h4');
	   		var newAnchor = document.createElement('p');

          newColSm4.className = 'whiteSpace';

	   		newH2.innerText = jdata.title;

	   		// create image if one exists
	   		if(jdata.imageLinks) {
		   		newImg.src = jdata.imageLinks.thumbnail;
	   		} else {
		   		newImg.src = 'img/nobook.jpg';
	   		};

	   		// create publish date if one exists
	   		if(jdata.publishedDate) {
	   			newH4.innerText = jdata.publishedDate;
	   		} else {
	   			newH4.innerText = 'no publish date found';
               };

            //create discription if on exists
            if(jdata.description) {
                newAnchor.innerText = jdata.description;
            } else {
                newAnchor.innerText = 'no description found';
            };

	   		// create author if one exists
	   		if(jdata.authors) {
		   		newH3.innerText = jdata.authors[0];
	   		} else {
		   		newH3.innerText = 'no author found';
	   		};

	   		// add tags to document
	   		newColSm4.appendChild(newImg);
	   		newColSm4.appendChild(newH2);
	   		newColSm4.appendChild(newH3);
	   		newColSm4.appendChild(newH4);
	   		newColSm4.appendChild(newAnchor);

	   		// add results to the screen
	   		var results = document.getElementById("results");
	   		results.appendChild(newColSm4);
	    };
    }
	});

};








// var x = document.getElementById("thriller");
// x.addEventListener('searchGenre', navigation)
//
// function navigation(){
//    document.getElementById('thriller').innerHTML = ""
// .addEventListener('searchGenre');


//
// if searchGenre == 'thriller'{
//     $.ajax  ({
//         url: "https://www.googleapis.com/books/v1/volumes?q=" + thriller,
//         dataType: "json",
// }
//         success: function(data) {
//             for(i = 0; i < data.items.length; i++) {
//                 results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>";
//                 results.innerHTML += "<h2>" + data.items[i].volumeInfo.authors + "</h2>";
//                 results.innerHTML += "<h2>" + data.items[i].volumeInfo.publishedDate + "</h2>";
//                 results.innerHTML += "<img>" + data.items[i].volumeInfo.thumbnail + "</img>";
//             }
//                    },
//        type: 'GET'
//     });
// }
//
// document.getElementById('thriller').addEventListener('click', navigation, false);
