$(document).ready(function(){
	$("#z").hover(function(){
		$("#logo_hide").css("display", "block");
    },
    function(){
		$("#logo_hide").css("display", "none");
    });
});


$(document).ready(function(){
		 
    // JSON
    url = "chart.json"
    $.ajax({
        url : url, 
        type : "GET",
        cache : false,
        success : function(data, status){
            if(status == "success") parseJSON(data);
        }
    });		
 
});

function parseJSON(jsonObj) {
var row = jsonObj.chart_rank.row;




var table = "<tr style='height: 50px;'><th style='width: 5%;'>R</th><th style='width: 10%;'>앨범</th>";	
table += "<th style='width: 15%;'>가수</th><th style='width: 27%;'>제목</th><th class='album_name' style='width: 18%;'>앨범명</th>"
table += "<th style='width: 5%;'>H</th><th style='width: 5%;'>P</th>"
table += "<th style='width: 5%;'>P</th><th style='width: 5%;'>M</th>"
table += "<th style='width: 5%;'>Y</th></tr>" 
for (i = 0; i < row.length; i++) {
   table += "<tr>"; 
   table += "<td>"+ (i+1) +"위" + "</td>";
   table += "<td style='width: 10%; height:70px'> <img src='" + row[i].Image  +  "' width='100%' height='70px' alt='' style='float: left; padding: 0px; margin: 0px;'></td>";
   table += "<td>" + row[i].Artist + "</td>";
   table += "<td>" + row[i].Name + "</td>";
   table += "<td class='album_name'>" + row[i].ALBUM + "</td>"
   
   table += "<td>" + "<i class='fas fa-heart' id='heart" + (i+1)  + "'style= 'color:gray;' ondblclick=" 
       + '"'
       + "if(document.getElementById('heart" + (i+1) + "').style.color == 'gray'){"                   
       + "this.style.color = 'red'}"
       + "else{ this.style.color = 'gray'}"
       + '"'
       +"></i>" + "</td>";
   table += "<td>" + "<i class='fas fa-play'></i>" + "</td>";
   table += "<td>" + "<i class='fas fa-plus-square'></i>" + "</td>";
   
   table += "<td>" + "<i class='fas fa-video'></i>" + "</td>";
   table += "<td>" + "<a href='"+ row[i].Youtube + "' target='_blank'><i class='fab fa-youtube' style= 'color:red;'></i></a>" + "</td>";
   
   table += "</tr>"; 
   
}          


     

$("#chart_rank").html(table)   



}




$(document).ready(function(){
    $("#button1").click(function(){
        $("#myModal").css("display","block")
    })

    $('#closeGo').click(function(){
    $('#myModal').css("display","none")
    location.assign('join.html')
    })

    
 
})




function chkSubmit(){
    var frm = document.forms['form2'];
    
    var age = frm.Age.value.trim();
  
    
     


     if(frm['PW1'].value.trim() == ""){
        $("#myModal").css("display","block") 

        $('#closeGo2').click(function(){
            $('#myModal').css("display","none")
            frm['PW1'].focus()
            })

      
        return false;
    } else if(frm['PW2'].value.trim() == ""){
        $("#myModal").css("display","block") 

        $('#closeGo2').click(function(){
            $('#myModal').css("display","none")
            frm['PW2'].focus()
            })
            
        return false;
    }
    else {
        if(frm['PW1'].value.trim() != frm['PW2'].value.trim() ){
            $("#myModal").css("display","block") 

            $('#closeGo2').click(function(){
                $('#myModal').css("display","none")
                frm['PW1'].focus()
                })
             
           
            return false;
            
        }
        if(isNaN(age) || age > 130 || age <= 0) {
            $("#myModal").css("display","block") 
    
            $('#closeGo2').click(function(){
                $('#myModal').css("display","none")
                frm['Age'].focus()
                })
    
            return false;
         }  
    }
        
   
       
  
     alert("회원가입 축하드립니다.\n로그인 후 이용해주세요.")
    return true;   
}
