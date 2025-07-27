import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';
import facebook_icon from './facebook_icon.svg'
import googleplus_icon from './googleplus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import logo from './logo.svg'
import arrow from './arrow.svg'
import logo_light from './logo_light.svg'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.svg'
import list_icon from './list_icon.svg'
import email_icon from './email_icon.png'
import upload_area from './upload_area.svg'
import user_icon from './user_icon.svg'
import bin_icon from './bin_icon.svg'
import comment_icon from './comment_icon.svg'
import tick_icon from './tick_icon.svg'
import star_icon from './star_icon.svg'
import cross_icon from './cross_icon.svg'
import home_icon from './home_icon.svg'
import gradientBackground from './gradientBackground.png'
import dashboard_icon_1 from './dashboard_icon_1.svg'
import dashboard_icon_2 from './dashboard_icon_2.svg'
import dashboard_icon_3 from './dashboard_icon_3.svg'
import dashboard_icon_4 from './dashboard_icon_4.svg'
import mylogo from './mylogo.svg';
import myblog_pic_1 from './myblog_pic_1.webp'; 
import myblog_pic_2 from './myblog_pic_2.webp';
import myblog_pic_3 from './myblog_pic_3.jpg';
import myblog_pic_4 from './myblog_pic_4.jpeg';
import myblog_pic_5 from './myblog_pic_5.avif';
import myblog_pic_6 from './myblog_pic_6.jpg';
import myblog_pic_7 from './myblog_pic_7.jpeg';
import myblog_pic_8 from './myblog_pic_8.jpg';
import myblog_pic_9 from './myblog_pic_9.webp';
import myblog_pic_10 from './myblog_pic_10.png';


export const assets = {
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    logo,
    mylogo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area,
    user_icon,
    bin_icon,
    comment_icon,
    tick_icon,
    star_icon,
    home_icon,
    gradientBackground,
    list_icon,
    cross_icon,
    dashboard_icon_1,
    dashboard_icon_2,
    dashboard_icon_3,
    dashboard_icon_4,
}
export const blogCategories = ["All", "Match Previews", "Player Spotlights", "Match Reviews", "T20 Leagues"]

