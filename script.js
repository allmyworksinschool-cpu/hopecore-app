// ============================================
// HOPECORE - Complete JavaScript File
// Created by: Maddie Oh, Keira Molinski, Caitlin Cohen, Kate Schwartzberg
// ============================================

// ============================================
// STORY DATABASE - 15 Inspiring Stories
// ============================================

const stories = [
    {
        id: 1,
        title: "The Girl Who Taught a Village to Read",
        category: "Hero's Journey",
        fullStory: "At just 14 years old, Malala Yousafzai stood up to the Taliban and demanded education for girls. She lived in Pakistan's Swat Valley, where girls were being banned from school. Malala wrote a blog for the BBC describing her life under Taliban rule. She spoke at press conferences and demanded that girls receive the education they deserved. In 2012, a gunman boarded her school bus and shot her in the head. Miraculously, she survived. The attack sparked international outrage. Malala became the youngest person ever to win the Nobel Peace Prize at age 17. She used the prize money to build schools for girls in Pakistan, Nigeria, Jordan, and Lebanon. Today, over 130 million girls have been educated through programs inspired by her work. Malala once said, 'One child, one teacher, one book, one pen can change the world.' Her story proves that age is just a number when it comes to making a difference. She continues to fight for girls' education around the globe, proving that one voice really can change the world.",
        challenge: "Write down one thing you believe in that you're afraid to speak up about. Then share it with one trusted person.",
        readTime: 5,
        image: "🌟",
        reactions: 2450
    },
    {
        id: 2,
        title: "The Boy Who Cleaned His City",
        category: "Kindness Chronicles",
        fullStory: "At just 15 years old, Edgar from Mexico City noticed something that bothered him every single day. His neighborhood was covered in trash. Plastic bags floated down the streets. Empty bottles filled the gutters. The park where little kids played was littered with garbage. Instead of complaining or waiting for someone else to fix it, Edgar grabbed a broom from his kitchen closet. He started small — just cleaning the street in front of his own house. Then he cleaned the next street. Then one whole block. People noticed. Neighbors asked if they could help. Soon, Edgar was leading a team of volunteers every Saturday morning. Within one year, they had cleaned over 50 city blocks. They planted 200 new trees. They convinced the city government to install more trash cans and recycling bins. Edgar learned something powerful: you don't need permission to make things better. You don't need to be an adult or have money or power. You just need to start. Today, Edgar's movement has spread to three other cities in Mexico. He speaks at schools about environmental responsibility. He proved that one teenager with a broom can change an entire community.",
        challenge: "Pick up three pieces of trash today and throw them away properly. Bonus: recycle anything you can.",
        readTime: 4,
        image: "🧹",
        reactions: 1890
    },
    {
        id: 3,
        title: "The Teen Who Invented Cleaner Oceans",
        category: "Creative Sparks",
        fullStory: "When Boyan Slat was 16 years old, he went scuba diving in Greece. He was excited to see the beautiful sea creatures and coral reefs. But instead of fish and turtles, he saw plastic. More plastic bags than fish. Plastic bottles floating past his mask. Fishing nets tangled on the ocean floor. He couldn't stop thinking about it. Boyan was a student and an inventor. He loved engineering and solving problems. He started working on a design to clean the oceans using the ocean's own currents instead of fuel or electricity. His idea was simple but brilliant: place floating barriers in the ocean that would catch plastic while letting sea life pass safely underneath. Everyone said he was crazy. 'You're just a teenager,' they told him. 'This is impossible.' But Boyan didn't listen. He gave a TEDx talk about his idea. The video went viral. He raised over $2 million through crowdfunding. He dropped out of college to work on his project full-time. At age 18, he launched The Ocean Cleanup. Today, his machines remove tons of plastic from the Pacific Ocean every single month. He has over 100 engineers working for him. He has cleaned up rivers in Indonesia, Malaysia, and the Dominican Republic. Boyan proved that a teenager's idea can change the planet. He says, 'The only thing you need to change the world is an idea and the stubbornness to see it through.'",
        challenge: "Research one environmental problem in your community and write down one solution you could help with.",
        readTime: 5,
        image: "🌊",
        reactions: 3120
    },
    {
        id: 4,
        title: "Finding Hope After the Fire",
        category: "Overcoming Adversity",
        fullStory: "In November 2018, the Camp Fire destroyed the town of Paradise, California. It was the deadliest and most destructive wildfire in California history. The Hart family lost everything they owned. Their home of 20 years was reduced to ashes. Their car was melted in the driveway. Their photo albums, their children's baby pictures, their grandmother's heirloom jewelry — all gone. When they arrived at the emergency shelter, they had nothing but the clothes on their backs. They sat on cots in a crowded gymnasium, trying to figure out what to do next. Then something unexpected happened. Their neighbors started arriving at the shelter too. But they weren't just looking for help — they were bringing help. One neighbor had extra blankets. Another had collected clothes from relatives. A stranger donated money to buy food. Kids shared their toys with the Hart children without being asked. The Harts learned something powerful that week: when you lose everything, you discover what really matters. Not your stuff. Not your house. People. Community. Love. Over the next year, the Harts rebuilt their lives. They didn't rebuild around things — they rebuilt around relationships. They started a support group for other fire survivors. They helped raise money to rebuild the town library. Today, Paradise is still recovering, but the Harts have a new home and a new appreciation for what truly matters. They learned that hope isn't something you find — it's something you create together.",
        challenge: "Volunteer one hour of your time to help someone in need this week. It could be a neighbor, a family member, or a local shelter.",
        readTime: 5,
        image: "🔥",
        reactions: 1670
    },
    {
        id: 5,
        title: "The First Black Female Pilot",
        category: "Hero's Journey",
        fullStory: "Bessie Coleman was born in 1892 in Texas. Her family was poor. Her parents were sharecroppers. She walked four miles every day to attend a one-room schoolhouse. When she grew up, she moved to Chicago to live with her brothers. She heard stories from World War I veterans about pilots in France. She decided she wanted to fly. But every flight school in America turned her away. Why? Because she was Black. And because she was a woman. 'We don't train Negros,' they told her. 'Women can't be pilots.' Bessie refused to accept no for an answer. She saved her money from working as a manicurist. She learned French at night. Then she moved to France, where flight schools were more open-minded. In 1921, she earned her international pilot's license — the first Black woman in the world to do so. When she returned to America, she became a stunt pilot. She performed loops, barrel rolls, and wing-walking tricks that amazed crowds across the country. She refused to perform at any location that segregated Black people. She used her fame to speak out against racism and sexism. Her dream was to open a flight school for Black students. Sadly, she died in a plane crash in 1926 at age 34. But her legacy lived on. In 1931, the Bessie Coleman Aero Club was founded. In 1995, she was honored with a U.S. postage stamp. Her courage opened doors for every pilot who came after her — regardless of their race or gender.",
        challenge: "Learn about one person from history who broke barriers in your favorite field. Write down three facts about them.",
        readTime: 5,
        image: "✈️",
        reactions: 2340
    },
    {
        id: 6,
        title: "The Lunch Money That Fed a School",
        category: "Kindness Chronicles",
        fullStory: "Ryan was just a third grader when he noticed something that broke his heart. His best friend never had lunch. Every day, while other kids pulled out sandwiches and snacks, Ryan's friend sat with empty hands. Ryan didn't overthink it. He didn't ask permission. He just started bringing two sandwiches instead of one. He'd hand one to his friend like it was no big deal. 'My mom packed extra,' he'd say. Soon, he started bringing three sandwiches. Then four. Then five. Within a month, Ryan was packing ten lunches every single day. His mom finally asked why their grocery bill had doubled. Ryan explained, 'If I don't feed them, no one will.' Ryan's mom cried. Then she called the school. Together, they started a free lunch program. They reached out to local grocery stores for donations. They recruited parent volunteers to help pack bags. Within six months, the program was feeding over 100 students every day. Ryan's small act of kindness — a second sandwich — became a movement that spread to four other schools in the district. Ryan learned something that all of us should remember: you don't need to be rich or powerful to help someone. You just need to notice. And then you just need to act.",
        challenge: "Do one unexpected act of kindness for someone today — a note, a small gift, or just your time.",
        readTime: 4,
        image: "🥪",
        reactions: 1980
    },
    {
        id: 7,
        title: "The Blind Mountain Climber",
        category: "Mental Health Moments",
        fullStory: "Erik Weihenmayer went blind when he was 13 years old. A rare eye disease took his vision completely. Most people thought his life was over. They thought he'd need constant care. They thought he'd never have a real career or a family or adventures. Erik thought different. He refused to let blindness define him. He became a teacher. Then he became a wrestler — and a good one. Then he discovered rock climbing. 'When you're blind,' he says, 'every climb is like solving a puzzle with your hands and feet.' He got so good that professional climbers started taking him seriously. In 2001, Erik did something that experts said was impossible. He climbed Mount Everest — the tallest mountain in the world at 29,029 feet. He climbed it completely blind. The temperature was 40 degrees below zero. The wind was hurricane force. He couldn't see the crevasses that could swallow him. He couldn't see the ice cliffs that could crush him. But he kept climbing. And he reached the summit. Since then, Erik has climbed the Seven Summits — the highest mountain on every continent. He has kayaked the Grand Canyon. He has given speeches to millions of people around the world. He says, 'Blindness is not what holds you back. Fear is what holds you back. The only limits that exist are the ones you create in your own mind.' Erik's story teaches us that our perceived limitations are often just illusions. We are capable of so much more than we believe.",
        challenge: "Write down one fear you want to overcome this month. Then write one small step you can take toward overcoming it.",
        readTime: 5,
        image: "⛰️",
        reactions: 2870
    },
    {
        id: 8,
        title: "The Library That Survived a War",
        category: "Global Inspirations",
        fullStory: "In 1992, war broke out in Bosnia. The beautiful city of Sarajevo was under siege for nearly four years. Snipers hid in the hills. Bombs fell from the sky. People were afraid to walk outside. The National Library of Bosnia was one of the most beautiful buildings in the city — filled with over 1.5 million books, manuscripts, and historical documents dating back centuries. One night, the library was bombed. Fire engulfed the building. Thousands of books burned. The flames were so hot that firefighters couldn't get close. But the librarians couldn't just watch their history disappear. They did something incredible. They ran into the burning building. Again and again. They risked being shot by snipers. They risked being crushed by falling beams. They ran into the flames and grabbed as many books as they could carry. They threw books out of windows to colleagues waiting below. They stuffed books into their coats and backpacks. By the time the fire was out, they had saved over 100,000 books. Then they hid them. In apartments. In basements. In secret storage rooms. They kept the books safe for four years until the war ended. When peace finally came, they brought the books back and rebuilt the library. Today, the National Library stands again — a symbol of hope and resistance. The librarians understood something profound: when you destroy books, you destroy history. When you burn books, you erase cultures. But when you save books, you save the future. They proved that ideas cannot be killed by bombs.",
        challenge: "Visit your local library this week and check out one book from a culture or country different from your own.",
        readTime: 5,
        image: "📚",
        reactions: 1560
    },
    {
        id: 9,
        title: "The Deaf Musician Who Heard Beethoven",
        category: "Creative Sparks",
        fullStory: "Ludwig van Beethoven is one of the most famous composers in history. He wrote symphonies, sonatas, and concertos that are still performed today, over 200 years later. But here's what most people don't know: Beethoven was deaf. He started losing his hearing when he was only 26 years old. By age 44, he was completely deaf. He couldn't hear the music he was writing. He couldn't hear his orchestra play his symphonies. He couldn't hear the applause from audiences. Most musicians would have given up. Beethoven did not. He found another way. He learned to 'hear' through vibrations. He would put one end of a pencil in his mouth and press the other end against his piano. The vibrations traveled through the pencil into his jawbone. He felt the music instead of hearing it. He wrote some of his greatest works during this time — including his famous Ninth Symphony. When it premiered in 1824, Beethoven stood on stage conducting even though he couldn't hear a single note. At the end, one of the singers had to turn him around so he could see the audience applauding. Beethoven once wrote, 'I will seize fate by the throat. It shall not overcome me.' His story teaches us that creativity finds a way. When one door closes, you kick open another.",
        challenge: "Find a creative way to express yourself today — draw, write, sing, dance, or build something. Don't worry if it's 'good.' Just create.",
        readTime: 4,
        image: "🎵",
        reactions: 2230
    },
    {
        id: 10,
        title: "The Teen Who Saved 2 Million Babies",
        category: "Hero's Journey",
        fullStory: "In the early 2000s, a 15-year-old student named Jane Chen read a shocking statistic: every year, 20 million babies are born prematurely around the world. Four million of them die within their first month of life. The reason? They couldn't stay warm. Incubators in hospitals cost $20,000 — far too expensive for rural clinics in developing countries. Jane couldn't stop thinking about those babies. She was a design student at Stanford University. She gathered a team of fellow students. Their goal: invent a baby warmer that cost less than $25. Everyone said it was impossible. 'You can't build a medical device for twenty-five dollars,' they said. Jane and her team ignored them. They worked for two years. They tested dozens of prototypes. They traveled to India and Nepal to meet with doctors and mothers. And finally, they succeeded. They invented the Embrace Baby Warmer — a small sleeping bag with a wax insert that can be heated with electricity or boiling water. It stays warm for up to six hours. It costs just $25. Today, the Embrace warmer has saved over 2 million babies in 20 countries. Jane was just a teenager when she started. She proved that you don't need to wait until you're grown up to change the world. You just need an idea and the willingness to work until it becomes real.",
        challenge: "Think of one problem in the world that bothers you. Write down one small solution you could contribute.",
        readTime: 5,
        image: "👶",
        reactions: 3450
    },
    {
        id: 11,
        title: "The Homeless Man Who Became a Professor",
        category: "Overcoming Adversity",
        fullStory: "When he was a teenager, J. D. Vance had a chaotic childhood. His mother struggled with addiction. His father was absent. He was raised by his grandmother in a poor, struggling town in Ohio. After high school, he joined the Marines and served in Iraq. When he came home, he didn't know what to do next. He had no money. He had no connections. He couch-surfed at friends' apartments. Sometimes he had nowhere to sleep at all. But J. D. refused to give up. He enrolled in community college. He transferred to Ohio State University. He worked two jobs to pay his rent. He studied in coffee shops because he didn't have a desk. Then he got into Yale Law School — one of the best law schools in the world. He felt like an impostor. Everyone else seemed rich and confident. He had holes in his shoes. But he kept going. He graduated. He became a professor. Then he wrote a book about his life called 'Hillbilly Elegy.' The book became a number one bestseller. It was made into a movie. Today, J. D. Vance is a United States Senator. He says, 'Where you start in life does not determine where you end up.' His story proves that your past does not define your future. You can rise from the lowest place to the highest.",
        challenge: "Write down three goals you want to achieve in the next five years. Then write one small step toward each goal.",
        readTime: 5,
        image: "🎓",
        reactions: 1920
    },
    {
        id: 12,
        title: "The Soccer Team That Rafted to Safety",
        category: "Global Inspirations",
        fullStory: "In 2018, twelve boys from a youth soccer team in Thailand went exploring in a cave complex after practice. They were between the ages of 11 and 16. Their coach was 25. Heavy rains started falling. Water flooded the cave entrance. The boys were trapped inside — miles from the exit, surrounded by rising water, with no food and no light. For nine days, no one could find them. The whole world watched and prayed. Divers from around the globe flew to Thailand to help. The British Navy sent experts. The U.S. military sent teams. Finally, on day nine, two British divers found them — alive. They were weak and hungry but alive. But getting them out was another problem. The passages were so narrow that even experienced divers had trouble. The boys couldn't swim. They had no diving experience. The divers had to teach them basic diving skills in a few days. Then the rescue began. Over three days, all 12 boys and their coach were brought out safely. The rescue mission involved over 10,000 people, including 100 international divers. It was called the most dangerous cave rescue in history. The boys survived because they stayed calm and worked together. Their coach taught them meditation to conserve energy. They shared their limited food equally. They never gave up hope. Their story reminds us that even in the darkest situations, hope and teamwork can save lives.",
        challenge: "Reach out to a teammate or group member and tell them one thing you appreciate about working with them.",
        readTime: 5,
        image: "⚽",
        reactions: 2780
    },
    {
        id: 13,
        title: "The Woman Who Walked for Water",
        category: "Kindness Chronicles",
        fullStory: "In a small village in Kenya, a woman named Lydia had to walk six miles every day to get clean water for her family. She woke at 4 AM, walked three miles to the river, filled two heavy jugs, and walked three miles home. She did this every single day for over 20 years. She watched her children grow up thirsty. She watched her neighbors get sick from dirty water. One day, she decided she'd had enough. Lydia had no money. She had no political power. She had no engineering degree. What she had was determination. She started talking to her neighbors. 'What if we built a well?' she asked. They laughed at first. 'We're just poor villagers,' they said. 'We can't build a well.' But Lydia kept talking. She found one neighbor who knew something about digging. She found another who had some tools. She found another who knew where groundwater might be. Slowly, the project grew. They saved money from selling vegetables. They bought concrete and pipes. They dug for months, hitting rock and clay. But they kept digging. Finally, after eight months, they hit water. Clean, fresh water. Lydia walked to the well on what would have been her usual trip to the river. She filled her jugs in five minutes. She walked home in 20 minutes. She spent the rest of the morning playing with her children instead of carrying water. Lydia proved that you don't need to be rich or powerful to solve big problems. You just need to start. Today, her village has four wells. Other villages have copied their model. Lydia became a local hero — not because she had special skills, but because she refused to accept things the way they were.",
        challenge: "Identify one small problem in your school or neighborhood. Write down one thing you could do to help fix it.",
        readTime: 4,
        image: "💧",
        reactions: 1650
    },
    {
        id: 14,
        title: "The Astronaut Who Failed Her First Test",
        category: "Mental Health Moments",
        fullStory: "Mae Jemison always dreamed of going to space. She was a brilliant student. She graduated from Stanford at 16. She became a medical doctor. She worked in Africa for the Peace Corps. She applied to NASA's astronaut program. She was rejected. She applied again. She was rejected again. Most people would have given up after two rejections. Mae did not. She studied harder. She gained more experience. She learned everything she could about space travel. She applied a third time. And a fourth time. Finally, on her fifth application, she was accepted. In 1992, Dr. Mae Jemison became the first Black woman to travel to space. She spent eight days aboard the Space Shuttle Endeavour, conducting experiments on bone cells and motion sickness. When she looked back at Earth from space, she said, 'You see how small the planet is. You realize that all our conflicts and differences don't matter up here.' But Mae's real lesson came from her failures. 'Don't let anyone rob you of your imagination,' she says. 'Don't let anyone tell you that you can't do something because of your gender or your race or your background. The only person who can decide what you're capable of is you.' Her story teaches us that rejection is not the end. It's just a redirection. Keep applying. Keep trying. Keep believing in yourself.",
        challenge: "Think about a time you failed at something. Write down one thing you learned from that failure.",
        readTime: 4,
        image: "🚀",
        reactions: 2980
    },
    {
        id: 15,
        title: "The Boy Who Gave Away His Birthday",
        category: "Kindness Chronicles",
        fullStory: "Owen was turning 7 years old. Most kids his age would be excited about presents — toys, video games, maybe a new bike. But Owen had a different idea. Earlier that year, his family had visited a homeless shelter near their home. Owen saw kids his own age who didn't have beds or blankets or even socks. He couldn't stop thinking about them. When his mom asked what he wanted for his birthday, Owen said, 'Nothing for me. I want to help the shelter kids.' His mom was surprised. 'Are you sure?' she asked. 'You won't get any presents.' Owen was sure. He asked his friends to donate money instead of buying him toys. He asked his relatives to skip the gift cards. The response was incredible. Owen's friends brought dollars from their piggy banks. His aunt donated $100. His grandparents matched every donation. On his birthday, Owen raised over $500. He took the money to the shelter himself and asked what they needed most. Blankets and socks, they said. Owen bought 50 blankets and 100 pairs of socks. He helped hand them out to the kids at the shelter. 'Their smiles were better than any present,' he said. Owen's story spread on social media. Other kids started doing the same thing for their birthdays. Today, the 'Birthday Donation' movement has raised over $100,000 for homeless shelters across the country. Owen was just 7 years old. He learned that the best gift you can give isn't something you buy — it's something you do.",
        challenge: "Think about your next birthday. Could you ask for donations instead of presents? If not, find another way to give back this month.",
        readTime: 4,
        image: "🎂",
        reactions: 3120
    }
];

