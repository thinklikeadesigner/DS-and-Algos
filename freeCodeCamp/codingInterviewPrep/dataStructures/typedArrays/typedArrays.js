//Create a buffer of 64 bytes
var buffer = new ArrayBuffer(64);

//Make 32-bit int typed array with the above buffer
var i32View = new Int32Array(buffer);
