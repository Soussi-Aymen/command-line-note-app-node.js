const yargs=require('yargs')

let functions= require("./func")
let addNote= functions.addNote
let removeNote= functions.removeNote
let readNote= functions.readNote
let listNote= functions.listNote
const argumets= yargs.argv

const argv= yargs
           .command("add", "Add a note",{
            title:{
                  describe:"Title of note",
                  alias:"t",
                  demandOption: true},
            body:{
                  describe:"Body of note",
                  alias:"b",
                  demandOption: true},
            },(argv) => {addNote(argv.title,argv.body) }
                  )
             .command("list", "List all notes",() => listNote())
             .command("remove", "Remove a note",{
            title:{
                  describe:"Title of note",
                  alias:"t",
                  demandOption: true}
            },(argv)=> removeNote(argv.title)
                  )   
            .command("read", "Read a note",{
            title:{
                  describe:"Title of note",
                  alias:"t",
                  demandOption: true}
            },(argv) => readNote(argv.title)
                  )   
           .help()
           .alias('help',"h")
           .argv;