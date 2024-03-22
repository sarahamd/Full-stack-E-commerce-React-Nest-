// console.log(this) //ServiceWorkerGlobalScope obj
// console.log(self) //ServiceWorkerGlobalScope obj
const filesToCache=[
    'index.html',
    'page1.html',
    'CSS/page1.css',
    'JS/page1.js',
    'HTML/OfflinePage.html'
]

// const staticCacheName='pages1'  //name for collection of cache storge db
self.addEventListener('install',event=>{
    console.log('installing service worker ',event)
    // self.skipWaiting()
    event.waitUntil(
        caches.open('pages1')
        .then(cache=>{
            return cache.addAll(filesToCache)
        })
    )
})


self.addEventListener('activate',event=>{
    console.log('activating service worker ',event)
})

self.addEventListener('fetch',event=>{  //fetch event for service worker
    console.log('fetching ',event.request.url)// req comming from main thread to service worker which will send it to cache or server
    // console.log('fetching ',event.request) //obj of request
    event.respondWith(
        caches.match(event.request)  //search in cache
        .then(response=>{
            if(response){ //if found in cache then get it 
                console.log('Found request :' ,event.request.url,' in cache' ,"response.status", response.status)
                return response
            } //if not found in cache =>(respone = undefiend)=> so go to server and get it
            console.log('need network request :',event.request.url)
            //you need to write return as it nessery for first request
            return fetch(event.request) // req from server and fetch will return responce ,
            .then(response =>{
                //check the status of reponse
                //online response server 404----custom page page request wrong
                if(response.status == 404)
                {                            
                    // If response is a 404, return a custom page"OnlinePage"
                   return fetch("http://127.0.0.1:5500/HTML/OnlinePage.html") //fetch from server
                }
                else
                return response
            })
        })        
        .catch(err=>{
            console.error(err);    
            //     offline---custome page you are working offline */               
                    // If response is a 404, return a custom page"OnlinePage"
                     return caches.match('HTML/OfflinePage.html');
                
        })
        
    )
})
