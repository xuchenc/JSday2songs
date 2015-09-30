//songs app
var songs = [];

var Song = function(title, artist, genre){
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}

var wonderwall = new Song("wonderwall",'Oasis','popishthing');
var stairway = new Song('Stairway to Heaven', 'Led Zepp', "rock");
var toxic = new Song('Toxic',"Britney Spears", "pop");
songs.push(wonderwall, stairway, toxic);


function displaySongs(){
  var elemString = "";
  for (var i = 0; i < songs.length; i++) {
    //pass in the song itself, and the index of the song to get the elemString
     elemString += getElemString(songs[i], i);
     //'<div class="well container">'
    //            + '<h3>' + songs[i].title + '</h3>'
    //            + '<p><i>' + songs[i].artist + '</i></p><br/>'
    //            + '<p><i>' + songs[i].genre + '</i></p><br/>'
    //            + "<p id='save"+i+"'><button onclick='removePost(" + i + ")'>Delete Post</button><button onclick='editPost("+i+")'>Edit Post</button></p>";
    //            + '</div>'
  }
  document.getElementById("songs").innerHTML = elemString;
}
displaySongs();

//When someone click the submit button, or hits enter on one of the inputs...run this function
document.getElementById("newSongForm").addEventListener("submit", function(event){
  //dont refresh the page
  event.preventDefault();

 //Get the values from the inputs and store them in variables
  var title = document.getElementById("songTitle").value;
  var artist = document.getElementById("songArtist").value;
  var genre = document.getElementById("songGenre").value;

 //Create the mySong object by calling the Song constructor
  var mySong = new Song(title, artist, genre);

 //Add the created song into the song array
 songs.push(mySong);

//append the new song to the end of the list already on the index page
 document.getElementById("songs").innerHTML += getElemString(mySong, songs.length - 1);

//clear out the inputs
            document.getElementById("songTitle").value = "";
            document.getElementById("songArtist").value = "";
            document.getElementById("songGenre").value = "";
 });

//returns the elem string for us to display
function getElemString(song,z){
  return '<div class="well container">'
             + '<h3>' + song.title + '</h3>'
             + '<p>artist:<i>' + song.artist + '</i></p><br/>'
             + '<p>genre:<i>' + song.genre + '</i></p><br/>'
             + '<div><button class="btn btn-danger" onclick="deleteSong( '+ z +')">Delete</button>'
             + '<button class="btn btn-success" onclick="editSong('+z+')">Edit</button></div>'
             + '</div>';
}

//a is the song index we want to delete (references z in getElemString())
function deleteSong(a){
   songs.splice(a, 1);
   displaySongs();
 }

 function editSong(index){
   $('#editTitle').val(songs[index].title);
   //document.getElementById('editTitle').value = songs[index].title;
   $('#editArtist').val(songs[index].artist);
   $('#editGenre').val(songs[index].genre);
   //document.getElementById("saveEditButton").innerHTML = "button string"
   $('#saveEditButton').html('<button onclick= "saveChanges('+ index +')" type="button" class="btn btn-primary">Save changes</button>');
  $('#myModal').modal('toggle');
 }

 function saveChanges(index){
   //var title = document.getElementById("editTitle").value;
   var title = $('#editTitle').val();
   var artist = $('#editArtist').val();
   var genre = $('#editGenre').val();

  //set the selected song equal to a new Song created from the input field values
   songs[index] = new Song(title, artist, genre);
   //clear out the inputs
   $('#editTitle').val("");
   $('#editArtist').val("");
   $('#editGenre').val("");

   $('#myModal').modal('toggle');
   displaySongs();
 }


//   function editSong(a){
//     //This is going to be the chosen post we want to edit, we're saving that posts values into variables so that we can manipulate them later on.
//        var editTitle = songs[a].title;
//        var editArtist = songs[a].artist;
//        var editGenre = songs[a].genre;
//
//     //
//        document.getElementById("songTitle").value = editTitle;
//        document.getElementById("songArtist").value = editArtist;
//        document.getElementById("songGenre").value = editGenre;
//     //
//        document.getElementById("editSong").value = a;
//     //
//        var save = "<button onclick='saveSongs()'>Save Post</button>"
//     //
//        for (var i = 0; i < songs.length; i++) {
//          document.getElementById("save"+i).innerHTML = save;
//        }
//   }
//
//
//   function saveSongs(){
//      var editTitle = document.getElementById("title").value;
//      var editArtist = document.getElementById("artist").value;
//      var editGenre = document.getElementById("genre").value;
//      var a = document.getElementById("editSong").value;
//
//      songs[a].title = editTitle;
//      songs[a].artist = editArtist;
//      songs[a].genre = editGenre;
//
//
//      displaySongs();
// }


 // function removeSongs(songIndex){
 //   songs.splice(songIndex, 1);
 //   displaySongs();
 // }
 //
 //
 //
 //
 // function editSongs(songIndex){
 //   //This is going to be the chosen post we want to edit, we're saving that posts values into variables so that we can manipulate them later on.
 //   var editTitle = songs[songIndex].title;
 //   var editArtist = songs[songIndex].artist;
 //   var editGenre = songs[songIndex].genre;
 //
 //
 //   document.getElementById("songTitle").value = editTitle;
 //   document.getElementById("songArtist").value = editArtist;
 //   document.getElementById("songGenre").value = editGenre;
 //
 //   document.getElementById("editPostId").value = songIndex;
 //
 //   var save = "<td><button onclick='saveSongs()'>Save Post</button></td>"
 //
 //   for (var i = 0; i < posts.length; i++) {
 //     document.getElementById("save"+i).innerHTML = save;
 //   }
 //
 // }
 //
 // function saveSongs(){
 //   var editTitle = document.getElementById("title").value;
 //   var editArtist = document.getElementById("artist").value;
 //   var editGenre = document.getElementById("genre").value;
 //   var postIndex = document.getElementById("editPostId").value;
 //
 //   posts[postIndex].title = editTitle;
 //   posts[postIndex].body = editBody;
 //   posts[postIndex].img = editImg;
 //
 //   showPosts();
 // }
