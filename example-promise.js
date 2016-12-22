/*function getTempCallback (location, callback){
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('NYC', function(e, temp){
    if(e){
        console.log('error', e);
    } else {
        console.log('Success', temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('NYC').then(function(temp){
    console.log("Promise success", temp);
}, function (err){
    console.log("promise error", err);
});
*/

//Challenge Area
function addPromise(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a === "number" && typeof b === "number"){
            resolve(a+b);
        } else {
            reject("Invalid input: Both must be numbers");
        }
    });
}

addPromise(5,6).then(function(result){
    console.log("Promise success", result);
},function(err){
    console.log("Promise error", err);
});

addPromise(5, "NaN").then(function(result){
    console.log("Promise success", result);
},function(err){
    console.log("Promise error", err);
});