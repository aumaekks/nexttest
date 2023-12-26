export const postAPI = async (path, payload) => {
  try {
    const fullPath = `${process.env.NEXT_PUBLIC_API_HOST}${path}`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    const response = await fetch(fullPath, options)
    response.status
    if(response.status !== 200){
      return { status: false, message: 'Network Error, Please try again'}
    }
    console.log(response.status);
    const data = await response.json()
    if (data['response-code'] !== '0') {
      return { status: false, message: data['response-message'] }
    }
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error.message }
  }
}