// ============================================
// SPLASH SCREEN & PAGE LOADING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splashScreen');
    const mainApp = document.getElementById('mainApp');
    
    setTimeout(() => {
        if (splash) splash.style.display = 'none';
        if (mainApp) mainApp.classList.remove('hidden');
        updateDailyStory();
        updateTrendingStories();
        loadAllStoriesGrid();
        setupReadMoreButton();
        setupMiniStoryButtons();
        setupTab2Stories();
    }, 3500);
});

// ============================================
// DAILY STORY FUNCTIONS
// ============================================

function getTodaysStory() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const storyIndex = dayOfYear % stories.length;
    return stories[storyIndex];
}

function updateDailyStory() {
    const todayStory = getTodaysStory();
    
    const categoryElement = document.querySelector('.story-category');
    const titleElement = document.querySelector('.story-title');
    const excerptElement = document.querySelector('.story-excerpt');
    const challengeElement = document.querySelector('.story-challenge p');
    const readTimeElement = document.querySelector('.story-meta span:first-child');
    
    if (categoryElement) categoryElement.innerHTML = `✨ ${todayStory.category}`;
    if (titleElement) titleElement.textContent = todayStory.title;
    if (excerptElement) excerptElement.textContent = todayStory.fullStory.substring(0, 180) + '...';
    if (challengeElement) challengeElement.innerHTML = todayStory.challenge;
    if (readTimeElement) readTimeElement.innerHTML = `📖 ${todayStory.readTime} min read`;
    
    window.currentFullStory = todayStory.fullStory;
    window.currentStoryChallenge = todayStory.challenge;
    window.currentStoryTitle = todayStory.title;
}

