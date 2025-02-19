function updateClock() {
    const now = new Date();
    
    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format time (add leading zero)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately

// Dark / Light mode toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.innerText = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});
