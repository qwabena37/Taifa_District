// =========== src/store/districtStore.js ==========
import { create } from 'zustand'

export const useDistrictStore = create(() => ({
  districtName: 'PCG TAIFA DISTRICT',
  carouselImages: [
    { id: 1, src: '/images/w.jpeg', caption: 'WELCOME TO PCG - TAIFA DISTRICT' },
    { id: 2, src: '/images/e.jpg', caption: 'That, They All May Be One' },
    { id: 3, src: '/images/t.jpg', caption: 'Sixteen Congregations, One Vision, One Mission' },
    { id: 4, src: '/images/f.jpg', caption: 'United in Faith' },
    { id: 5, src: '/images/k.jpg', caption: 'Committed to the PCG Vision' },
    { id: 6, src: '/images/m.jpg', caption: 'Enforcing the Mission of the PCG' },
    { id: 7, src: '/images/n.jpg', caption: 'Serving Our Communities' },
    { id: 8, src: '/images/j.jpg', caption: 'Admonishing Our Members' },
    { id: 9, src: '/images/g.jpg', caption: 'Growing Holistically' },
    { id: 10, src: '/images/v.jpeg', caption: 'Christ-Centered' },
 ],
}))