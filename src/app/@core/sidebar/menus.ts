import { Menu } from './menu.model';

export const Menus: Menu[] = [
  {
    id: 1,
    key: 'home',
    label: 'home',
    sortOrder: 1,
    parentId: undefined,
    icon: 'fas fa-home',
    isTitle: false,
    isActive: true
  },
  {
    id: 2,
    key: 'profile',
    label: 'Profile',
    sortOrder: 2,
    parentId: undefined,
    icon: 'fas fa-user',
    isTitle: false,
    isActive: true
  },
  {
    id: 3,
    key: 'about',
    label: 'About',
    sortOrder: 3,
    parentId: undefined,
    icon: 'fas fa-users',
    isTitle: false,
    isActive: true
  },
]