function setupReadMoreButton() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            alert(`📖 ${window.currentStoryTitle}\n\n${window.currentFullStory}\n\n✨ Today's Challenge:\n${window.currentStoryChallenge}`);
        });
    }
}

// ============================================
// TRENDING STORIES (by reactions)
// ============================================

function updateTrendingStories() {
    const sortedByReactions = [...stories].sort((a, b) => b.reactions - a.reactions);
    const top3 = sortedByReactions.slice(0, 3);
    
    const miniCards = document.querySelectorAll('.mini-story-card');
    if (miniCards.length >= 3) {
        for (let i = 0; i < 3; i++) {
            const story = top3[i];
            const categoryDiv = miniCards[i].querySelector('.mini-category');
            const titleH4 = miniCards[i].querySelector('h4');
            const statsSpan = miniCards[i].querySelector('.mini-stats');
            
            if (categoryDiv) categoryDiv.innerHTML = `✨ ${story.category}`;
            if (titleH4) titleH4.textContent = story.title;
            if (statsSpan) statsSpan.innerHTML = `⭐ ${story.reactions.toLocaleString()} reactions`;
            
            // Add click handler
            miniCards[i].style.cursor = 'pointer';
            miniCards[i].addEventListener('click', function() {
                alert(`📖 ${story.title}\n\n${story.fullStory.substring(0, 200)}...\n\n✨ Challenge:\n${story.challenge}`);
            });
        }
    }
}

