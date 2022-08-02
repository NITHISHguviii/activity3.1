let resume= 

    {
        name:"V.NITHISH KUMAR",
        EmailId: "NITHISHKUMAR0612@gmail.com",
        Mobile : 9786232051,
         educationalqualification:{
            Bachelorengineering :"COMPUTER SCIENCE 82%",
            
            sslc:82,
         },
         techanicalskill:{

             SoftwarestoOperate :'C,C++,JAVA PROGRAMMING LANUAGES'
         },
          AREASOFINTEREST:
                        { 
                          no1:'DEVELOPER',
                          no2:'MANUAL TESTER',
                          no3:'front end',
                          no4: 'backend'

                                },
         PERSONALTRAITS : 
          {   
            a :'Self Motivated and Self Learner',
            b :'Effective Time Management and Punctual',
            c :'Flexible Person',
               },
         personalinfo:{
            personaladdress:{
                       street:"vijayaragavan ",
                        doorn:'51/d', 
                         area:'Pudur', 
                         city:'vaniyambadi' , 
                     district:'tirupattur',
                     Pincode :635751
                    },
                         Dob : "12/12/2001",
                 FathersName : 'Mr.G.VIJAYAKUMAR',
                      Gender : 'Male',
                 Nationality : 'Indian',
          Languageknown:'Tamil  English Telugu ',   
                     Hobbies : 'Playing cricket and Listening Music'

         }
         







         
        

         }
                                    








    
{
    let resumeJSON = JSON.stringify(resume);// object to JSON CONVERSION 
    console.log(resumeJSON);
}
