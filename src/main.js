import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

// PrimeVue
import PrimeVue from "primevue/config";

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeIcons
import 'primeicons/primeicons.css';

// PrimeVue Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

// PrimeVue Services
import DialogService        from "primevue/dialogservice";
import ToastService         from "primevue/toastservice";
import ConfirmationService  from "primevue/confirmationservice";

// PrimeVue components
import Button           from "primevue/button";
import Card             from "primevue/card";
import Column           from "primevue/column";
import ConfirmDialog    from "primevue/confirmdialog";
import Checkbox         from "primevue/checkbox";
import DataTable        from "primevue/datatable";
import Dialog           from "primevue/dialog";
import Dropdown         from "primevue/dropdown";
import FileUpload       from "primevue/fileupload";
import FloatLabel       from "primevue/floatlabel";
import IconField        from "primevue/iconfield";
import InputIcon        from "primevue/inputicon";
import InputText        from "primevue/inputtext";
import InputNumber      from "primevue/inputnumber";
import Menu             from "primevue/menu";
import Rating           from "primevue/rating";
import Row              from "primevue/row";
import Sidebar          from "primevue/sidebar";
import Tag              from "primevue/tag";
import Textarea         from "primevue/textarea";
import Toolbar          from "primevue/toolbar";
import Toast            from "primevue/toast";

// Router
import router from "./router/index.js";
import {createPinia} from "pinia";

// Create Pinia
const pinia = createPinia();

// Create App
createApp(App)
    .use(router)
    .use(pinia)
    .use(PrimeVue, { ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('pv-toast', Toast)
    .mount('#app')
