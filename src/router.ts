import { createWebHistory, createRouter } from 'vue-router';
import Mateo from './views/Profile.vue';
import Landing from './views/Landing.vue';

const routes = [
	{
		path: '/',
		component: Landing,
		name: 'landind',
	},
	{ path: '/mateo', component: Mateo, name: 'mateo' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