export const blog_data = [
  {
    _id: "001",
    title: "India vs Australia: Tactical Breakdown of the 2025 Final",
    subTitle: "Tactical Highlights from the Grand Final",
    author: "Michael Brown",
    publishedOn: "2025-07-01T10:00:00Z",
    category: "Match Reviews",
    image: myblog_pic_1,
    isPublished: true,
    content: `
      <h2>India vs Australia Final Analysis</h2>
      <p>The 2025 World Cup final was a clash of titans. Both teams brought their A-game to the field, but strategic decisions ultimately decided the outcome.</p>
      <h3>First Innings Tactics</h3>
      <p>India opted to bat first and set a challenging total, capitalizing on Australia's weak middle-over bowling.</p>
      <h3>Australia's Chase</h3>
      <p>Despite an aggressive start, Australia faltered due to tight death bowling from Bumrah and Kuldeep’s economical spin in the middle overs.</p>
      <p>The match ended with India clinching their third title, and Kohli was named Player of the Match.</p>
    `
  },
  {
    _id: "002",
    title: "The Rise of Yash Dhull: A New Era for Indian Batting?",
    subTitle: "From U19 Captain to Senior Team Star",
    author: "Priya Singh",
    publishedOn: "2025-07-05T09:15:00Z",
    category: "Player Spotlights",
    image: myblog_pic_2,
    isPublished: true,
    content: `
      <h2>Yash Dhull's Evolution</h2>
      <p>Yash Dhull has emerged as one of India’s brightest batting prospects, rising quickly from U19 glory to the national stage.</p>
      <h3>Early Career</h3>
      <p>Dhull led India to a U19 World Cup victory and was quickly fast-tracked into domestic cricket.</p>
      <h3>Technique & Mentorship</h3>
      <p>His textbook technique, coupled with mentorship from Rahul Dravid, has made him a dependable top-order batter.</p>
      <p>Experts predict he could be a future captain.</p>
    `
  },
  {
    _id: "003",
    title: "ICC Announces New Rule Changes for 2025–2027 Cycle",
    subTitle: "What Every Fan and Player Needs to Know",
    author: "Arjun Mehta",
    publishedOn: "2025-07-10T11:30:00Z",
    category: "Match Previews",
    image: myblog_pic_3,
    isPublished: true,
    content: `
      <h2>New ICC Rule Changes</h2>
      <p>The ICC has announced a series of rule updates effective from August 2025. These include revisions to over-rate penalties and the Decision Review System (DRS).</p>
      <h3>Over-Rate Penalties</h3>
      <p>Teams will now be docked runs instead of just facing fines, adding real pressure during key matches.</p>
      <h3>DRS Enhancements</h3>
      <p>Ball-tracking will now include swing/curve detection, and a team will get an extra review if the original decision is umpire’s call.</p>
      <p>These changes aim to modernize and speed up the game.</p>
    `
  },
  {
  _id: "004",
  title: "5 Proven Drills to Improve Your Batting Timing",
  subTitle: "Practice Smarter, Not Just Harder",
  author: "Amit Verma",
  publishedOn: "2025-07-12T08:00:00Z",
  category: "T20 Leagues",
  image: myblog_pic_4,
  isPublished: true,
  content: `
    <h2>Batting Drills for Precision</h2>
    <p>To become a great batsman, timing is everything. Here are five drills designed by top coaches to help sharpen your technique and footwork.</p>
    <h3>1. Drop Ball Drill</h3>
    <p>Improves hand-eye coordination and encourages soft hands during stroke play.</p>
    <h3>2. Shadow Batting</h3>
    <p>Helps in muscle memory and replicating correct shot execution.</p>
    <h3>3. Reaction Ball Drill</h3>
    <p>Sharpens reflexes and builds agility at the crease.</p>
    <p>Practice consistently and track your improvements weekly.</p>
  `
},
{
  _id: "005",
  title: "Top 10 Craziest Moments from the IPL 2025",
  subTitle: "Drama, Laughter, and Magic in the Stadium",
  author: "Karan Malhotra",
  publishedOn: "2025-07-14T20:00:00Z",
  category: "T20 Leagues",
  image: myblog_pic_5,
  isPublished: true,
  content: `
    <h2>IPL 2025 Highlights</h2>
    <p>This year’s IPL had everything—super overs, unbelievable catches, and fan drama. Here are the top 10 moments that defined the tournament.</p>
    <h3>#1: Last-ball Six by Rinku Singh</h3>
    <p>Sealed a near-impossible chase for KKR against MI.</p>
    <h3>#5: DJ Bravo's Final Dance</h3>
    <p>A fitting farewell with a celebratory jig after taking the winning wicket.</p>
    <p>Each game was filled with passion and surprises, making this one of the most entertaining seasons yet.</p>
  `
},
{
  _id: "006",
  title: "How Jasprit Bumrah Mastered the Art of Death Bowling",
  subTitle: "What Makes Bumrah the GOAT of Death Overs?",
  author: "Sana Ali",
  publishedOn: "2025-07-07T17:00:00Z",
  category: "Player Spotlights",
  image: myblog_pic_6,
  isPublished: true,
  content: `
    <h2>Bumrah's Bowling Secrets</h2>
    <p>Jasprit Bumrah continues to dominate with his pinpoint yorkers and mental calm. This article breaks down what makes him elite.</p>
    <h3>His Weapons</h3>
    <p>Deadly yorkers, deceptive slower balls, and stifling line and length.</p>
    <h3>Mindset</h3>
    <p>Bumrah’s focus and confidence under pressure are unmatched, especially in the last overs.</p>
    <p>Learn how he studies batsmen and adapts to different pitch conditions with surgical precision.</p>
  `
},
{
  _id: "007",
  title: "The Science Behind the Perfect Cover Drive",
  subTitle: "Technique Meets Timing in This Iconic Shot",
  author: "Dr. Raghav Menon",
  publishedOn: "2025-07-03T15:20:00Z",
  category: "T20 Leagues",
  image: myblog_pic_7,
  isPublished: true,
  content: `
    <h2>Perfecting the Cover Drive</h2>
    <p>Considered the most elegant stroke in cricket, the cover drive combines precision, grace, and timing. Let’s break it down scientifically.</p>
    <h3>Biomechanics</h3>
    <p>Proper balance, a high elbow, and full extension are key. Core strength and foot placement make or break the shot.</p>
    <h3>Timing Over Power</h3>
    <p>Unlike slogging, cover drives rely on timing and placement, making them a mark of a technically sound batter.</p>
    <p>Practice against swinging balls and observe how pros like Kohli execute it under pressure.</p>
  `
},
{
  _id: "008",
  title: "10 Underrated Players Who Shined in the 2025 World Cup",
  subTitle: "Celebrating Cricket's Silent Match Winners",
  author: "Neha Ramesh",
  publishedOn: "2025-07-02T13:00:00Z",
  category: "Player Spotlights",
  image: myblog_pic_8,
  isPublished: true,
  content: `
    <h2>Unsung Heroes of 2025</h2>
    <p>The 2025 World Cup wasn’t just about the stars. Many lesser-known players stepped up when it mattered the most.</p>
    <h3>1. Charith Asalanka (Sri Lanka)</h3>
    <p>Consistently anchored the middle-order with match-winning partnerships.</p>
    <h3>4. Josh Inglis (Australia)</h3>
    <p>His quick-fire 30s changed the momentum of several matches.</p>
    <p>These players may not trend on Twitter, but they were instrumental in shaping tournament outcomes.</p>
  `
},
{
  _id: "009",
  title: "Fan Reactions: How Social Media Lit Up After the Final",
  subTitle: "When Fans Become Part of the Game",
  author: "Ananya Rao",
  publishedOn: "2025-07-01T22:00:00Z",
  category: "Match Reviews",
  image: myblog_pic_9,
  isPublished: true,
  content: `
    <h2>Cricket Twitter Explodes</h2>
    <p>Moments after the final whistle, cricket fans took to social media to share memes, heartbreak, and glory.</p>
    <h3>Top Tweets</h3>
    <p>"This game aged me 10 years in 10 minutes" – a fan after the super over.</p>
    <h3>Fan Art & Memes</h3>
    <p>Illustrations of Kohli lifting the trophy flooded Instagram.</p>
    <p>Social media has transformed fans into storytellers, keeping the cricket spirit alive beyond the field.</p>
  `
},
{
  _id: "010",
  title: "Fitness Routines of Top Cricketers You Can Try",
  subTitle: "Adopt Training Habits from the Best in the Game",
  author: "Ravi Patel",
  publishedOn: "2025-07-09T10:30:00Z",
  category: "Player Spotlights",
  image: myblog_pic_10,
  isPublished: true,
  content: `
    <h2>Train Like a Pro</h2>
    <p>Want to build stamina like Kohli or agility like Rashid Khan? This guide shows how top cricketers stay in peak condition.</p>
    <h3>Daily Workout Plans</h3>
    <p>Strength, conditioning, and mobility workouts from real routines.</p>
    <h3>Diet & Recovery</h3>
    <p>High-protein diets, hydration tips, and recovery practices like ice baths.</p>
    <p>Fitness isn’t just for athletes—these habits can benefit anyone looking to lead a healthier life.</p>
  `
}

];



