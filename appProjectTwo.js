const { createApp } = Vue;
const { createVuetify } = Vuetify;

const App = {
  data() {
    return {
      drawer: true,
      tab: 0,
      workshops: [
        { title: "Workshop 1: Collective GPS Drawing and Experimentation", icon: "mdi-walk" },
        { title: "Workshop 2: Designing Your Drawing and Planning GPS Route", icon: "mdi-map" },
        { title: "Workshop 3: Enhance Your Drawing with Multimedia Annotation", icon: "mdi-camcorder" }
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
        // #ff416c 0%, #ff4b2b
            primary: '#ff4b2b',
          secondary: '#ff9800',
          accent: '#9c27b0',
          background: '#454545',
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
