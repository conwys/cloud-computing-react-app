import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
