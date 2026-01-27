// =========== src/store/districtStore.js ==========
import { create } from 'zustand'

export const useDistrictStore = create(() => ({
  districtName: 'PCG TAIFA DISTRICT',
  carouselImages: [
    { id: 1, src: '/images/e.jpg', caption: 'United in Faith' },
    { id: 2, src: '/images/t.jpg', caption: 'Sixteen Congregations, One Mission' },
    { id: 3, src: '/images/f.jpg', caption: 'Serving the Taifa Community' },
    { id: 4, src: '/images/k.jpg', caption: 'United in Faith' },
    { id: 5, src: '/images/m.jpg', caption: 'Sixteen Congregations, One Mission' },
    { id: 6, src: '/images/n.jpg', caption: 'Serving the Taifa Community' },
    { id: 7, src: '/images/j.jpg', caption: 'United in Faith' },
    { id: 8, src: '/images/g.jpg', caption: 'Sixteen Congregations, One Mission' },
    { id: 9, src: '/images/v.jpeg', caption: 'Serving the Taifa Community' },
 ],
}))