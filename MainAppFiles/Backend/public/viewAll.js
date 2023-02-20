app.get("/viewAll",(req,res)=>{
    Suggestion.find().then((result)=>{
        res.send(result);
    }).catch((error)=>{
        console.log(error);
    })
})
    //yes

    function viewAll(){
    let custname = document.getElementById("yn").value;

    showView(custname).then((result)=>{

        if(result){
    
            let view=`
            <div>
              <p>First Name: ${result.fname}</p>
              <p>Last Name: ${result.lname}</p>
              <p>Email Id: ${result.email}</p>
              <p>Runtime: ${result.suggestion}</p>
            </div>`;
            document.getElementById("viewAll").innerHTML = view;
    }
    else {
        document.getElementById("viewAll").innerHTML = "No Data Found.";
      }
    });
  }