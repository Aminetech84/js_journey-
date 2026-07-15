const charArea = document.getElementById('char-area');
charArea.addEventListener('input', ()=> {
const val = charArea.value;
const chars= val.length;
const words = val.trim() === '' ? 0 : val.trim().split(/\s+/).length;
const lines= val.split('\n').length;
const readSec = Math.round((words / 200) * 60);

document.getElementById('char-count').textContent = chars;
document.getElementById('word-count').textContent = words;
document.getElementById('line-count').textContent = lines;
document.getElementById('read-time').textContent = readSec < 60 ? readSec + 's' : Math.ceil(readSec/60) + 'm';



});