// ============================================
// ALL STORIES GRID (for Home Page)
// ============================================

function loadAllStoriesGrid() {
    const grid = document.getElementById('allStoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const displayStories = stories.slice(0, 6);
    
    displayStories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'mini-story-card';
        storyCard.style.cursor = 'pointer';
        storyCard.innerHTML = `
            <div class="mini-category">✨ ${story.category}</div>
            <h4>${story.title}</h4>
            <p style="font-size: 12px; color: #666; margin: 8px 0;">${story.fullStory.substring(0, 70)}...</p>
            <div class="mini-stats">⭐ ${story.reactions.toLocaleString()} reactions</div>
        `;
        storyCard.addEventListener('click', function() {
            alert(`📖 ${story.title}\n\n${story.fullStory}\n\n✨ Challenge:\n${story.challenge}`);
        });
        grid.appendChild(storyCard);
    });
}

// ============================================
// TAB 2: MORE STORIES PAGE
// ============================================

function setupTab2Stories() {
    const tab2Grid = document.getElementById('moreStoriesGrid');
    if (!tab2Grid) return;
    
    tab2Grid.innerHTML = '';
    
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.style.marginBottom = '16px';
        storyCard.style.cursor = 'pointer';
        storyCard.innerHTML = `
            <div class="story-category">✨ ${story.category}</div>
            <h3 class="story-title" style="font-size: 18px;">${story.title}</h3>
            <div class="story-meta">
                <span>📖 ${story.readTime} min read</span>
                <span>⭐ ${story.reactions.toLocaleString()} reactions</span>
            </div>
            <p class="story-excerpt" style="font-size: 14px;">${story.fullStory.substring(0, 120)}...</p>
            <button class="read-full-story-btn" data-id="${story.id}" style="background: none; border: none; color: #FFB347; font-weight: 600; margin-top: 12px; cursor: pointer;">Read full story →</button>
        `;
        tab2Grid.appendChild(storyCard);
    });
    
    // Add event listeners to all read buttons in tab 2
    document.querySelectorAll('.read-full-story-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            const story = stories.find(s => s.id === id);
            if (story) {
                alert(`📖 ${story.title}\n\n${story.fullStory}\n\n✨ Challenge:\n${story.challenge}`);
            }
        });
    });
}

