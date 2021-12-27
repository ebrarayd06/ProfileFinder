
class UI{
    constructor(){
        this.profileContainer=document.querySelector("#profileContainer");
        this.alert=document.querySelector("#alert");
   
    }

    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";

    }

    showAlert(text){
        
        this.alert.innerHTML=`text could not found ${text}`;

    }

    showProfile(profile){

        

        this.profileContainer.innerHTML=`

        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
            
            <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/350x150"
            class="img-thumbnail">
            </a>


            </div>
            <div class="col-md-9">
                <h4>Contract</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                    name:${profile.name}
                    </li>
                    <li class="list-group-item">
                    username:${profile.username}
                    </li>
                    <li class="list-group-item">
                    email:${profile.email}
                    </li>
                    <li class="list-group-item">
                    adress:${profile.address.street}
                    city:${profile.address.city}
                    zipcode:${profile.address.zipcode}
                    suite:${profile.address.suite}
                    </li>
                    <li class="list-group-item">
                    phone:${profile.phone}
                    </li>
                    <li class="list-group-item">
                    website:${profile.website}
                    </li>
                    <li class="list-group-item">
                    company:${profile.company.name}
                    </li>
                </ul>
                <h4 class="mt-4">to Do list</h4>
                <ul id="toDo" class="list-group">

                </ul>

            </div>
    
        </div>
     
    </div>    
    
       
        `;


    }
  
    showTodo(toDo){

            let html="";

            toDo.forEach(item=> {

                if(item.completed){

                    html+=`
                        <li class="list-group-item bg-success">
                        ${item.title}
                        </li>
                        `;
                    
                }else{

                    html+=`
                    <li class="list-group-item bg-secondary">
                    ${item.title}
                    </li>
                    `;

                }

                
            });

            this.profileContainer.querySelector("#toDo").innerHTML=html;
            

    }


}