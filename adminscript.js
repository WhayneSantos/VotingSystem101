// Starting votes at 0
const defaultData = {
    OPM: [
        { id: "opm1", name: "Eraserheads", img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400", votes: 0 },
        { id: "opm2", name: "Ben&Ben", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400", votes: 0 }
    ],
    Rock: [
        { id: "rock1", name: "Queen", img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=400", votes: 0 },
        { id: "rock2", name: "Nirvana", img: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?w=400", votes: 0 }
    ],
    Pop: [
        { id: "pop1", name: "BTS", img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400", votes: 0 },
        { id: "pop2", name: "Taylor Swift", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400", votes: 0 }
    ]
};

// Global variables
let musicData = JSON.parse(localStorage.getItem('beatVote_Data')) || defaultData;
let voteHistory = JSON.parse(localStorage.getItem('beatVote_History')) || [];
let currentGenre = 'OPM';
let adminMode = true; // SET TO FALSE LATER TO LOCK VOTING

function renderGrid() {
    const grid = document.getElementById('bandGrid');
    const lockStatus = document.getElementById('lockStatus');
    grid.innerHTML = "";
    
    // In Admin Mode, we ignore the localStorage 'voted' key
    const hasVoted = adminMode ? false : localStorage.getItem(`voted_${currentGenre}`);

    lockStatus.innerText = adminMode ? "ADMIN MODE: UNLIMITED VOTING" : (hasVoted ? "VOTE REGISTERED" : "AWAITING VOTE");
    lockStatus.className = hasVoted ? "lock-status locked" : "lock-status";

    musicData[currentGenre].forEach(band => {
        const card = document.createElement('div');
        card.className = `band-card ${hasVoted ? 'disabled' : ''}`;
        
        // Always clickable if adminMode is true
        card.onclick = () => castVote(band);
        
        card.innerHTML = `
            <img src="${band.img}" alt="${band.name}">
            <h3>${band.name}</h3>
            <p>${band.votes} Votes</p>
        `;
        grid.appendChild(card);
    });
    
    updateHistoryUI();
}

function castVote(band) {
    console.log("Cast vote triggered for:", band.name);

    // Find band by ID and increment vote
    const bandRef = musicData[currentGenre].find(b => b.id === band.id);
    bandRef.votes++;

    // Add to History Array
    voteHistory.push({
        name: band.name,
        genre: currentGenre,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });

    // Save data to Local Storage
    if (!adminMode) {
        localStorage.setItem(`voted_${currentGenre}`, "true");
    }
    localStorage.setItem('beatVote_Data', JSON.stringify(musicData));
    localStorage.setItem('beatVote_History', JSON.stringify(voteHistory));

    // Refresh UI
    renderGrid();
    showToast();
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
    // Show last 5 votes in history
    voteHistory.slice(-5).reverse().forEach(item => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid #1f2937";
        li.style.padding = "5px 0";
        li.innerText = `• ${item.name} (${item.genre}) - ${item.time}`;
        list.appendChild(li);
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1500);
}

function resetVotes() {
    if(confirm("Completely reset all votes to 0?")) {
        localStorage.clear();
        musicData = JSON.parse(JSON.stringify(defaultData)); // Deep copy default
        voteHistory = [];
        location.reload();
    }
}

// Initial Load
renderGrid();