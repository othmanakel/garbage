//connect
var db = connect('169.228.122.242/32/smartGarbage'),
    smartGarbage = null;

//create cans collection
db.cans.insert({'canName' : 'RimacA'});
db.cans.insert({'canName' : 'RimacB'});
db.cans.insert({'canName' : 'RimacC'});