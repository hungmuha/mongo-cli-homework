var mongo = require("mongodb").MongoClient;
var prompt =require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurants_db";

// mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var allChoice=prompt("type 'all' and press enter to display all restaurants' name: ");
	if (allChoice == "all"){
	collection.find().toArray(function(err,docs){
		console.log(docs);
	});
} else{
	console.log("Aw, you don't want to see the restaurant?");
	};
};

//find in database
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var singleChoice=prompt("choose a restaurant");
	collection.find({"name":singleChoice}).toArray(function(err,doc){
		console.log(doc);
	});
});

//insert a new record to the database
mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');
	var insertName=prompt("insert a new restaurant. Name:");
	var insertAddress=prompt("insert a new restaurant. Address:");
	collection.insert({"name":insertName,"address":insertAddress},function(err,doc){
		console.log(doc);
	});
});

//Update to the database
mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');
	var editName= prompt("name of the restaurant you want to edit");
	var editStreet= prompt("what is the new Street address?");
	var editZip= prompt("what is the new Zipcode?");
	var editYelp= prompt("what is the new Yelp");

	collection.update({"name":editName, "address":{"street":editStreet,"Zip":editZip},"yelp":editYelp},function(err,doc){
		console.log("done");
	});

});
//delete from the database
mongo.connect(url, function(err,db){
	var collection= db.collection('restaurants');
	var name= prompt("what is the name of the restaurant that you want to erase");

	collection.delete({"name":name},function(err,doc){
		console.log("done");
	});
});