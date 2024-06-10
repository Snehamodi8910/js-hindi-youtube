const coding = ["js" , "pytho" , "cpp"]

//high order function

/* coding.forEach(function (item) {
   // console.log(item);
}) */

   /* coding.forEach((item) => {
    console.log(item);
   }) */

 /*   function printme(item){
    console.log(item);
   }

   coding.forEach(printme) */

   coding.forEach(  (item , index , array) => {
   // console.log(item , index , array);
   })


   const mycoding = [
    {   
        langname: "javascript",
        langfile: "js"
    },

    {   
        langname: "C++",
        langfile: "cpp",
    },


    { 
        langname: "PYTHON",
         langfile: "py",
    },
]
mycoding.forEach(  (item)=> {

    console.log(item.langfile);
})

