var net = require('net');
var messages = [ "yes",  "no",  "may be",  "you r goin to die",
				"youve lost yr head", "try again" ,"get yoursef a job ",
				"dont you have better things to do",]
var server = net.createServer(function(connection){
	connection.write("yo wats yr problem ? \n");
	connection.on("data", function(data){
		data = data.toString().trim();
		console.log(data);
		var randomVariable = messages[Math.floor(messages.length*Math.random())]
		connection.write(randomVariable);
	})

})
server.listen(2005, function(){
	console.log("listening");
})