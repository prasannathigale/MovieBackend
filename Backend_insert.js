var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var dbName="MovieDB";
MongoClient.connect(url,function(err,Client){
    if(err) throw err;
    var db=Client.db("MovieDB");
    var rec1=[
        {name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore&#39;s warning about the return of LordVoldemort is not heeded by the wizard authorities who, in turn, look toundermine Dumbledore's authority at Hogwarts and discredit Harry."
        },
        {name:"The Lord of the Rings: The Fellowship of the Ring",
        img: "https://bit.ly/2tC1Lcg",
        summary:"A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
        },
        {name: "Avengers: Endgame",
        img: "https://bit.ly/2Pzczlb",
        summary: "Adrift in space with no food or water, Tony Stark sends amessage to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
        }
];
        db.collection("movie").insertMany(rec1,function(err,res){
            if(err) throw err;
            console.log("Inserted");
     });
     Client.close();
});
