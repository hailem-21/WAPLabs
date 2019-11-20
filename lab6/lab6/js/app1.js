
var result=(function(){
  
    let stds={Student:[  { "studentId": "000-98-0001", "firstName": "James" },
    { "studentId": "000-98-0002", "firstName": "Anna" },
    { "studentId": "000-98-0003", "firstName": "Jeffrey" }]};

    var lstudents= document.querySelector(".list-group");

    
    var createlist=function(sid1,stuname1){

      
         var litem=document.createElement("li");
        
             litem.className="list-group-item";
        
             litem.innerHTML=sid1+"-"+stuname1;
          
             lstudents.appendChild(litem);
    }
    
    
    let insert=function(stuname,sid){
    
        
        stds.Student.push({ "studentId":sid, "firstName":stuname})  ;
       
        document.getElementById("sid").value='';
        document.getElementById("sname").value='';
       
        

      createlist(sid,stuname);
    
    }

    submit.addEventListener("click",function(event){  
        
       
        var stid= document.getElementById("sid").value ;
        var stname=document.getElementById("sname").value;
       
        insert(stname,stid);
        
     });
    
    
      window.onload=  (function() { 

       
        stds.Student.forEach(function(std){

          
            createlist(std.studentId,std.firstName);
         
        });
      
    })(); 

return stds;})();




 
  

  
