const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
    data() {
        return {
            currentIndex: 0,
            isPlaying: false,
            autoPlayInterval: null,
            autoPlayDelay: 5000, // 5 seconds per poster
            posters: [
                // team 1
                {
                    title: "Financialized Credit is Predatory",
                    authors: "Karlee Cantin	& Ciearrae Dineley",
                    about: "This project visualizes the weight of Canada’s student-debt crisis through a GPS-drawn dollar sign crowned with a graduation cap, echoing Pérez-Rivera’s reflections on the financialization of the poor. The poster’s imagery—from dimmed Canadian bills to a price-tag tassel—reveals how the promise of education slips into a cycle of indebtedness. Together, the symbols and cited voices underline how graduation, often seen as liberation, can instead mark the beginning of lifelong financial burden.",
                    pdfUrl: "posters/team1.pdf"
                },
                // team 2
                {
                    title: "No Nature, No Future",
                    authors: "Maryann Qusous & Alyssa Francella",
                    about: "This work traces the Earth across campus pathways, transforming routine movement into a gesture of unity and environmental awareness. Grounded in Leong’s vision of more-than-human tracking, the project pairs symbolic imagery with embodied action to show how walking, noticing, and caring for place become forms of activism. The poster and GPS drawing together suggest that global stewardship begins with simple, mindful steps taken in shared spaces.",
                    pdfUrl: "posters/team2.pdf"
                },
                // team 3
                {
                    title: "Silent Architects of Progress",
                    authors: "Zhuoran Zhang	& Tianyu Wang",
                    about: "This piece carves a raised fist into the campus map, using movement itself to honour the overlooked strength of migrant workers. The combination of lived testimony, advocacy language, and Foster’s insights on precarious status infuses the symbol with emotional and political weight. Through this continuous walk, the project makes presence visible, turning a hidden struggle into a shared path.",
                    pdfUrl: "posters/team3.pdf"
                },
                // team 4
                {
                    title: "Peace Symbol Walk",
                    authors: "Ruibo Zhang & Quan Lu",
                    about: "Our group walked a peace symbol on McMaster campus using GPS tracking. We chose the peace symbol because it matters now—it stands for unity when our world feels divided. By walking this shape, we turned invisible values into something visible on the map.",
                    pdfUrl: "posters/team4.pdf"
                },
                // team 5
                {
                    title: "University’s Arts Quad",
                    authors: "Ruth Moon Lopez & Hadia Aziz",
                    about: "For our GPS drawing, we primarily drew inspiration from the week seven reading: Inventive Approaches to Data tracking in More-Than-Human Worlds, by Leong et al., (2021). This paper discusses the digital entanglements between humans  and advanced technologies, through which the tracking, monitoring, and measuring of our everyday mobility has become increasingly uncomplicated and accessible (Leong et al., 2021).",
                    pdfUrl: "posters/team5.pdf"
                },

                // team 6

                     {
                    title: "Freedom of Movement",
                    authors: "Amna Azeem & Yi Cong",
                    about: "This GPS-drawn bird turns campus pathways into a meditation on freedom and the unequal conditions of movement. Through the contrast of open flight and caged confinement, and guided by Eschenbrenner’s insights on migrant trails, the project shows how traces in space reveal who can move without fear and who cannot. The work positions walking as a subtle form of activism, where each step gestures toward collective liberation.",
                    pdfUrl: "posters/team6.pdf"
                },

                // team 7

                {
                    title: "Truth & Reconciliation",
                    authors: "Naya Abdo	& Charlotte Romkema",
                    about: "This GPS-drawn Marauder reimagines a campus mascot as a land acknowledgment in motion, tracing pathways shaped by colonial histories and contemporary forms of displacement. Through layered annotations and orange-themed visuals, the project turns walking into a political act—one that asks who movement has empowered and who it has denied. The work becomes a map of memory and accountability, carried by the land beneath each step.",
                    pdfUrl: "posters/team7.pdf"
                },

                // team 8
                {
                    title: "Eternal Love in Motion",
                    authors: "Yu Chang & Xinle Wang",
                    about: "This project transforms a GPS-drawn diamond into an enduring shape built from countless small movements, crossings, and choices. Through zine-like annotations, symbolic imagery, and inspiration from Leong, Hjorth, and Choi’s ideas on “felt data,” the work captures how affection becomes inscribed in place through repeated gestures. The final poster blends imperfection with permanence, turning an ordinary walk into a durable trace of care.",
                    pdfUrl: "posters/team8.pdf"
                },

                // team 9
                {
                    title: "Stuck in a legal vacuum",
                    authors: "Xuezi Jin	& Jinni Chi",
                    about: "This GPS-drawn maple leaf reimagines a national symbol as a question rather than an emblem, highlighting the tension between belonging and exclusion in Canada. Inspired by Foster’s writing on precarious migrant labor, the piece uses symbolic annotations—an eye, a mouth, an airplane, and a tax sign—to reveal the hidden struggles that shape mobility. Walking the leaf transforms these ideas into a bodily experience, turning the familiar outline into a meditation on who is allowed to move freely within the nation.",
                    pdfUrl: "posters/team9.pdf"
                },


                // team 10
                {
                    title: "Footprint",
                    authors: "Xueying Xu & Judy Gong",
                    about: "This GPS-drawn footprint explores movement as both a visible trace and a site of erasure. Drawing on Eschenbrenner, the piece contrasts the belongings migrants leave behind with the institutional efforts to “clean up” those marks, using symbols like fading footprints, abandoned shoes, and a sweeping icon to highlight this tension. By simplifying the route to keep the footprint legible, the work centers the politics of mobility and the fragility of the traces it produces.",
                    pdfUrl: "posters/team10.pdf"
                },


                // team 11
                {
                    title: "Walking as a Tree Root",
                    authors: "Haoyuan Song",
                    about: "This GPS-drawn route, “Walking Like Tree Roots,” visualizes human movement as part of wider ecological and relational systems. Branching across campus, the path mirrors how roots distribute nutrients and information, emphasizing connections between people, built spaces, and the natural environment. Guided by Leong's notion of more-than-human mobility, the work treats walking as a mindful, activist practice that uncovers quiet networks sustaining daily life",
                    pdfUrl: "posters/team11.pdf"
                },


                // team 12
                {
                    title: "‘M’ for McMaster",
                    authors: "Natalie Plechinger & Maliha Khalid",
                    about: "This GPS-drawn “M” traces the diverse journeys of McMaster students, transforming everyday campus movement into a map of collective learning and experience. Symbolic elements—footsteps, measuring tape, knotted thread, and graduation cap—highlight the varied pathways, measures of growth, and shared connections that shape academic and personal development. Inspired by Ishikawa and Leong et al., the work frames movement as both a visible and symbolic record of student life beyond conventional measures of success.",
                    pdfUrl: "posters/team12.pdf"
                },


                // team 13
                {
                    title: "The Policies of Mobility",
                    authors: "Yazan Albotros & Nathan Cox",
                    about: "The symbol at the forefront of our design is the peace flag, which is meant to symbolize a call for countries to remove obstacles migrants might face in their search for citizenship and work. The reason we believe it fits is because flags are used globally to represent nationality and statehood, and so we added a peace sign to a flag to symbolize the fact that we should be a peaceful country for all where mobility is not an issue.",
                    pdfUrl: "posters/team13.pdf"
                },

                // team 14
                {
                    title: "Mobility at McMaster",
                    authors: "Kaylyn Almeida & Cassandra Stork",
                    about: "For our project we decided to choose a route shaped like a shoe. We chose this because a shoe represents mobility in our eyes; when you think of a shoe, you think of walking or just movement in general. Since our project focuses on the themes of mobility and locomotion, we thought it was fitting to do a route that our viewers could easily associate with those themes. Our route is located near the GO station as well so when people walk the route, they will get to see how people travel and move from place to place",
                    pdfUrl: "posters/team14.pdf"
                },

                    // team 15
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team17.pdf"
                // },


                // team 16
                {
                    title: "The Need for Equality",
                    authors: "Sahar Rajani & Hina Bhutta",
                    about: "Many people had to turn to illegal solutions which held heavy consequences, sometimes spending their life paying trying to pay their debts to hardened criminals. Seeing the lack of justice for these people we felt we needed something to represent the inequality they faced due to their newfound economic status. This is why we made sure to add the Libra picture and annotation as part of the poster as it highlights the imbalances in the justice system. activism as justice. ",
                    pdfUrl: "posters/team16.pdf"
                },

                // team 17
                {
                    title: "Invisible Borders",
                    authors: "Khyana Joshi	& Junjie Shen",
                    about: "As for our annotations and symbolic materials, they were intended to transform the GPS journey from just a visual trace to an interpretive framework in the final composition. The colour coding is symbolic of an emotional gradient that reflects changes in environmental pressure, comfort, and visibility. In keeping with the concept of soft boundaries, fences are used to denote instances in which space subtly restricts movement. We added a way to show psychological uncertainty of poor lighting, blind corners, and underpasses through shadow markers. Layered annotations like from our article displays how our walk shows how the environment influences embodied mobility",
                    pdfUrl: "posters/team17.pdf"
                },

            
                // team 18
                {
                    title: "No One Crosses Alone",
                    authors: "Yael Erlich & Anna Pioun",
                    about: "In our project, we used annotations and symbolic imagery to bring our message to life: that No One Crosses Alone. We included two contrasting bridge images—and selected quotes from Footprints by Celine Eschenbrenner and The Walrus article on migration by Michael Shenker—in our GPS drawing, as well as connecting symbols to showcase the reality of migrant trails today and a hopeful vision of what crossings could be",
                    pdfUrl: "posters/team18.pdf"
                },


                // // team 19
                // {
                //     title: "",
                //     about: "",
                //     pdfUrl: "posters/team19.pdf"
                // },


                // team 20
                {
                    title: "No Solution For The Climate Crisis",
                    authors: "Olivia Filippetti	& Maya Bisnath",                    
                    about: ". Climate change is a pressing issue that must be addressed, which is why we selected it as our focus. Our poster reflects this. Climate is a global concern, and our governments are the ones with the power to act. The poster features headlines about government neglect, protests, and animals, in black and white, to represent both the loss of natural life on Earth and the different perspectives and feelings about climate change. Walking through a campus scene depicting Earth engulfed in flames made us think about temperatures and litter on the ground.",
                    pdfUrl: "posters/team20.pdf"
                },


                // team 21
                {
                    title: "Stray Cats in Hamilton",
                    authors: "Mariah Martin	& Amara Aslam",
                    about: "Our project focuses on the stray cat population in Hamilton. In this critical analysis, we draw a direct connection to (Leong, 2021) discussion of more-than-human mobility. In the chapter, Leong describes how Ishikawa’s “cat logging” revealed a completely different spatial logic, cats move through backyards, narrow passageways, and hidden corridors that humans often overlook. He discovers that while humans see fences and property lines as boundaries to movement, “for a cat...the backyard is continuous,” allowing them to move fluidly through environments that appear fragmented to us. While this is a beautiful concept, it also relates to an ongoing issue in Hamilton Ontario, particularly focusing on one of the largest stray cat populations in the country.",
                    pdfUrl: "posters/team21.pdf"
                },


                // team 22
                {
                    title: "The Eagle We Walk",
                    authors: "Nigel Chen & Jiawei Bu",
                    about: "This GPS drawing project centered on Ron Joyce Stadium as the primary site for tracing the Marauder eagle head because the stadium holds a significant place in McMaster’s collective student experience. As a venue for athletic training, varsity games, and school-wide events, it functions as a symbolic hub of community spirit and institutional identity. By walking the outline of the eagle head across this terrain, our recorded pathway reflects the shared pride embedded in the environment. ",
                    pdfUrl: "posters/team22.pdf"
                },


                // team 23
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/tea245.pdf"
                // },


                // team 24
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team24.pdf"
                // },


                // team 25
                {
                    title: "Rights For Everyone",
                    authors: "Xiaoya Pu	& Junbo Cheng",
                    about: "Our footprint route starts from McMaster Children's Hospital, passes through DeGroote, Mills, MUSC, the stadium, Togo, and finally returns to the hospital before ending at the bus stop beside Starbucks. These points are places that every international student truly walks through, carrying the psychological footprints of vulnerability, academic pressure, expensive medical care, difficulty in making friends, and more.",
                    pdfUrl: "posters/team25.pdf"
                },


                // team 26
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team26.pdf"
                // },


                // team 27
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team27.pdf"
                // },


                // team 28
                {
                    title: "House of Access — Seem ≠ Reached",
                    authors: "Zhixuan Yang	& Yidi Xiao",
                    about: "Our poster begins with a simple GPS drawing: walking the outer edge of the residence area, we traced a “house” whose walls are made from real campus paths. Around this house sit teaching buildings, the gym, the back hill, bus stops and accessible parking. By turning our walk into a line, we ask a basic question: on this campus, who can get home, get to class, or get to support, and who is only “seen” but not truly “reached”?",
                    pdfUrl: "posters/team28.pdf"
                },


                // team 29
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team29.pdf"
                // },

                  // team 30
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team30.pdf"
                // },

                  // team 31
                {
                    title: "Always Watching",
                    authors: "Mac Tulloch",
                    about: "To build the final poster, I layered symbolic images that matched the idea of being constantly monitored. The GPS-drawn eye sits in the middle of a radar, which represents how surveillance operates beyond what we can see. Around the eye, I placed three quotes from the week 7 reading to show how our movements and data are taken, sorted, and used by systems. One quote explains how “every single location became a universal address” (Leong et al., 2020) which fit perfectly with the map background and the GPS route.",
                    pdfUrl: "posters/team31.pdf"
                },

                  // team 32
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team32.pdf"
                // },

                  // team 33
                {
                    title: "Access Makes Us Seen",
                    authors: "Ziyi Qiao	& Huaxin Liu",
                    about: "We chose to create a GPS mapping centered around wheelchair accessibility symbols to highlight how mobility on campus is shaped by unequal opportunities. Our route traversed areas near McMaster's Mary Kayes and surrounding pathways, as these zones feature ramps, intersecting sidewalks, and heavy pedestrian traffic—spaces whose accessibility is often assumed but not always guaranteed. While this GPS map is imperfect, its unevenness reflects how real movement rarely follows clean lines, especially for those navigating physical barriers across campus.",
                    pdfUrl: "posters/team33.pdf"
                },

                  // team 34
                {
                    title: "Impoverish Youth",
                    authors: "Matthew Cann	& David Agboje",
                    about: "The significance of the graduation cap path being drawn on the McMaster University campus is imperative, as it is an important site where not only education takes place, but also social mobility and activism. This is a place where displaced and marginalized individuals can seek opportunities for upward social mobility.",
                    pdfUrl: "posters/team34.pdf"
                },

                     // team 35
                // {
                //     title: "",
                //     authors: "",
                //     about: "",
                //     pdfUrl: "posters/team35.pdf"
                // },

                     // team 36
                {
                    title: "",
                    authors: "Ethan Cagalj & Diana Peridis",
                    about: "With current issues surrounding not only postal workers in Canada but also the exploitation of service workers on and off campus, the topic is strongly supported by recent events and strikes. While selecting an appropriate GPS drawing, I proposed the initial idea of using a semi-incomplete person symbol to represent an invisible worker on campus. More specifically, many people cross campus all day but may not see the complex, intense work that goes on behind the scenes to keep the campus tidy. The artistic composition serves as a statement and source of recognition for the invisible workers around campus.",
                    pdfUrl: "posters/team36.pdf"
                },

                     // team 37
                {
                    title: "Popcorn Paths",
                    authors: "Krystie Prah	& Aniah Williams",
                    about: "Our digital poster is grounded in the simple belief that genuine happiness is too easily overlooked, and in the rush of digital life today, small moments of real-world connection matter more than ever. For this project, we selected a quirky playful GPS route in the shape of a popcorn box, stretching across campus and connecting meaningful student gathering spots.",
                    pdfUrl: "posters/team37.pdf"
                },

                     // team 38
                {
                    title: "Migrant Workers",
                    authors: "Sandhya Acharya & Lisa Draijer",
                    about: "Precarious employment isn’t just about low wages, but about how it restricts people’s lives socially, legally, and economically. Migrant workers technically live in these spaces, like cities, towns, and work sites, but their ability to move freely is limited by employers, transportation access, their contracts, or even their legal status. Connecting our GPS drawing, the bird’s movement across campus shows a kind of freedom and choice that precarious workers often don’t have.",
                    pdfUrl: "posters/team38.pdf"
                },



            ]
        };
    },
    computed: {
        currentPoster() {
            return this.posters[this.currentIndex];
        }
    },
    methods: {
        nextPoster() {
            if (this.currentIndex < this.posters.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Loop back to first poster
            }
        },
        previousPoster() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        goToPoster(index) {
            this.currentIndex = index;
        },
        toggleAutoPlay() {
            if (this.isPlaying) {
                this.stopAutoPlay();
            } else {
                this.startAutoPlay();
            }
        },
        startAutoPlay() {
            this.isPlaying = true;
            this.autoPlayInterval = setInterval(() => {
                this.nextPoster();
            }, this.autoPlayDelay);
        },
        stopAutoPlay() {
            this.isPlaying = false;
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    },
    beforeUnmount() {
        // Clean up interval when component is destroyed
        this.stopAutoPlay();
    }
});

app.use(vuetify);
app.mount('#app');