

class Atomic {
    constructor(options) {
        
        this.name = options.name;
        if(options.concurrency < 2) {
            throw new Error('Minimum concurrency should be 2. Setting it to 2');
        }

        this.limit = options.concurrency;
        this.async = options.async;
        this.store = [];
        this.active = 0;
        this.startQueue = false;
    }
  
    test() {
        console.log('hello world!!!')
    }

    createJob(task ) {

        this.startQueue = task.startQueue;


        if (this.active < this.limit && this.startQueue) {
            this.runTask(task)
        }
        else {
          console.log(`queuing task ${name}`)
          this.store.push(task)
        }   
        
    }


    runTask(task) {
        let taskType = task.taskType;
        this.active++;
        let resp;
        console.log(`Scheduling task of type ${taskType}: active: ${this.active}`)

        if( this.async) {

            if( taskType === 'url') {
                resp = this.fetchCalls(task.data,task.method,task.payload);
                resp.then( () => {
                    this.active--;
                    this.nextTask();
                })
            }
            else {
                let random = Math.floor(Math.random() * 1000)
                let fname = ` ${random}`

                task.data(fname).then( () => {
                    this.active--;
                    this.nextTask();
                })
            }
        } 
        else {

            if( taskType === 'url') {
                this.fetchCalls(task.data, task.method,task.payload);
                this.active--;
                this.nextTask();
            }   
            else {
                task.data();
                this.active--;
                this.nextTask();
            }
        }
        
    }


    nextTask() {
        this.store.length ? this.runTask(this.store.shift() ): '';
    }


    runAllTasks() {

        for( var i=0; i< this.store.length; i++) {
            let task = this.store.shift();

            if (this.active < this.limit ) {
                this.runTask(task)
            }
            else {
              console.log(`queuing task ${name}`)
              this.store.push(task)
            }   
        }
    }

    runBackgroundTasks() {

        let inputData = JSON.stringify({ 'store': this.store, 'limit': this.limit });

        if (navigator.serviceWorker) {
            
            // Do a one-off check to see if a service worker's in control.
            if (navigator.serviceWorker.controller) {
                var messageChannel = new MessageChannel();

                messageChannel.port1.onmessage = function(event) {
                    console.log("Response from the SW : ", event.data.status);
                }

                //send data to service worker.
                navigator.serviceWorker.controller.postMessage(inputData, [messageChannel.port2]);

            } else {
                console.log('This page is not currently controlled by a service worker.');
            }

            navigator.serviceWorker.register('worker.js', {scope: './'})

            .then(registration => {
                //console.log('Service Worker registration was successful with scope: ', registration.scope);
                navigator.serviceWorker.ready;

                //
            })
            .catch(function(error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });

        }

        return this;
    }

    getTaskStatus() {

    }

    async fetchCalls(url, method, payload) {

        fetch(url, {
            method: method,
            headers : new Headers(),
            body:JSON.stringify(payload)
        })

            .then(function(response) {
                console.log(`Task response came back as: ${response.status}`)
                return response.status;
            })
            .catch(function(error) {
                console.log(JSON.stringify(error));
                return JSON.stringify(error)
            });
    }
}

module.exports = Atomic;
