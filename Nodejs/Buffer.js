const fs = require("fs");

const stream_input = fs.createReadStream("input.txt");

// stream.on("data", (chunk)=>{
//     console.log(chunk.toString());
// });

// stream.on("end", ()=>{
//     console.log("Finished reading file");
// });

// stream.on("error", (err)=>{
//     console.log("Error occured!, error: ", err);
// })

const stream_output = fs.createWriteStream("output.txt");

stream_input.pipe(stream_output);

// A chunk is one piece of data handles by the stream

// Backpressure:- Backpressure is the mechanis, that slows down thee producer when the consumer cannot keep up.

// highWatermark:- it is like threshold used by the stream

// when the buffer will crossed its threshold, writable.write(...) will return false;

// .pipe() will handle these all of the things automatically


// pipe() chaining

// readable.pipe(transform).pipe(gzip).pipe(writable);

