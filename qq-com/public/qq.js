alert('qq的JavaScript文件')
const req = new XMLHttpRequest()
req.open("GET", "friends.json")
req.onreadystatechange = () => {
    if (req.readyState === 4 & req.status === 200) {
        alert(req.response)
    }
}
req.send()