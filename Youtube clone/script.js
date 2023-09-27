const notiBtn = document.querySelector(".notifications-btn");
const board = document.querySelector(".notifications-board")
const count = document.querySelector(".notifications-count");

notiBtn.addEventListener("click", () => {
    if(board.style.opacity === "0") {
        board.style.opacity = "1";
        board.style.pointerEvents = "all";
        count.style.display = "none";
    }else {
        board.style.opacity = "0";
        board.style.pointerEvents = "none";
    }
});

const videosGrid = document.querySelector(".videos-container");
const videoItems = [{
    id: "sjfopjsfposf",
    img: "https://i.ytimg.com/vi/KqnNbDUiavA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Y5oEbxxAvAJhzkTCXi5dCiCzyw",
    vidTitle: "ASMR Programming - QR Code Generator With Javascript - No Talking",
    vidAuthor: "Coder ASMR",
    vidStats: "1.5K views &#183; 3 weeks ago"
}, {
    id: "sdjfjsjfpisjf",
    img: "https://i.ytimg.com/vi/4daUujBgQQ8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8kXaQ0SD4GlP6AnQwN4C1oZIThg",
    vidTitle: "What Are DLLs?",
    vidAuthor: "Techquickie",
    vidStats: "810K views &#183; 1 year ago"
}, {
    id: "nvoihfjofseo",
    img: "https://i.ytimg.com/vi/ldwlOzRvYOU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMJl-mLJnpZg2RTpjDQvAiFZSVbA",
    vidTitle: "Responsive Portfolio Website From Scratch",
    vidAuthor: "How To Become a Developer",
    vidStats: "50K views &#183; 4 months ago"
}, {
    id: "jfgjeopjsfkk",
    img: "https://i.ytimg.com/vi/kku0fVfksrk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQO6FjjRnQjPniSsrYIr-LDEfaPA",
    vidTitle: "Cybersecurity Tip: Build A Basic Home Lab",
    vidAuthor: "MyDFIR",
    vidStats: "12K views &#183; 10 days ago"
}, {
    id: "hkhkhpeefdi",
    img: "https://i.ytimg.com/vi/tAuRQs_d9F8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9Ejc9YugjPcRZuZ5ApnoPE9Q22Q",
    vidTitle: "8 Design Patterns EVERY Developer Should Know",
    vidAuthor: "NeetCode",
    vidStats: "620K views &#183; 6 months ago"
}, {
    id: "biuudjflllgj",
    img: "https://i.ytimg.com/vi/nP0-oYGiqts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4joE4eBYIwT4bodM336uJ812Bew",
    vidTitle: "How I Learned to Code in 6 MONTHS & Got a Job Offer (Self-Taught)",
    vidAuthor: "Smoljames",
    vidStats: "81K views &#183; 6 months ago"
}, {
    id: "jllfmmsofjjnvj",
    img: "https://i.ytimg.com/vi/65C702inBcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW0FuSeux9sbynM1HhmN2uPRtqRA",
    vidTitle: "Latest Bootstrap v5.3 Tutorial Complete Responsive Website Using Bootstrap 5.3",
    vidAuthor: "coding with sharan",
    vidStats: "876 views &#183; 1 month ago"
}, {
    id: "vvvtsuudhhgkg",
    img: "https://i.ytimg.com/vi/epfz1O7aID0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRCVmbewkQPE-2wYgih6KzSY4eNA",
    vidTitle: "How to Get Ahead of 99% of Programmers (Starting Today!)",
    vidAuthor: "Internet Made Coder",
    vidStats: "57K views &#183; 4 weeks ago"
}, {
    id: "iidofjjjgdjkgi",
    img: "https://i.ytimg.com/vi/30LWjhZzg50/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBa0BSpr1l3FkjzEcAO61-ITHeYjw",
    vidTitle: "Learn TypeScript - Full Tutorial",
    vidAuthor: "freeCodeCamp.org",
    vidStats: "538K views &#183; 9 months ago"
}, {
    id: "lamovvpiilfkdh",
    img: "https://i.ytimg.com/vi/G0jO8kUrg-I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUH9UV1NpVk2sOHAjr9cej_no9xA",
    vidTitle: "How To Create To-Do List App Using HTML CSS And JavaScript | Task App In...",
    vidAuthor: "GreatStack",
    vidStats: "169K views &#183; 4 months ago"
}];

const dynamicItems = () => {
    return (videosGrid.innerHTML = videoItems.map((x) => {
        return `
        <div id=${x.id} class="video-container">
                            <img class="thumbnail" src=${x.img} alt="">
                            <div class="video-time">5:30</div>
                            <div class="video-info-container">
                                <img src="https://yt3.ggpht.com/ytc/AOPolaR9zi_hlH8MQ80WIyB3qcDsqGvcJY2f-HoPcS_gtg=s68-c-k-c0x00ffffff-no-rj" alt="">
                                <div class="video-info">
                                    <h1>${x.vidTitle}</h1>
                                    <p>${x.vidAuthor}</p>
                                    <p>${x.vidStats}</p>
                                </div>
                            </div>
                        </div>
        `
    }).join(""));
};

dynamicItems();