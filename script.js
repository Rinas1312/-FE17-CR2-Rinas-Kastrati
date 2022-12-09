
let courses = JSON.parse(coursesJson);
console.log(courses);

function updateHTML () {
  for (let course of courses){
    document.getElementById("objects").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${course.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${course.taskName}</h5>
      <p class="card-text">${course.description} </p>
      <p class="importance-amount">${course.importance}</p>
      <input type="submit" value="Priority" class="priority-btn">
    </div>
    `;
  }

}

updateHTML();
addEvent();



function importance(index) {
  if (courses[index].importance != 10) {
    courses[index].importance++;
    document.getElementsByClassName("importance-amount")[index].innerHTML = courses[index].importance;
}
  }
  function addEvent (){
    let importance_btns = document.getElementsByClassName("priority-btn");

    for (let i = 0; i < importance_btns.length; i++ ) { 
      importance_btns[i].addEventListener("click", function() {
        importance(i);
      } 
      )
  } 
  

  }

//Sortbtn
document.getElementById("sort").onclick = sortByImportanceValue;
function sortByImportanceValue(){
courses.sort((a, b) => b.importance - a.importance);
document.getElementById("objects").innerHTML = ""
updateHTML();
addEvent;
}

//document.getElementsByClassName("priority-btn")[0].onclick = function(){
//courses[0].importance++;
//document.getElementsByClassName("importance-amount")[0].innerHTML = courses[0].importance;
//}

//document.getElementsByClassName("priority-btn")[1].onclick = function(){
  //courses[1].importance++;
  //document.getElementsByClassName("importance-amount")[1].innerHTML = courses[1].importance;
  //}

  //document.getElementsByClassName("priority-btn")[2].onclick = function(){
    //courses[2].importance++;
    //document.getElementsByClassName("importance-amount")[2].innerHTML = courses[2].importance;
    //}

    //document.getElementsByClassName("priority-btn")[3].onclick = function(){
      //courses[3].importance++;
      //document.getElementsByClassName("importance-amount")[3].innerHTML = courses[3].importance;
      //}

      //document.getElementsByClassName("priority-btn")[4].onclick = function(){
        //courses[4].importance++;
        //document.getElementsByClassName("importance-amount")[4].innerHTML = courses[4].importance;
        //}

        //document.getElementsByClassName("priority-btn")[5].onclick = function(){
          //courses[5].importance++;
          //document.getElementsByClassName("importance-amount")[5].innerHTML = courses[5].importance;
          //}

          //document.getElementsByClassName("priority-btn")[6].onclick = function(){
            //courses[6].importance++;
            //document.getElementsByClassName("importance-amount")[6].innerHTML = courses[6].importance;
            //}

            //document.getElementsByClassName("priority-btn")[7].onclick = function(){
              //courses[7].importance++;
              //document.getElementsByClassName("importance-amount")[7].innerHTML = courses[7].importance;
              //}

              //document.getElementsByClassName("priority-btn")[8].onclick = function(){
                //courses[8].importance++;
                //document.getElementsByClassName("importance-amount")[8].innerHTML = courses[8].importance;
                //}
                