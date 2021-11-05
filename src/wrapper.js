// Import vue component
import FlashHexagon from "./FlashHexagon.vue";
import FlashMessages from "./FlashMessages.vue";
import FloatMessage from "./FloatMessage.vue";
import MapComponent from "./MapComponent.vue";
import MapSymbol from "./MapSymbol.vue";
import SpecialEvent from "./SpecialEvent.vue";
import SpecialHex from "./SpecialHex.vue";
import VueCrt from "./VueCrt.vue";
import OBCComponent from "./OBCComponent.vue";
import UnitsComponent from "./UnitsComponent.vue";
import ExpUnitsComponent from "./ExpUnitsComponent.vue";
import Undo from "./Undo.vue";
import {SyncController} from "./sync-controller";
export {ExpUnitsComponent, UnitsComponent};
// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('flash-messages', FlashMessages);
	Vue.component('flash-hexagon', FlashHexagon);
	Vue.component('vue-crt', VueCrt);
	Vue.component('undo', Undo);
	Vue.component('float-message', FloatMessage);
	Vue.component('map-component', MapComponent);

	Vue.component('units-component', ExpUnitsComponent);
	Vue.component('special-hex', SpecialHex);
	Vue.component('map-symbol', MapSymbol);
	Vue.component('obc-component', OBCComponent);

	Vue.component('special-event', SpecialEvent);
	// new SyncController();
	// document.addEventListener("DOMContentLoaded",function() {
	// 	hookup(Vue);
	// });
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}
// component.install = install;

export {SyncController} from "./sync-controller.js";
// To allow use as module (npm/webpack/etc.) export component
export default {
	install
};

