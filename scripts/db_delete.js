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