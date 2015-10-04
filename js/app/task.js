var i = 1;

var task = function(titleTxt,priorityVal){
               var task ={
                id: i++,
                priority:{"name":priorityVal,
                             "value":priorityVal == 'high'?1:priorityVal == 'medium'? 2 :3},
                title:titleTxt,
                isCompleted:false,
                
                complete:function(){
                  this.isCompleted=true;
                }
               }
              return task;
            };
