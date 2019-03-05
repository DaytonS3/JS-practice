const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

document.querySelector('#createButton').addEventListener('click', function(e){
    e.target.textContent = "did this work"
})


document.querySelector('#removeButton').addEventListener('click', function(){
    document.querySelectorAll('.note').forEach(function (note){
        note.remove()
    })
})