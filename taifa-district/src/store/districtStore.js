// -------- src/store/districtStore.js --------
import { create } from 'zustand'

export const useDistrictStore = create(() => ({
  districtName: 'PCG TAIFA DISTRICT',
  congregations: [
    { id: 1, name: 'Grace Congregation – North Taifa' },
    { id: 2, name: 'Faith Congregation – South Taifa' },
    { id: 3, name: 'Hope Congregation – Taifa Central' },
    { id: 4, name: 'Victory Congregation – Taifa Market' },
    { id: 5, name: 'Redemption Congregation' },
    { id: 6, name: 'Bethany Congregation' },
    { id: 7, name: 'Calvary Congregation' },
    { id: 8, name: 'Zion Congregation' },
    { id: 9, name: 'Salem Congregation' },
    { id: 10, name: 'Emmanuel Congregation' },
    { id: 11, name: 'Bethel Congregation' },
    { id: 12, name: 'Resurrection Congregation' },
    { id: 13, name: 'Christ Chapel' },
    { id: 14, name: 'Living Waters Congregation' },
    { id: 15, name: 'New Life Congregation' },
    { id: 16, name: 'Holy Trinity Congregation' },
  ],
}))