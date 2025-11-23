const x = 2;
try{
    console.log("try")
    x.toUpperCase();
    console.log("success")
} catch(err){
    console.log(err.message, err.name)
} finally {
    console.log("finally")
}



// throwing errors

const z = 2

try {
    console.log("try")
    throw Error("this is an error")
} catch(err) {
    console.log(err)
} finally {
    console.log("finally")
}














