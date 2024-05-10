export function handleLogout() {
  return fetch('/api/logout')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Logout failed')
      }
      return res.json()
    })
    .then((data) => {
      console.log(data)
      // Remove the JWT token from localStorage
      localStorage.removeItem('jwtToken')
    })
    .catch((error) => {
      console.error('Error:', error)
      throw error
    })
}

export async function postLoginSignupData(formRoute, userInfo) {
  const response = await fetch(`/api${formRoute}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  return response
}

export async function updateUserData(userInfo) {
  const updatedUserInfo = Object.fromEntries(
    Object.entries(userInfo).map(([key, value]) => [key, value === '' ? null : value])
  )

  const response = await fetch('/api/update-user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    },
    body: JSON.stringify(updatedUserInfo)
  })

  return response
}
