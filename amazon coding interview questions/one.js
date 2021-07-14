function sortFiles(files){

    return files.sort((a,b) => a - b)
    
    
    }
    
    function addSequential(files) {
if (files.length === 0 ) return 0


sum = files[0] + files[1]




return sum + addSequential(files.shift())
    
}


    










function one(){
    return 58
}
module.exports = {one, sortFiles}


console.log(addSequential([4,8,6,12]))