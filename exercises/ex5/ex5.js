function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
        console.log("Returning: " + url);
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(_) {
        fakeAjax(file, _);
    });
}

// request all files at once in "parallel"
var f1 = getFile("file1");
var f2 = getFile("file2");
var f3 = getFile("file3");

f1
.then(output)
.then(function() {
    return f2;
})
.then(output)
.then(function() {
    return f3;
})
.then(output)
.then(function() {
    output("Complete!");
});
