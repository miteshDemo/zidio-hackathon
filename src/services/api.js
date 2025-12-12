// small mock API used for demo UI without backend
const mockUsers = [
  { id: 'u1', name: 'Mitesh', email: 'mits123@gmail.com', role: 'participant' },
  { id: 'u2', name: 'Admin', email: 'admin111@gmail.com', role: 'admin' }
]

const mockTeams = [
  { id: 't1', name: 'Project 1', members: ['Mitesh'], score: 99 },
  
]

export async function login({ email, password }) {
  // fake auth: accept any password
  const user = mockUsers.find(u => u.email === email)
  if (!user) throw new Error('User not found (try anika@gmail.com or admin@gmail.com)')
  // simulate token
  return { user, token: 'fake-jwt-token' }
}

export async function register({ name, email, password }) {
  const id = 'u' + (mockUsers.length + 1)
  const user = { id, name, email, role: 'participant' }
  mockUsers.push(user)
  return { user, token: 'fake-jwt-token' }
}

export async function getDashboard(userId) {
  // returns user info + team list, submissions
  return {
    user: mockUsers.find(u => u.id === userId) || mockUsers[0],
    teams: mockTeams,
    submissions: [
      { id: 's1', title: 'SmartHealth', link: 'https://github.com/example', team: 't1', status: 'submitted' }
    ]
  }
}

export async function getLeaderboard() {
  return mockTeams.sort((a,b) => b.score - a.score)
}

export async function getUserPortfolio(userId) {
  const u = mockUsers.find(x => x.id === userId) || mockUsers[0]
  return {
    user: u,
    projects: [
      { id: 'p1', title: 'Project Alpha', description: 'Demo project', link: '#' }
    ]
  }
}
