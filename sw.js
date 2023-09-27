self.addEventListener('install', async (e) => {
    console.log(e, 'install----');
    e.waitUntil(async () => {
        try {
            const cache = await caches.open('v1')
        cache.addAll(['./', './style.css', './main.js'])
        } catch (error) {
            console.log(error);
        }
    })
})

self.addEventListener('fetch', (e) => {
    console.log(e, 'fetch----');
    e.respondWith(async () => {
        try {
            const cache = await caches.open('v1')
            const res = await cache.match(e.request)
            if (res) {
                return res
            }
        } catch (error) {
            console.log(error);
        }
    })
})