var odluka;

function myFunction() {
    odluka=0;
  var x = document.getElementById("bottom");
    var y=document.getElementById("addnew");
    
    console.log(x.style.display)
  if (x.style.display === "none" || x.style.display=="") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    y.style.display="none";
    ocistipolja();
}

function ocistipolja(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.getElementById("cardn").value="";
    document.getElementById("CvC").value="";
}


function edit(td){
    ready();
    odluka=1;
    console.log("EDIT");
    var index=td.parentElement.parentElement;
    var title=index.cells[0].innerHTML;
    var name=title.split(' ')[0];
    var lname=title.split(' ')[1];
    
    document.getElementById("fname").value=name;
    document.getElementById("lname").value=lname;
    document.getElementById("email").value=index.cells[1].innerHTML;
    document.getElementById("cardn").value=index.cells[3].innerHTML;
    document.getElementById("CvC").value=index.cells[4].innerHTML;
    
    var newid=td.parentElement.parentElement;
console.log(newid);
 
    
    
   
     var x = document.getElementById("bottom");
     var y=document.getElementById("addnew");
    x.style.display="block";
    y.style.display="none";
    
    
}
//var tab=document.getElementById('glavnatb');

function deleted(td){
    
    var index;

 if (confirm('Da li zelite izbrisati ovaj red ?')) {
        
   index = td.parentElement.parentElement;
        document.getElementById("glavnatb").deleteRow(index.rowIndex);
     
     
    console.log(index);
}
    
    }

function insertData(){
    if(odluka==1){
        update();
    }
    if(odluka==0){
    var editdelete='<span onclick="edit(this)">edit</span><span onclick="deleted(this)">   delete</span>';
    var tab=document.getElementById("glavnatb");
      var newRow = tab.insertRow(tab.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    email = document.getElementById("email").value,
          cardn=document.getElementById("cardn").value,
          CvC=document.getElementById("CvC").value;
      
      var maskedCvC="";
    for(var i=0;i<CvC.length;i++){
        maskedCvC+="*";  
      }
    
    cell1.innerHTML=fname+ " " +lname;
    cell2.innerHTML=email;
    cell4.innerHTML=cardn;
    cell5.innerHTML=maskedCvC;
    cell6.innerHTML=editdelete;
    
    
      var y=document.getElementById("addnew");
    var x = document.getElementById("bottom");
    y.style.display="block";
    x.style.display="none";
    
   
    
    }
}



 function update(){
    
  pom.cells[0].innerHTML=document.getElementById("fname").value+" "+document.getElementById("lname").value;
        
        pom.cells[1].innerHTML=document.getElementById("email").value;
        pom.cells[3].innerHTML=document.getElementById("cardn").value;
        pom.cells[4].innerHTML=document.getElementById("CvC").value;
     
 }

function cancel(){
    var y=document.getElementById("addnew");
    var x = document.getElementById("bottom");
    y.style.display="block";
    x.style.display="none";
    ocistipolja();
}

var pom="";

document.addEventListener("DOMContentLoaded", ready);

 function ready() {
   

            var table1 = document.getElementById("glavnatb"),rIndex;
            
            for(var i = 1; i < table1.rows.length; i++)
            {
                table1.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    console.log(rIndex);
                    pom=this;
                    
                    
                };
                
            }

   
   
  }