// ============================================
// NAVIGATION BETWEEN PAGES
// ============================================

const navBtns = document.querySelectorAll('.nav-btn');
const pages = {
    home: document.getElementById('homePage'),
    tasks: document.getElementById('tasksPage'),
    share: document.getElementById('sharePage'),
    profile: document.getElementById('profilePage'),
    stories: document.getElementById('storiesPage')
};

if (navBtns.length > 0 && pages.home) {
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageName = this.getAttribute('data-page');
            
            navBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            Object.keys(pages).forEach(page => {
                if (pages[page]) pages[page].classList.add('hidden');
            });
            
            if (pages[pageName]) pages[pageName].classList.remove('hidden');
            
            if (pageName === 'home') updateGreeting();
            if (pageName === 'stories') setupTab2Stories();
        });
    });
}

// ============================================
// GREETING BASED ON TIME OF DAY
// ============================================

function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('.welcome-header h2');
    if (greetingElement) {
        if (hour < 12) greetingElement.textContent = 'Good morning,';
        else if (hour < 18) greetingElement.textContent = 'Good afternoon,';
        else greetingElement.textContent = 'Good evening,';
    }
}

// ============================================
// TASK CHECKBOXES & HOPE POINTS
// ============================================

let hopePoints = 285;

function updateHopePoints(pointsEarned) {
    hopePoints += pointsEarned;
    const scoreNumber = document.querySelector('.score-number');
    if (scoreNumber) scoreNumber.textContent = hopePoints;
}

