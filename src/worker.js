

let store = [];
let active = 0;
let limit = 0;

self.onsync = function(event) {
}


self.addEventListener('message', function(event){


    let inputData = JSON.parse(event.data);

    store = inputData.store;
    limit = inputData.limit;

    active = 0;
    startProcessingTask();  //start tasks processing.

    let interval = setInterval( () => {

        if(store.length === 0) {
            console.log('store empty');
            event.ports[0].postMessage({'status': 'All job processed..' });
            clearInterval(interval); 
        }
    }, 500);

    
});


function startProcessingTask() {

    for( var i=0; i< store.length; i++) {
        let task = store.shift();

        if (active < limit ) {
            runTask(task)
        }
        else {
          console.log(`queuing task ${name}`)
          store.push(task)
        }   
    }
}


function runTask(task) {
    let taskType = task.taskType;
    active++;
    let resp;
    console.log(`Scheduling task of type ${taskType}: active: ${active}`)

    
    if( taskType === 'url') {
        resp = fetchCalls(task.data, task.method,task.payload);
        resp.then( () => {
            nextTask();
        })
    }
    else {
        task.data().then( () => {
            nextTask();
        })
    }
    active--;
}


function nextTask() {
    store.length ? runTask(store.shift() ): '';
}


async function fetchCalls(url, method, payload) {
    fetch(url, {
        method: method,
        headers : new Headers(),
        body:JSON.stringify(payload)
    })
        .then(function(response) {
            let random = Math.floor(Math.random() * 1000)
            let fname = ` ${random}`
            console.log(`Task ${fname} response came back as: ${response.status}`)
            return response.status;
        })
        .catch(function(error) {
            console.log(JSON.stringify(error));
            return JSON.stringify(error)
        });
}