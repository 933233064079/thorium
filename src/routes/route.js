const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

// WRITE A POST API TO THE ABOVE


// take this as sample for array of persons:
let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]
router.get('/votingage', function (req, res) {
    const check = req.query.votingage
    const arr = []
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>=check){
           persons[i].votingStatus=true
           arr.push(persons[i])
           
           
        }
        
        
    }
    res.send(arr)
    console.log(arr)
       
      
    
})
 
