// =========== src/store/districtStore.js ==========
import { create } from 'zustand'

export const useDistrictStore = create(() => ({
  districtName: 'PCG TAIFA DISTRICT',
  carouselImages: [
    { id: 1, src: '/images/district-1.jpg', caption: 'United in Faith' },
    { id: 2, src: '/images/district-2.jpg', caption: 'Sixteen Congregations, One Mission' },
    { id: 3, src: '/images/district-3.jpg', caption: 'Serving the Taifa Community' },
  ],
}))