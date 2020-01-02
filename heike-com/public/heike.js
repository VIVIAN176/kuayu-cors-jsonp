

// alert('这是黑客的js')
// const req = new XMLHttpRequest()
// req.open("GET", "http://qq.com:8888/friends.json")
// // req.open("GET", "https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js")
// req.onreadystatechange = () => {
//     if (req.readyState === 4 & req.status === 200) {
//         alert(req.response)
//     }
// }
// req.send()


function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = 'neverRepeatName-' + Math.random()
        // console.log(random)
        window[random] = (data) => {
            console.log(data)
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        };
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}

jsonp('http://localhost:8888/friends.js')
    .then((data) => {
        console.log(data)
    })







// script.onload = () => {
//     console.log('=============================')
//     console.log(window.xxx)
// }
