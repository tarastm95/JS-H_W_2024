function task3ShowInfo() {
    let sessions = localStorage.getItem('sessions');
    console.log(JSON.parse(sessions));
    let time = JSON.parse(sessions);
    let text = null;
    time.forEach((el)=>{
        let newDiv = document.createElement('div');
        newDiv.innerText = el;
        document.body.appendChild(newDiv);
    })
}
task3ShowInfo();
