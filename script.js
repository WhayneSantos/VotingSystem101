const defaultData = {
    OPM: [{ id: "o1", name: "Eraserheads", img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400", votes: 0 },
          { id: "o2", name: "Ben&Ben", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400", votes: 0 }],
    Rock:[{ id: "r1", name: "Queen", img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=400", votes: 0 },
          { id: "r2", name: "Nirvana", img: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?w=400", votes: 0 }],
    Pop: [{ id: "p1", name: "BTS", img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400", votes: 0 },
          { id: "p2", name: "Taylor Swift", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400", votes: 0 }]
};

let musicData = JSON.parse(localStorage.getItem('bVoteData')) || defaultData;
let voteHistory = JSON.parse(localStorage.getItem('bVoteHist')) || [];
let currentGenre = 'OPM';
let isAdmin = false; // Initialized to False

function toggleAdmin() {
    isAdmin = !isAdmin;
    const logo = document.getElementById('adminToggle');
    logo.classList.toggle('admin-on');
    alert(isAdmin ? "Admin Mode Active: Unlimited Voting" : "Admin Mode Off: Rules Applied");
    renderGrid();
}

function renderGrid() {
    const grid = document.getElementById('bandGrid');
    const lockText = document.getElementById('lockStatus');
    grid.innerHTML = "";
    
    // In Admin mode, we ignore the local voted status
    const hasVoted = isAdmin ? false : localStorage.getItem(`voted_${currentGenre}`);

    lockText.innerText = isAdmin ? "MODE: UNLIMITED" : (hasVoted ? "LOCKED" : "READY");
    lockText.className = hasVoted ? "lock-status locked" : "lock-status";

    musicData[currentGenre].forEach(band => {
        const card = document.createElement('div');
        card.className = `band-card ${hasVoted ? 'disabled' : ''}`;
        
        card.onclick = () => castVote(band);
        
        card.innerHTML = `
            <img src="${band.img}" alt="${band.name}">
            <h3>${band.name}</h3>
            <p>${band.votes} Votes</p>
        `;
        grid.appendChild(card);
    });
    
    updateGlobalTotal();
    updateHistoryUI();
}

function castVote(band) {
    const hasVoted = localStorage.getItem(`voted_${currentGenre}`);
    if (hasVoted && !isAdmin) return; // Block if not admin

    // Find band and increment
    const bandRef = musicData[currentGenre].find(b => b.id === band.id);
    bandRef.votes++;

    voteHistory.push({
        name: band.name,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    if (!isAdmin) {
        localStorage.setItem(`voted_${currentGenre}`, "true");
    }

    localStorage.setItem('bVoteData', JSON.stringify(musicData));
    localStorage.setItem('bVoteHist', JSON.stringify(voteHistory));

    renderGrid();
    showToast();
}

function updateGlobalTotal() {
    let total = 0;
    for (let g in musicData) {
        musicData[g].forEach(b => total += b.votes);
    }
    document.getElementById('globalVotes').innerText = total;
}

function changeGenre(genre, btn) {
    currentGenre = genre;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('genreTitle').innerText = `${genre} Face-Off`;
    renderGrid();
}

function updateHistoryUI() {
    const list = document.getElementById('historyList');
    list.innerHTML = "";
    voteHistory.slice(-3).reverse().forEach(item => {
        const li = document.createElement('li');
        li.innerText = `• ${item.name} at ${item.time}`;
        list.appendChild(li);
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1500);
}

function resetVotes() {
    if(confirm("Wipe everything?")) {
        localStorage.clear();
        location.reload();
    }
}

renderGrid();