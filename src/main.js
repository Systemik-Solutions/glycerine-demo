import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import code highlighter.
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

// Import the PrimeFlex CSS.
import 'primeflex/primeflex.css';

// Import the PrimeFlex theme. Any PrimeFlex compatible theme can be used.
import 'primeflex/themes/primeone-light.css';

// Import the PrimeIcons.
import 'primeicons/primeicons.css';

// Import the PrimeVue library.
import PrimeVue from 'primevue/config';

// Import the PrimeVue theme. Any PrimeVue compatible theme can be used.
import 'primevue/resources/themes/lara-light-blue/theme.css';

// Import the Glycerine Viewer styles.
import 'glycerine-viewer/style.css';

// Import the Glycerine Viewer component.
import { GlycerineViewer, i18n } from 'glycerine-viewer';

const app = createApp(App)

app.use(router)

// Use the code highlighter.
app.use(VueHighlightJS);

// Use the PrimeVue library.
app.use(PrimeVue);

// Use the i18n plugin.
app.use(i18n);

// Register the Glycerine Viewer component globally.
app.component('GlycerineViewer', GlycerineViewer);

app.mount('#app')
