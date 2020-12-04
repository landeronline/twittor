// Envía la lógica al sw.js

// Guardar en el caché dinámico
function actualizaCacheDinamico(dynamicCache, req, res) {
    if(res.ok) { // si la respuesta tiene data
        return caches.open(dynamicCache).then( cache => {
            cache.put(req, res.clone())
            return res.clone()
        })
    } else {
        return res // si falló el caché y falló la red, retornamos lo que sea que venga en la respuesta
    }

}