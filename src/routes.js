import AlbumsIndex from './components/AlbumsIndex.vue'
import AlbumsNew from './components/AlbumsNew.vue'
import AlbumsShow from './components/AlbumsShow.vue'

export default [ 
  {
    path: '/',
    component: AlbumsIndex,
  },
  {
    path: '/new',
    component: AlbumsNew,
  },
  {
    path: '/albums/:id',
    component: AlbumsShow,
  },
]