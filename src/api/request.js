import api from './axios';

export const getAlbums = async () => {
  try {
    const res = await api.get()
    return res
  } catch (error) {
    throw error
  }
}

export const getAlbum = async (id) => {
  try {
    const res = await api.get(`${id}`)
    return res

  } catch(error) {
    throw error
  }
}

export const getPhotos= async (id) => {
  try {
    const res = await api.get(`${id}/photos`)
    return res

  } catch(error) {
    throw error
  }
}

export const createAlbum = async (payload) => {
  try {
    const res = await api.post('', payload)
    return res
  } catch (error) {
    throw error
  }
}

export const deleteAlbum = async (id) => {
  try {
    const res = await api.delete(`${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const updateAlbum = async (payload) => {
  try {
    const params = {
      title: payload.title,
      userId: payload.userId
    }

    const res = await api.put(`${payload.id}`, params)
    return res
  } catch (error) {
    throw error
  }
}