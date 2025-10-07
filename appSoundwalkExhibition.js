// ================================
// Vue + Vuetify + Supabase setup
// ================================

// STEP 1 — Create a Supabase project at https://supabase.com/
// STEP 2 — In your Supabase dashboard:
//   - Create a table called "listeners" with columns:
//       id (int8, PK, autoincrement)
//       soundwalk_id (int8)
//       listener_name (text)
//       created_at (timestamp, default: now())
//   - Go to Table Editor > "listeners" > enable Row Level Security (RLS)
//   - Create a policy: “Enable insert and read access for all users”
//       → for select & insert, use: `true`
//   - Copy your project URL and public anon key
// STEP 3 — Paste them below:

const SUPABASE_URL = "https://zjqxhzmwfngslfawiprr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqcXhoem13Zm5nc2xmYXdpcHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3ODg2MzksImV4cCI6MjA3NTM2NDYzOX0.7HeZDvk8gdjPmFlYOJacwNv4ZTAjxRgs9DMu-Kcx8rk";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



// ================================
// Vue Application
// ================================


const { createApp, ref, onMounted, onUnmounted } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
    theme: {
        defaultTheme: "light",
    },
});

createApp({
    setup() {
        const soundwalks = ref([
            // 👇 Fill in your students' soundwalk info here

            {
                // team 1
                id: 1,
                title: "Good Morning McMaster",
                authors: "Sandhya & Lisa",
                description: "This soundwalk captures the calm, overlooked beauty of McMaster’s campus in the early morning hours. Using field recordings of birds, footsteps, and ambient sounds, the project invites listeners to experience a quieter side of university life. Inspired by Cat Hope’s ideas on locative listening, it explores how time and place shape perception. Structured like a short podcast, it blends narration and natural sound to evoke reflection and calm.",
                qr: "images/soundwalk/qr-codes/1.png",
                link: "https://explore.echoes.xyz/collections/Iw20K0QGT2UCk5yb",
                listeners: [],
            },

            {
                // team 2
                id: 2,
                title: "Audible Aesthetics",
                authors: "Samantha & Angel",
                description: "This soundwalk transforms McMaster’s public art installations into multisensory experiences, designed to be inclusive for visually impaired audiences. Blending narration, ambient sound, and music, each stop translates visual art into layered auditory form—merging accessibility with creativity. Using text-to-speech tools, environmental recordings, and songs chosen for thematic resonance, the project invites participants to “listen” to sculpture through emotion, texture, and rhythm. Rooted in sound studies and mobility politics, it demonstrates how soundwalking can challenge visual dominance in art appreciation and open public spaces to more inclusive, embodied modes of listening.",
                qr: "images/soundwalk/qr-codes/2.png",
                link: "https://explore.echoes.xyz/collections/TM9mCgbwQteEcfvz",
                listeners: [],
            },

            {
                // team 3
                id: 3,
                title: "McMaster Through the Ears of Neurodivergents",
                authors: "Ethan & Diana",
                description: "This soundwalk explores accessibility and sensory experience across McMaster’s campus, using sound to highlight how everyday environments can either support or overwhelm those with sensory sensitivities or disabilities. Through field recordings at key locations—such as the gym, cafeteria, and busy intersections—the project immerses listeners in layered soundscapes that simulate overstimulation, disorientation, and focus challenges. By pairing these sonic experiences with narrative commentary, the piece prompts reflection on how sound shapes mobility and inclusion in public spaces. Connected to week three’s focus on disability and the politics of mobility, the work transforms familiar campus spaces into empathetic listening exercises that reveal the unseen challenges of accessibility.",
                qr: "images/soundwalk/qr-codes/3.png",
                link: "https://explore.echoes.xyz/collections/NtgWE9LY5OakTTke",
                listeners: [],
            },

            {
                // team 4
                id: 4,
                title: "Campus in Concert: The Sound of Movement",
                authors: "Khyana & Junjie",
                description: "You can explore important areas of McMaster's campus on this soundwalk, which combines narrated insights with the natural sounds of each area. The route begins at the Sterling Street Entrance and passes through crowded locations such as the MUSC Atrium, the Mills Memorial Library, and the GO Bus Station, each of which offers a different sound experience. You can immerse yourself in McMaster's everyday rhythm by walking around the campus and hearing conversations, footsteps, and the vibrant energy of the school. The peaceful BSB Courtyard, where the tour comes to a finish, offers a respite from the bustle of campus life.",
                qr: "images/soundwalk/qr-codes/4.png",
                link: "https://explore.echoes.xyz/collections/BrNYgLeUQQGCWn2n",
                listeners: [],
            },

            {
              // team 5
              id: 5,
              title: "Study Spots at McMaster 2025",
              authors: "Naya & Charlotte",
              description: "Just as students carry their classrooms with them across campus through mobile practices and technology, this sound walk will be taking you across various spaces, exposing you to different locations where extending learning beyond the traditional classroom is possible. Throughout this soundwalk, you will be discovering diverse study spots, with unique atmospheres, where students find themselves focused and productive.",
              qr: "images/soundwalk/qr-codes/5.png",
              link: "https://explore.echoes.xyz/collections/yt5BbzMgbnkDldE8",
              listeners: [],
            },

            {
                // team 6
                id: 6,
                title: "Unique Spaces at McMaster!",
                authors: "Kaylyn & Cassandra",
                description: "Listen to audio recordings of unique places around McMaster University, as a student would explore these special places on a tour.",
                qr: "images/soundwalk/qr-codes/6.png",
                link: "https://explore.echoes.xyz/collections/iFrqkMb6L9WQWAQx",
                listeners: [],
            },


            {
                // team 7
                id: 7,
                title: "A new perspective",
                authors: "Yazan & Nathan",
                description: "This narrated soundwalk invites listeners to move through McMaster’s campus with renewed awareness of their surroundings. Developed from Nathan’s reworked proposal, the project combines original narration with field ambience to explore how mobility, accessibility, and alternative routes shape the experience of place. The narrations—recorded and mixed by the creators—encourage reflection on how movement across campus can feel different depending on one’s physical and sensory experience. Balancing clarity and authenticity, the team experimented with when to include or omit background noise, ultimately crafting an intentional listening experience grounded in the politics of mobility. By connecting theory with lived sound, Listening Between Paths transforms everyday navigation into a creative act of observation.",
                qr: "images/soundwalk/qr-codes/7.png",
                link: "https://explore.echoes.xyz/collections/JhQpQ16ljykPSbCk ",
                listeners: [],
            },


            {
                // team 8
                id: 8,
                title: "Sound of Food Mobility: Hearing Food and Identity at McMaster",
                authors: "Xuezi & Jinni",
                description: "Our soundwalk, The Sound of Food Mobility: Hearing Food and Identity at McMaster, invites listeners to experience campus dining spaces through their ears. Moving across seven locations—from a small café in BSB to the bustling Centro—we highlight how food-related sounds reveal both the technologies that structure daily mobility and the identities shaped within shared eating spaces. By amplifying specific sonic events such as order calls, machine hums, clinking trays, and multilingual conversations, this soundwalk makes audible the intersections of movement, technology, identity, and belonging in everyday campus life.",
                qr: "images/soundwalk/qr-codes/8.png",
                link: "https://explore.echoes.xyz/collections/pVHG3Yj5Y2UuGYLM",
                listeners: [],
            },


            {
                // team 9
                id: 9,
                title: "The Sound of Flavor",
                authors: "Ruibo & Quan",
                description: "A guided audio tour of every place to eat on campus—told through student voices, ambient sounds, Walk with us and discover your new favorite spots to eat, meet, and belong.",
                qr: "images/soundwalk/qr-codes/9.png",
                link: "https://explore.echoes.xyz/collections/wv0tQtlMQsY9HfHj",
                listeners: [],
            },


            {
                // team 10
                id: 10,
                title: "Nature on Campus",
                authors: "Matthew & David",
                description: "Centered around McMaster University’s greenhouse and its surrounding natural environment, this soundwalk explores how sound mediates the relationship between people, place, and memory. Combining field recordings of deer calls, footsteps on leaves, and an on-site interview, the piece layers human and ecological voices to create an immersive listening journey. Each sound was chosen to reveal the subtle ways movement and sound intertwine—linking bodily presence with environmental texture. Drawing from course themes of mobility, embodiment, and alternative narratives, Echoes of the Greenhouse resists a single dominant perspective, instead weaving multiple sonic viewpoints into one experiential tapestry. The work also reflects the practical challenges of recording in a living, noisy campus environment, where construction sounds competed with nature. In embracing these complexities, the artists crafted a soundwalk that captures both the fragility and vitality of shared acoustic spaces.",
                qr: "images/soundwalk/qr-codes/10.png",
                link: "https://explore.echoes.xyz/collections/mh3CpzU2VJiquq9c",
                listeners: [],
            },

            {
                // team 11
                id: 11,
                title: "Rush, Green & Access",
                authors: "Yize & Han",
                description: "Step into the McMaster Student Center’s soundscape, where architecture, movement, and accessibility converge in everyday life. Listen for the hum of foot traffic, clicks of automatic doors, and overlapping conversations—each a clue to how people navigate this space. Walk carefully, be mindful of physical obstacles, and keep your device volume balanced so you don’t miss real-world cues.",
                qr: "images/soundwalk/qr-codes/11.png",
                link: "https://explore.echoes.xyz/collections/oTtGnrt4U2K0UhGJ",
                listeners: [],
            },

            {
                // team 12
                id: 12,
                title: "Echoes of Routine: Listening Through a Student’s Day",
                authors: "Zhuoran & Tianyu",
                description: "This soundwalk follows seven key sites at McMaster, from bus stops to study and social spaces. It uses close-up sounds like scanners, printers, and café details to show how everyday mobility and campus life are shaped through sound.",
                qr: "images/soundwalk/qr-codes/12.png",
                link: " https://explore.echoes.xyz/collections/jCOWyynHcgpFH05C",
                listeners: [],
            },

            // {
            //     // team 13
            //     id: 13,
            //     title: "Echoes of Stratford",
            //     authors: "Elizabeth & Kamila",
            //     description: "This soundwalk takes listeners on a journey through Stratford’s most distinctive spaces, from the creative energy of the Stratford School to the cultural legacy of the Avon Theatre and the everyday charm of local spots like the Green Room vintage shop and Alley Cat Café. Using a mix of our own recordings, archival theatre clips, and carefully chosen background music, the walk layers environmental sounds with subtle details to create an immersive portrait of the city. The result is an experience that highlights Stratford’s history, culture, and atmosphere while drawing attention to the often-overlooked sounds that define a place.",
            //     qr: "images/soundwalk/qr-codes/13.png",
            //     link: "https://explore.echoes.xyz/collections/6lmBU2Y9Zchadhiu",
            //     listeners: [],
            // },

            {
              // team 14
              id: 14,
              title: "Everyday Sounds of McMaster",
              authors: "Yu & Xinle",
              description: "Our project explores the theme of everyday mobility on campus, telling the story of a student’s day from arriving by bus to studying, eating, and heading home. Listeners move through the bus stop, library path, quiet study area, MUSC food court, and crosswalks, hearing buses, footsteps, pages turning, food preparation, cashier sounds, and traffic to experience the campus through sound.",
              qr: "images/soundwalk/qr-codes/14.png",
              link: "https://explore.echoes.xyz/collections/85VIjJ80oKm71RLj",
              listeners: [],
            },


            {
                // team 15
                id: 15,
                title: "hoco 2025",
                authors: "Mathieu & Hina",
                description: "Take a trip down memory lane and experience McMasters 2025 Homecoming game.",
                qr: "images/soundwalk/qr-codes/15.png",
                link: "https://explore.echoes.xyz/collections/I0oKBcnTVCJ1Son7",
                listeners: [],
            },

            {
                // team 16
                id: 16,
                title: "McMaster——Quietness and noise",
                authors: "Ziyi & Huaxin",
                description: "Our Sound Walk, with the theme of 'From Quiet to Noisy, from Private to public', passes through dormitories, paths, student centers and teaching buildings, presenting a multi-layered experience of campus mobility through the sounds of card swiping, footsteps, wind and conversations with the crowd.",
                qr: "images/soundwalk/qr-codes/16.png",
                link: "https://explore.echoes.xyz/collections/YZPNehBQq7QbmV99",
                listeners: [],
            },

            {
                // team 17
                id: 17,
                title: "Echoes of Contrast: Routine and Release on Campus",
                authors: "Karlee & Ciearrae",
                description: "This soundwalk explores the shifting energies of McMaster University by contrasting routine and non-routine spaces—ranging from the quiet hum of the library and the steady rhythms of the gym to the open liveliness of Cootes Paradise and the Stadium. Developed from a fusion of two proposals, the project reflects how everyday environments shape student experiences, emotions, and identities. All sounds were recorded on site or drawn from McMaster’s archives, then carefully mixed in Audacity to highlight the sonic differences between spaces of repetition and moments of escape. By layering the mundane and the vibrant, Echoes of Contrast invites listeners to notice how routine can blur one’s sense of time and self, while spontaneous or open spaces restore individuality and connection. Drawing on Cat Hope’s discussion of locative listening, the work foregrounds sound as a mode of perception that reshapes our relationship to place—often more affectively than visual media can. Despite challenges in capturing clarity within louder environments, this tension became part of the aesthetic, reflecting the uneven, often overwhelming soundscape of campus life itself.",
                qr: "images/soundwalk/qr-codes/17.png",
                link: "https://explore.echoes.xyz/collections/vJnUKKUoQgvMvbk7",
                listeners: [],
            },

            {
                // team 18
                id: 18,
                title: "Exploring the South African Apartheid Through McMaster's Lens",
                authors: "Natalie & Maliha",
                description: "This soundwalk will explore the intersection of race, migration and mobility through the analysis of the South African Apartheid and its effects on the McMaster student community. This soundwalk highlights the ways in which institutions similar to McMaster that are rooted in the creation of inclusive, supportive communities fail to recognize intersectional differences between students and their individualistic needs.",
                qr: "images/soundwalk/qr-codes/18.png",
                link: "https://explore.echoes.xyz/collections/ZHcWFaZq4ddsZPrq",
                listeners: [],
            },

            {
                // team 19
                id: 19,
                title: "Hearing Access at McMaster",
                authors: "Xueying & Judy",
                description: "Our Sound Walk proposal presents the campus's common soundscapes in diverse ways. This route extends from Whidden Hall to the Health Sciences Center, focusing on environment, body, and artistry: the melodious notes of a piano intertwined with the creak of automatic doors, footsteps ascending stairs, the hum of elevators, and the whoosh of sliding doors. These sounds reveal the multifaceted ways in which different bodies on campus gain or face limitations in their freedom of movement. A second dimension—the roar of engines, screeching brakes, and announcements at the corner bus stop—links campus mobility to the broader urban pulse. These paths remind Sound Walk participants that soundscapes are not only about access rights but also weave into everyday experience.By foregrounding sound as art, the walk also demonstrates how listening practices reveal the dynamic interplay between environment and human mobility. In doing so, it aligns with course discussions about the aesthetic, bodily, and environmental dimensions of movement while grounding them in McMaster’s lived campus experience.",
                qr: "images/soundwalk/qr-codes/19.png",
                link: "https://explore.echoes.xyz/collections/G01U9BDUwU4MNsoY",
                listeners: [],
            },

            {
                // team 20
                id: 20,
                title: "Accessibility and disability across McMaster",
                authors: "Olivia & Maya",
                description: "This soundwalk focuses on accessibility and disability across McMaster University’s campus, developed from Olivia’s proposal in week three. The project highlights how sound reveals barriers and affordances for people with mobility, cognitive, hearing, or vision disabilities. The recordings feature spaces such as Mills Library, PG and Matthews elevators, the Student Centre, the hospital, and the stadium—capturing contrasts between accessible and inaccessible environments.Using both self-made field recordings and selected sounds from Freesound, the piece layers narration to emphasize issues like malfunctioning automatic doors, overstimulating environments, and the absence of captioning. The hospital recording, by contrast, illustrates accessibility done right. Challenges included limited recording times and reduced student activity on weekends, but the use of a wired microphone from the Lyons New Media Centre helped ensure high-quality audio.",
                qr: "images/soundwalk/qr-codes/20.png",
                link: "https://explore.echoes.xyz/collections/r0FObhsPp4ICkpM3 ",
                listeners: [],
            },

            {
                // team 21
                id: 21,
                title: "McMaster university Campus Exploration and Discovery",
                authors: "Xiaoya & Junbo",
                description: "This is an introduction to the functions and background of McMaster University's landmark buildings in 2025",
                qr: "images/soundwalk/qr-codes/21.png",
                link: "https://explore.echoes.xyz/collections/J6ZVfYKtoVMaPB3I",
                listeners: [],
            },

            {
                // team 22
                id: 22,
                title: "Movement, society and culture",
                authors: "Xiaolu & Haoyuan",
                description: "This soundwalk explores mobility at McMaster University, highlighting how movement is shaped by social, cultural, and infrastructural factors. From busy streets to quiet academic and cultural spaces, recorded sounds guide listeners through diverse experiences, illustrating accessibility, identity, and everyday life while turning abstract concepts into an immersive, reflective auditory journey.",
                qr: "images/soundwalk/qr-codes/22.png",
                link: "https://explore.echoes.xyz/collections/iHD5onrpUBrx5QnI",
                listeners: [],
            },


            {
                // team 23
                id: 23,
                title: "From MUSC to PGCLL - Student Hubs and Ways of Life",
                authors: "Mariah & Amara",
                description: "Discover the walk between two massive student networks, where services, learning, and socializing intersect to create community for all.",
                qr: "images/soundwalk/qr-codes/23.png",
                link: "https://explore.echoes.xyz/collections/CrRghxuE0EoqR6ar",
                listeners: [],
            },


            {
                // team 24
                id: 24,
                title: "A Day at McMaster",
                authors: "Nigel & Jiawei",
                description: "Our soundwalk begins with the rush of the bus and moves through Mills Library, the Student Center, and Togo Salmon Hall. It captures study, energy, and exercise at the David Braley Centre, before entering Ron Joyce Stadium’s cheers and closing in Centro, weaving everyday sounds into a shared student story.",
                qr: "images/soundwalk/qr-codes/24.png",
                link: "https://explore.echoes.xyz/collections/pU8XKIIzNXp5SGhA",
                listeners: [],
            },


            {
                // team 25
                id: 25,
                title: "Home of Black Excellence @ McMaster",
                authors: "Krystie & Aniah",
                description: "Black Excellence at McMaster is a soundwalk that guides listeners through a tour of strong sites across campus where Black culture, resilience, and community thrive. On each site, points of interest mark locations important to Black students—from vibrant events such as the celebratory BSSC cookout and Black History Month basketball games to moments of reflection in serene gardens to celebratory events such as Black Grad. With narrative, background noise, and arrangement, the walk inspires the feeling of belongingness and superiority that defines these locations. This soundwalk is more than a guided tour; it is an audio journey that exalts tradition, joy, and the resilience of community at McMaster University.",
                qr: "images/soundwalk/qr-codes/25.png",
                link: "https://explore.echoes.xyz/collections/tu2moSZ0ArJzDKK9",
                listeners: [],
            },


            {
              // team 26
              id: 26,
              title: "McMaster Campus - Dual Natures",
              authors: "Yael & Anna",
              description: "Explore McMaster's campus, from the busiest building to the quietest outdoor corner, and everything in between. Notice to how we interact with the world around us, connect with each other and ourselves, and how these interactions change based on our surroundings.",
              qr: "images/soundwalk/qr-codes/26.png",
              link: "https://explore.echoes.xyz/collections/EkN6Tnet57OMkRAy",
              listeners: [],
            },


            {
              // team 27
              id: 27,
              title: "From Starbucks to Bus Stop: A Sound Journey at McMaster",
              authors: "Tongwei & Jiayi",
              description: "This soundwalk combines McMaster’s bus stop and Starbucks, exploring movement as both physical and socially significant. On-site recordings capture footsteps, conversations, and environmental sounds, reflecting transitions between private and public spaces. Engaging with accessibility, mobility, and narrative, the project transforms everyday walking into an immersive auditory experience, highlighting social, spatial, and sensory dynamics.",
              qr: "images/soundwalk/qr-codes/27.png",
              link: "https://explore.echoes.xyz/collections/hgCsjfpaCsy6QsRF",
              listeners: [],
            },

            {
                // team 28
                id: 28,
                title: "From Nature to Nature – A McMaster Soundwalk",
                authors: "Zhixuan & Yidi",
                description: "This soundwalk traces a journey from the MDCL Greenhouse to Ravine Road Trail, passing through campus life’s study, social, and sports spaces. Original field recordings capture varied sounds—typing, sizzling grills, basketballs, footsteps—highlighting mobility, embodiment, media ecology, and place-making. The route moves from nature, through daily student life, and returns to natural calm.",
                qr: "images/soundwalk/qr-codes/28.png",
                link: "https://explore.echoes.xyz/collections/M4g29zOC1kqWUrCn",
                listeners: [],
            },


       {
                // team 29
                id: 29,
                title: "Environmental Accessibility Soundwalk",
                authors: "Ruth & Hadia",
                description: "A walk throughout some of McMaster’s indoor and outdoor spaces, revealing both the university’s commitment to creating sites of learning, reflection, and community, as well as the barriers that can prevent full participation.",
                qr: "images/soundwalk/qr-codes/29.png",
                link: "https://explore.echoes.xyz/collections/MQal0kn41cvDZBO6",
                listeners: [],
            },


       {
                // team 30
                id: 30,
                title: "Student Life on McMaster Campus: Busy and Quiet Sounds",
                authors: "Yi & Amna",
                description: "Welcome to our soundwalk. We are going to explore the sounds of both busy and quiet environments across various spaces on McMaster Campus. The purpose of this soundwalk is for participants to engage with the campus and the sounds that are heard, noticing the unique acoustic qualities of each space.",
                qr: "images/soundwalk/qr-codes/30.png",
                link: "https://explore.echoes.xyz/collections/kn33EMSNqplhsNsY",
                listeners: [],
            },


       {
                // team 31
                id: 31,
                title: "From quiet to hype: Sounds on campus",
                authors: "Mac",
                description: "This soundwalk guides listeners through McMaster University, linking sound, body, and environment across seven stops. High-energy sports areas transition to calmer zones, paired with narration prompting self-reflection. Using field recordings, archival clips, and layered audio, the project explores how attentive listening reveals the relationship between space, sound, and bodily awareness.",
                qr: "images/soundwalk/qr-codes/31.png",
                link: "https://explore.echoes.xyz/collections/Zfa3X0yV2GqB9AUq",
                listeners: [],
            },


    //    {
    //             // team 32
    //             id: 32,
    //             title: "",
    //             authors: "",
    //             description: "",
    //             qr: "images/soundwalk/qr-codes/32.png",
    //             link: "",
    //             listeners: [],
    //         },


       {
                // team 34
                id: 34,
                title: "Residence Soundwalk",
                authors: "Maryann & Alyssa",
                description: "Welcome to our residence soundwalk. Step into the experience of what it’s like to live on campus while discovering the history of McMaster’s residences. Each sound offers a unique perspective, capturing the everyday moments and atmosphere that bring residence to life!",
                qr: "images/soundwalk/qr-codes/34.png",
                link: "https://explore.echoes.xyz/collections/swKLmxoXts5k6LkI",
                listeners: [],
            },

              {
                // team 35
                id: 35,
                title: "Sports Energy in Transit",
                authors: "Matthew & Marcus",
                description: "Sports Energy in Transit immerses listeners in the journey from the Pulse Gym to Ron Joyce Stadium, capturing the progression from individual training to the collective energy of game day.",
                qr: "images/soundwalk/qr-codes/35.png",
                link: "https://explore.echoes.xyz/collections/aWCD3IAKO8Eznqyy",
                listeners: [],
            },

             {
                // team 38
                id: 38,
                title: "DAILY LIFE AT MCMASTER",
                authors: "Aidan",
                description: "This soundwalk uses ambient sounds from seven McMaster locations, including Centro and DBAC, to create immersive experiences without narration. By isolating distinctive noises in each space, listeners perceive social and spatial dynamics while moving through campus. Inspired by locative listening, the project transforms ordinary environments into layered, interactive auditory landscapes.",
                qr: "images/soundwalk/qr-codes/38.png",
                link: "https://explore.echoes.xyz/collections/SZV5auwp8DplZJB9",
                listeners: [],
            },


        ]);

        const newListenerNameOne = ref({});
        const newListenerNameTwo = ref({});
        const snackbar = ref(false);
        const snackbarText = ref("");

        // Fetch listeners from supabaseClient
        async function loadListeners() {
            const { data, error } = await supabaseClient.from("listeners").select("*");
            if (error) console.error("Error fetching listeners:", error);

            // Group listeners by soundwalk_id
            soundwalks.value.forEach((sw) => {
                sw.listeners = data
                    ? data.filter((l) => l.soundwalk_id === sw.id).map((l) => l.listener_name)
                    : [];
            });
        }

     // Add a listener name from team member 1
        async function addListenerOne(soundwalkId) {
            const name = newListenerNameOne.value[soundwalkId];
            if (!name || !name.trim()) return;

            const trimmedName = name.trim();
            newListenerNameOne.value[soundwalkId] = ""; // Clear immediately

            const { error } = await supabaseClient.from("listeners").insert([
                { soundwalk_id: soundwalkId, listener_name: trimmedName },
            ]);
            if (error) {
                console.error("Error adding listener:", error);
                snackbarText.value = "Error adding name.";
                newListenerNameOne.value[soundwalkId] = trimmedName; // Restore on error
            } else {
                snackbarText.value = "Name added!";
            }
            snackbar.value = true;
        }

           // Add a listener name from team member 2
        async function addListenerTwo(soundwalkId) {
            const name = newListenerNameTwo.value[soundwalkId];
            if (!name || !name.trim()) return;

            const trimmedName = name.trim();
            newListenerNameTwo.value[soundwalkId] = ""; // Clear immediately

            const { error } = await supabaseClient.from("listeners").insert([
                { soundwalk_id: soundwalkId, listener_name: trimmedName },
            ]);
            if (error) {
                console.error("Error adding listener:", error);
                snackbarText.value = "Error adding name.";
                newListenerNameTwo.value[soundwalkId] = trimmedName; // Restore on error
            } else {
                snackbarText.value = "Name added!";
            }
            snackbar.value = true;
        }

        // Subscribe to supabaseClient realtime updates
        //     async function subscribeRealtime() {
        //         supabaseClient
        //             .channel("realtime-listeners")
        //             .on("postgres_changes", { event: "INSERT", schema: "public", table: "listeners" },
        //                   (payload) => {
        //     console.log('New listener:', payload.new);
        //     loadListeners();  // refresh your local soundwalks array
        //   }
        // )
        //             .subscribe();
        //     }

        async function subscribeRealtime() {
            // Create a realtime channel for the 'listeners' table
            const channel = supabaseClient.channel("public:listeners");

            channel.on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "listeners" },
                (payload) => {
                    console.log("New listener:", payload.new);

                    // Find the matching soundwalk and push the new listener
                    const sw = soundwalks.value.find(
                        (s) => s.id === payload.new.soundwalk_id
                    );
                    if (sw) {
                        sw.listeners.push(payload.new.listener_name);
                    }

                    // Optional: show snackbar
                    snackbarText.value = `New listener added: ${payload.new.listener_name}`;
                    snackbar.value = true;
                }
            );

            // Subscribe to the channel
            await channel.subscribe();
        }

        onMounted(() => {
            loadListeners();
            subscribeRealtime();
        });

        // Add this if you want to clean up when component unmounts
        onUnmounted(() => {
            supabaseClient.removeAllChannels();
        });

        return { soundwalks, newListenerNameOne, newListenerNameTwo, addListenerOne, addListenerTwo, snackbar, snackbarText };
    },

    template: `
    <v-app>
      <v-app-bar color="#7A003C" prominent>
        <v-app-bar-title>🎧 Soundwalk Exhibition</v-app-bar-title>
      </v-app-bar>

      <v-main class="pa-6">
        <div   class="instructions mt-15">
          <h3>Instructions:</h3>
          <ol>
            <li>With your soundwalk partner, explore the other teams’ soundwalks on this webpage and choose one to listen to.</li>
            <li>Register your participation by signing your team members’ names under the “Listened by” section on the chosen soundwalk.</li>
            <li>Scan the QR code for your selected soundwalk and go out to listen to it.</li>
            <li>After you finish listening to your first soundwalk, repeat steps 1–3 to select and listen to a second one.</li>
          </ol>
        </div>

        <v-container>
          <v-row>
            <v-col
              v-for="sw in soundwalks"
              :key="sw.id"
              cols="12"
              md="6"
              class="soundwalk-card"
            >
              <v-card elevation="4">
                <v-card-text>
                  <v-row>
                    <!-- Left side: info -->
                    <v-col cols="7">
                      <h3 class="soundwalkHeading" class="mb-2">{{ sw.title }}</h3>
                      <p class="mb-2"><strong>Authors:</strong> {{ sw.authors }}</p>
                      <p>{{ sw.description }}</p>
                    </v-col>

                    <!-- Right side: QR + link -->
                    <v-col cols="5" class="text-center">
                      <img :src="sw.qr" alt="QR code" class="qr-img mb-2" />
                      <div>
                        <v-btn class="echoes-btn" color="#fff3e0" variant="flat" :href="sw.link" target="_blank">
                          Click to open in Echoes
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>

                <!-- Listeners -->
                <v-divider></v-divider>
                <v-card-text>
                  <strong>Listened by:</strong>
                  <div v-if="sw.listeners.length">
                    <v-chip
                      v-for="(name, index) in sw.listeners"
                      :key="index"
                      class="ma-1"
                      color="deep-orange-lighten-1"
                    >
                      {{ name }}
                    </v-chip>
                  </div>
                  <div v-else>
                    <em>No listeners yet.</em>
                  </div>

                    <!-- team 1 -->
             <!--     <div >
                    <p>Team 1</p>
                <v-text-field
                    v-model="newListenerNameOne[sw.id]"
                    label="Team members' names"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mt-4"
                  ></v-text-field>

                  <v-btn
                    color="black"
                    variant="tonal"
                    size="small"
                    @click="addListenerOne(sw.id)"
                  >
                    Submit 
                  </v-btn>
               <div> -->

                     <!-- team 2 -->
               <!--       <div>
                    <p>Team 2</p>
                <v-text-field
                    v-model="newListenerNameTwo[sw.id]"
label="Team members' names"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mt-4"
                  ></v-text-field>

                  <v-btn
                    color="black"
                    variant="tonal"
                    size="small"
                    @click="addListenerTwo(sw.id)"
                  >
                    Submit 
                  </v-btn>
               <div> -->
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-snackbar v-model="snackbar" color="#FDBF57">
        {{ snackbarText }}
      </v-snackbar>
    </v-app>
  `,
}).use(vuetify).mount("#app");


