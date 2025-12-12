// small mock API used for demo UI without backend
const mockUsers = [
  { id: 'u1', name: 'Anika', email: 'anika@example.com', role: 'participant' },
  { id: 'u2', name: 'Ravi', email: 'ravi@example.com', role: 'judge' },
  { id: 'u3', name: 'Admin', email: 'admin@example.com', role: 'admin' }
]

const mockTeams = [
  { id: 't1', name: 'Team Falcon', members: ['Anika', 'Ravi'], score: 85 },
  { id: 't2', name: 'ByteBusters', members: ['Mitesh'], score: 93 }
]

export async function login({ email, password }) {
  // fake auth: accept any password
  const user = mockUsers.find(u => u.email === email)
  if (!user) throw new Error('User not found (try anika@example.com or admin@example.com)')
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