const checkboxes = document.querySelectorAll('.task-card input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            const rewardText = this.closest('.task-card')?.querySelector('.task-reward');
            if (rewardText) {
                const pointsMatch = rewardText.textContent.match(/\d+/);
                if (pointsMatch) updateHopePoints(parseInt(pointsMatch[0]));
            }
        }
    });
});

// ============================================
// STORY SUBMISSION (ANONYMOUS)
// ============================================

const submitBtn = document.getElementById('submitStory');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        const category = document.getElementById('storyCategory')?.value;
        const title = document.getElementById('storyTitle')?.value;
        const content = document.getElementById('storyContent')?.value;
        
        if (!category || !title || !content) {
            alert('Please fill out all fields before submitting your story.');
            return;
        }
        
        alert('✨ Thank you for sharing your story! Our team will review it and may feature it in an upcoming Daily Drop. You just earned +50 Hope Points for your courage! ✨');
        
        updateHopePoints(50);
        
        if (document.getElementById('storyCategory')) document.getElementById('storyCategory').value = '';
        if (document.getElementById('storyTitle')) document.getElementById('storyTitle').value = '';
        if (document.getElementById('storyContent')) document.getElementById('storyContent').value = '';
    });
}

// ============================================
// QUOTE ROTATION
// ============================================