export const comments_data = [
    {
        "_id": "6811ed9e7836a82ba747cb25",
        "blog": blog_data[0],
        "name": "Virat Kohli",
        "content": "Brilliant analysis on the match! Loved the detailed breakdown.",
        "isApproved": true,
        "createdAt": "2025-07-15T10:45:06.918Z",
        "updatedAt": "2025-07-15T10:45:06.918Z",
        "__v": 0
    },
    {
        "_id": "6810a752fbb942aa7cbf4adb",
        "blog": blog_data[1],
        "name": "Sarah Taylor",
        "content": "Great insight into the player stats! Really helped me understand the performance better.",
        "isApproved": true,
        "createdAt": "2025-07-14T14:17:54.832Z",
        "updatedAt": "2025-07-14T14:17:54.832Z",
        "__v": 0
    },
    {
        "_id": "680779aebef75c08f8b4898f",
        "blog": blog_data[2],
        "name": "Ricky Ponting",
        "content": "As a cricket enthusiast, this blog is a must-read. Keep it up!",
        "isApproved": true,
        "createdAt": "2025-07-13T11:12:46.547Z",
        "updatedAt": "2025-07-13T11:13:10.015Z",
        "__v": 0
    },
    {
        "_id": "680770aeb2897e5c28bf9b26",
        "blog": blog_data[3],
        "name": "Anya Shrubsole",
        "content": "Loved your opinion on the current T20 trends. Spot on!",
        "isApproved": false,
        "createdAt": "2025-07-12T10:34:22.020Z",
        "updatedAt": "2025-07-12T10:34:22.020Z",
        "__v": 0
    },
    {
        "_id": "68076468e32055c94a696cf5",
        "blog": blog_data[4],
        "name": "Ben Stokes",
        "content": "This helped me understand the series better. Looking forward to more posts like this.",
        "isApproved": true,
        "createdAt": "2025-07-11T09:42:00.444Z",
        "updatedAt": "2025-07-11T10:24:55.626Z",
        "__v": 0
    }
];


export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    "recentBlogs": blog_data.slice(0, 5),
}

export const footer_data = [
  {
    title: "CricBlog Links",
    links: ["Home", "Match Previews", "Player Spotlights", "T20 Leagues", "Contact Us"]
  },
  {
    title: "Get Involved",
    links: ["Submit a Blog", "Write for Us", "Sponsorships", "Advertise", "Feedback"]
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"]
  }
];
