const songs = [
    {
        title: "Oru Pere Varalaaru",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778686309/Oru-Pere-Varalaaru-MassTamilan.dev_ymn7ms.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    },
    {
        title: "Mutta Kalakki",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778686309/Mutta_Kalakki_mpa3ks.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        title: "Raavana Mavandaa",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778686303/Raavana-Mavandaa-MassTamilan.dev_txhz0u.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?w=500&q=80"
    },
    {
        title: "Thalapathy Kacheri",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778686303/Thalapathy_Kacheri_uio1tl.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80"
    },
    {
        title: "Loveah Sollitalea",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778686302/Loveah_Sollitalea_e4456s.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
    },
    {
        title: "Aathi",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766695/Aathi_j2gbjx.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    },
    {
        title: "Sodakku Mela Sodakku",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766697/Sodakku-Mela-Sodakku-MassTamilan.com_co47sp.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        title: "Vaathi Coming",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766871/Vaathi-Coming-MassTamilan.io_fteclx.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?w=500&q=80"
    },
    {
        title: "Arabic Kuthu",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766695/Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so_nwmahk.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80"
    },
    {
        title: "Polakatum Para Para",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766686/Polakatum-Para-Para-MassTamilan.io_oxuqol.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
    },
    {
        title: "Pavazha Malli",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778766689/Pavazha_Malli_z0sni4.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    },
    {
        title: "Chellamma",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767210/Chellamma-MassTamilan.fm_ksirfg.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        title: "Don'u Don'u Don'u",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767227/Don_u_Don_u_Don_u_The_Don_s_Romance_nopmli.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?w=500&q=80"
    },
    {
        title: "Naa Ready",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767241/Naa-Ready-MassTamilan.dev_y2mpx3.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80"
    },
    {
        title: "Yennai Maatrum Kadhale",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767275/Yennai-Maatrum-Kadhale_aubbmk.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
    },
    {
        title: "Aaluma Doluma",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767289/Aaluma-Doluma_dsyu9i.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    },
    {
        title: "Hukum - Thalaivar Alappara",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778767306/Hukum---Thalaivar-Alappara-MassTamilan.dev_yxazk5.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        title: "Hayyoda",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768800/Hayyoda-MassTamilan.dev_ngrhnb.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?w=500&q=80"
    },
    {
        title: "Monica",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768824/Monica_ycba9g.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80"
    },
    {
        title: "Paththavaikkum",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768844/Paththavaikkum_ckxs0f.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
    },
    {
        title: "Dheema",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768861/Dheema_v0emng.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    },
    {
        title: "Pookal Pookum",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768879/Pookal_Pookum_kz34jp.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        title: "Pirai Thedum",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768896/Pirai-Thedum_kasxb8.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?w=500&q=80"
    },
    {
        title: "Oru Paathi Kadhavu",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768914/Oru-Paathi-Kadhavu_jukdji.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80"
    },
    {
        title: "Yedhedho Pennae",
        artist: "Unknown",
        url: "https://res.cloudinary.com/dljvgj4rc/video/upload/v1778768932/Yedhedho-Pennae_tmagda.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
    }
];

let currentSongIndex = 0;
const audio = new Audio();

// DOM Elements
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeBar = document.getElementById('volume-bar');
const volumeIcon = document.getElementById('volume-icon');

const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const currentCover = document.getElementById('current-cover');
const cardsContainer = document.querySelector('.cards-container');

// Initialize
function init() {
    renderCards();
    loadSong(currentSongIndex);
}

// Render song cards in the main view
function renderCards() {
    cardsContainer.innerHTML = '';
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${song.cover}" alt="Cover">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="play-hover" onclick="playSpecificSong(${index}, event)">
                <i class="fas fa-play"></i>
            </div>
        `;
        // Make the whole card clickable
        card.onclick = () => playSpecificSong(index);
        cardsContainer.appendChild(card);
    });
}

function loadSong(index) {
    const song = songs[index];
    audio.src = song.url;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    currentCover.src = song.cover;
}

function playSpecificSong(index, event) {
    if (event) event.stopPropagation(); // Prevent card click if hover button is clicked
    currentSongIndex = index;
    loadSong(currentSongIndex);
    playSong();
}

function playSong() {
    audio.play();
    playBtn.classList.remove('fa-play-circle');
    playBtn.classList.add('fa-pause-circle');
}

function pauseSong() {
    audio.pause();
    playBtn.classList.remove('fa-pause-circle');
    playBtn.classList.add('fa-play-circle');
}

function togglePlay() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    
    // Update colors for webkit browsers
    progressBar.style.background = `linear-gradient(to right, var(--spotify-green) ${progressPercent}%, var(--spotify-light-grey) ${progressPercent}%)`;
    
    // Format time
    currentTimeEl.textContent = formatTime(currentTime);
    totalTimeEl.textContent = formatTime(duration);
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function setVolume(e) {
    const val = e.target.value;
    audio.volume = val / 100;
    volumeBar.style.background = `linear-gradient(to right, var(--spotify-green) ${val}%, var(--spotify-light-grey) ${val}%)`;
    
    if (audio.volume === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (audio.volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressBar.addEventListener('click', setProgress);
volumeBar.addEventListener('input', setVolume);

// Initialize volume bar background
volumeBar.style.background = `linear-gradient(to right, var(--spotify-green) 100%, var(--spotify-light-grey) 100%)`;

// Start app
init();
