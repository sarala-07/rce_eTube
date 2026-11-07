// eTube JS

// --- Data Types (Open console to see the data types) ---
// String
let siteName = "eTube";
let siteDescription = "A video sharing platform";
let isLoggedIn = false; // Boolean
let currentUser;
let featuredVideos = null; // Null

let tags = ["music", "gaming", "education", "comedy"]; // Array
let channel = {
  name: "eTube Channel",
  subscribers: 1000000,
  isVerified: true,
}; // Object

console.log("Welcome to " + siteName);
console.log(typeof siteName, typeof isLoggedIn, typeof currentUser, typeof featuredVideos, typeof tags, typeof channel);

// ------------------------- Dark Mode Toggle -------------------------
function toggleTheme() {
  document.body.classList.toggle("dark");
  let btn=document.getElementById("themeBtn");
  if(document.body.classList.contains("dark")){
    btn.innerHTML="&#9728;&#65039;Light";
  } else {
    btn.innerHTML="&#127769;Dark";
  }
}

// Subscribe button click event
let subscribed=false;
function toggleSubscribe() {
  let btn = document.getElementById("subscribebtn");
    if (subscribed===false) {
        subscribed=true;
        btn.innerText = "Subscribed ✓";
        btn.style.backgroundColor = "green";
        btn.classList.add("subscribed");
    }
    
    else{
        let sure=confirm("Are you sure you want to unsubscribe?");
        if (sure) {
            subscribed=false;
            btn.innerText = "Subscribe";
            btn.style.backgroundColor = "#cc0000";
            btn.classList.remove("subscribed");
        }
    }

}

function toggleVideoLike(btn) {
  const liked = btn.getAttribute("aria-pressed") === "true";
  const likes = Number(btn.dataset.likes);
  const updatedLikes = likes + (liked ? -1 : 1);
  const count = btn.querySelector(".like-count");

  btn.dataset.likes = updatedLikes;
  btn.setAttribute("aria-pressed", String(!liked));
  btn.firstChild.textContent = liked ? "Like · " : "Liked · ";
  count.textContent = formatLikeCount(updatedLikes);
}

function formatLikeCount(count) {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "")}K`;
  }
  return String(count);
}