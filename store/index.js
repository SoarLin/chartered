import { fireDb } from '~/plugins/firebase.js'

export const state = () => ({
  driver: null,
  recommendTrip: [],
  regions: [],
  attractions: []
})

export const getters = {
  driver: state => state.driver,
  recommendTrip: state => state.recommendTrip,
  regions: state => state.regions,
  attractions: state => state.attractions
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    // await dispatch('getTrip')
    // await dispatch('getAllTrip')
  },
  async getAllTrip ({ commit }) {
    const collection = await fireDb.collection('trip').get()
    commit('CLEAN_RECOMMEND_TRIP')
    collection.forEach((trip) => {
      console.log(trip.data())
      commit('SET_RECOMMEND_TRIP', trip.data())
    })
  },
  async getTrip ({ commit }) {
    const ref = fireDb.collection('trip').doc('taipei_001')
    const snap = await ref.get()
    // console.log(snap.data().timeline)
    commit('SET_RECOMMEND_TRIP', snap.data())
  },
  async getDriver ({ commit }, name) {
    const ref = fireDb.collection('driver').doc(name)
    const snap = await ref.get()
    console.log(snap.data())
    commit('SET_DRIVER', snap.data())
  },
  async getRegions ({ commit }) {
    const rCollection = await fireDb.collection('regions').get()
    const regions = [{
      id: 'All',
      name: '全部'
    }]
    rCollection.forEach((region) => {
      // const attractions = region.data().attractions
      regions.push({
        id: region.id,
        name: region.data().name
        // attractions: attractions
      })
    })
    commit('SET_REGIONS', regions)
  },
  async getAttractions ({ commit }) {
    const collection = await fireDb.collection(`attractions`).get()
    const attractions = []
    collection.forEach((v) => {
      attractions.push({
        id: v.id,
        name: v.data().name,
        city: v.data().city,
        img: v.data().img
      })
    })
    commit('SET_ATTRACTIONS', attractions)
  }
}

export const mutations = {
  CLEAN_RECOMMEND_TRIP (state) {
    state.recommendTrip = []
  },
  SET_RECOMMEND_TRIP (state, trip) {
    state.recommendTrip.push({
      name: trip.name,
      timeline: trip.timeline
    })
  },
  SET_DRIVER (state, driver) {
    state.driver = driver
  },
  SET_REGIONS (state, regions) {
    state.regions = regions
  },
  SET_ATTRACTIONS (state, payload) {
    state.attractions = payload
  }
}
