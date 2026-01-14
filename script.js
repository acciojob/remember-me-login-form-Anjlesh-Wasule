const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');

// Check localStorage on page load
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingBtn.style.display = 'block';
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop form submission refresh

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingBtn.style.display = 'block';
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
    }
});

existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});