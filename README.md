

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
.

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