

A simple job/task queue
------------------------

* Add logs url
* Add simple get requests.

## Introduction

* npm install zomato-queue;

```
import Queue from "zomato-queue";

let options = {
  name: "example",
  concurrency: 3,
  async: true
};

let task = new Queue(options);

```
here we pass `options` object with :
* name
* concurrency (should be > 2)
* async (true/false)

```

for (let i = 0; i < 20; i++) {
  let dataOptions = {
    startQueue: true,
    taskType: "url",
    data: "https://httpbin.org/post",
    method: "POST",
    payload: { tittle: "tittle", body: "body" }
  };

  task.createJob(dataOptions);
```

`dataOptions` object accepts: 
* startQueue: if task should start processing after adding or not. (true/false).
* taskType: currently supports url or function. (in strings)
* data: if taskType is url, data should be a string comprising of a https url. If function then the function itseld.
* method: supports POST for now. leave blank if taskType is function.
* payload: if method is POST else empty.


```
task.runAllTasks();

```
* this will run all tasks present in queue. If startQueue was false then queue would have all tasks.



> open console to see output.