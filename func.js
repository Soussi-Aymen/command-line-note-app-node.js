const path=("./data.json")
const fs=require("fs")

function addNote(title,body){
 fs.readFile("./data.json","utf8",function(error,fileContent){
                                          if (error) 
                                                {console.log(error)}
                                          else 
                                          {data=JSON.parse(fileContent);
                                          data.push({title,body})
                                          let newdata=JSON.stringify(data)
                                          fs.writeFile(path,newdata,"utf8",function(error,fileContent){
                                          if (error) 
                                                {console.log(error)}
                                          else {
                                                console.log("Note created." )
                                                console.log("--")
                                                console.log(`Title: ${title}`)
                                                console.log(`Body: ${body}`)
                                                }

                                                }
                                                )}
                                          })
}

function readNote(title){
          fs.readFile(path,"utf8",function(error,fileContent){
                        if (error) 
                              {console.log(error)}
                        else 
                        {data=JSON.parse(fileContent);
                         note=data.filter(el=> {if(el.title==title) return el })
                         if(note.length!=0){
                         console.log("Note found.")
                         console.log("--")
                         console.log(`Title: ${note[0].title}`)
                         console.log(`Body: ${note[0].body}`)
                        }else{
                               console.log("Note not found.")
                         }
                        }
                        })



}

function removeNote(title){

  fs.readFile("./data.json","utf8",function(error,fileContent){
                        if (error) 
                              {console.log(error)}
                        else 
                        {data=JSON.parse(fileContent);
                        let newdata=JSON.stringify(data.filter(el=>{ if(el.title!=title) return el}))
                        fs.writeFile(path,newdata,"utf8",function(error,fileContent){
                        if (error) 
                              {console.log(error)}
                        else {
                              console.log("Note was removed." )
                              
                              }

                              }
                              )}
                        })


}

function listNote(){
      fs.readFile("./data.json","utf8",function(error,fileContent){
      if (error) 
            {console.log(error)}
      else 
      {data=JSON.parse(fileContent);
      console.log(`Printing: ${data.length} note(s) .` );
      data.map(el=>{console.log()
            console.log(`Title: ${el.title}`)
            console.log(`Body: ${el.body}`)     }
            )}
      })
}

           
module.exports={addNote,readNote,removeNote,listNote}           