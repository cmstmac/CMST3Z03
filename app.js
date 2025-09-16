const { createApp } = Vue;
const { createVuetify } = Vuetify;

const App = {
  data() {
    return {
      drawer: true,
      tab: 0,
      workshops: [
        { title: "Workshop 1: Explore A Simple Soundwalk", icon: "mdi-walk" },
        { title: "Workshop 2: Collecting Sound Recordings for a Soundwalk", icon: "mdi-music-note" },
        { title: "Workshop 3: Creating Soundwalks with Echoes Creator", icon: "mdi-map-marker" }
      ]
    };
  }
}
  

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#000000',
          secondary: '#ff9800',
          accent: '#9c27b0',
          background: '#f5f5f5',
          error: '#f44336',
        },
      },
    },
  },
  typography: {
    defaultFontFamily: 'Lato, Arial, sans-serif',
  },
});

createApp(App).use(vuetify).mount("#app");
