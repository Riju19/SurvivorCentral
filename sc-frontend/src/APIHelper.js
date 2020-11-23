import axios from "axios"

const env = process.env.NODE_ENV

const API_URL = env === 'development'
? 'http://localhost:3001/' //development
: 'http://scdb.com/userResponses/' // production 

async function addResponses(responses) {
  const { data: newResponses } = await axios.post(API_URL+"postResponses/", {
    responses,
  })
  console.log("env:" +env);
  return newResponses
}

async function deleteResponse(id) {
  const message = await axios.delete(`${API_URL}"deleteResponse/"${id}`)
  return message
}

async function updateResponse(id, payload) {
  const { data: newResponse } = await axios.put(`${API_URL}"updateResponse/"${id}`, payload)
  return newResponse
}

async function getAllResponses() {
  const { data: responses } = await axios.get(API_URL+"getResponses")
  return responses
}

export default { addResponses, deleteResponse, updateResponse, getAllResponses }