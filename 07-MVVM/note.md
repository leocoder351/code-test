### 观察者模式/发布订阅模式

Observer: 观察者/发布者
Subscriber: 订阅者

每个subscriber都有一个update方法，每个observer都有一个notify方法，依次调用订阅该observer的subscriber.update()