const quotes = [
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Keep your face always toward the sunshine — and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" }
];

function rotateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    if (quoteText && quoteAuthor) {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
    }
}

rotateQuote();

// ============================================
// PROFILE STATS UPDATE
// ============================================

function updateProfileStats() {
    const completedTasks = document.querySelectorAll('.task-card input[type="checkbox"]:checked').length;
    const storiesRead = Math.floor(Math.random() * 20) + 5;
    const streakDays = Math.floor(Math.random() * 10) + 1;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = storiesRead;
        statNumbers[1].textContent = completedTasks;
        statNumbers[2].textContent = streakDays;
    }
}

setTimeout(updateProfileStats, 500);

// ============================================
// SETTINGS TOGGLES
// ============================================

const toggles = document.querySelectorAll('.toggle-switch input');
toggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
        const settingName = this.closest('.setting-item')?.querySelector('span')?.textContent;
        const isEnabled = this.checked;
        console.log(`${settingName} toggled: ${isEnabled ? 'ON' : 'OFF'}`);
        if (settingName?.includes('Dark Mode') && isEnabled) {
            document.body.style.background = '#1a1a2e';
            document.querySelector('.main-app').style.background = '#2a2a3e';
        } else if (settingName?.includes('Dark Mode') && !isEnabled) {
            document.body.style.background = 'linear-gradient(135deg, #FFF9E8 0%, #E8F4FD 100%)';
            document.querySelector('.main-app').style.background = '#FFFFFF';
        }
    });
});

// ============================================
// HELPER FUNCTION FOR MINI STORY BUTTONS
// ============================================

function setupMiniStoryButtons() {
    document.querySelectorAll('.read-mini-story').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const story = stories.find(s => s.id === id);
            if (story) {
                alert(`📖 ${story.title}\n\n${story.fullStory}\n\n✨ Challenge:\n${story.challenge}`);
            }
        });
    });
}

console.log('🌟 HopeCore loaded! 15 inspiring stories ready to share. 🌟');
