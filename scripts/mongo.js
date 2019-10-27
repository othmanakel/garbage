//connect
var db = connect('169.228.122.242/32/smartGarbage'),
    smartGarbage = null;

//create cans collection
db.cans.insert({'canName' : 'RimacA'});
db.cans.insert({'canName' : 'RimacB'});
db.cans.insert({'canName' : 'RimacC'});

allCans = db.cans.find();

while(allCans.hasNext())
{
    printjson(allCans.next());
}

//delete can
db.cans.find().forEach(function(thisDoc)
{
    if(thisDoc.name === 'RimacA')
    {
        db.cans.remove({ "_id" : thisDoc._id});
    };
});

//drop
db.dropDatabase();