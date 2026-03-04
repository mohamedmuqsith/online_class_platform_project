const API_BASE = ''; // Uses Vite proxy in dev (see vite.config.js)

/**
 * Helper to get the auth token from localStorage
 */
export const getToken = () => localStorage.getItem('eduflex_token');

/**
 * Helper to get auth headers
 */
export const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'x-auth-token': token } : {})
  };
};

/**
 * Generic API fetch wrapper
 */
export const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: getAuthHeaders(),
    ...options,
  };

  try {
    const res = await fetch(url, config);

    // Handle non-JSON responses (e.g., server errors returning HTML)
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || data.error || 'Something went wrong');
    }

    return data;
  } catch (err) {
    // Re-throw API errors, wrap network errors
    if (err.message && (err.message.includes('Server error') || err.message.includes('Invalid') || err.message.includes('already exists'))) {
      throw err;
    }
    throw new Error(err.message || 'Network error. Please check your connection.');
  }
};

/* ---- Auth API ---- */
export const authAPI = {
  login: (email, password) =>
    apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (email, username, password, role = 'student') =>
    apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password, role }),
    }),

  getUser: () => apiFetch('/api/auth/user'),

  updateProfile: (data) =>
    apiFetch('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  changePassword: (currentPassword, newPassword) =>
    apiFetch('/api/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    }),
  toggleFavorite: (courseId) =>
    apiFetch(`/api/auth/favorite/${courseId}`, {
      method: 'POST',
    }),
};

/* ---- Courses API ---- */
export const coursesAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/api/courses${query ? `?${query}` : ''}`);
  },

  getById: (id) => apiFetch(`/api/courses/${id}`),

  create: (data) =>
    apiFetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  update: (id, data) =>
    apiFetch(`/api/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: (id) =>
    apiFetch(`/api/courses/${id}`, { method: 'DELETE' }),

  search: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/api/courses/search?${query}`);
  },

  getCategories: () => apiFetch('/api/courses/categories'),
};

/* ---- Schedules API ---- */
export const schedulesAPI = {
  getAll: () => apiFetch('/api/schedules'),
  getToday: () => apiFetch('/api/schedules/today'),
  create: (data) =>
    apiFetch('/api/schedules', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiFetch(`/api/schedules/${id}`, { method: 'DELETE' }),
};

/* ---- Events API ---- */
export const eventsAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/api/events${query ? `?${query}` : ''}`);
  },
  getById: (id) => apiFetch(`/api/events/${id}`),
  create: (data) =>
    apiFetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiFetch(`/api/events/${id}`, { method: 'DELETE' }),
};

/* ---- Online Classes API ---- */
export const onlineClassesAPI = {
  getAll: () => apiFetch('/api/online-classes'),
  getStats: () => apiFetch('/api/online-classes/stats'),
  create: (data) =>
    apiFetch('/api/online-classes', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    apiFetch(`/api/online-classes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiFetch(`/api/online-classes/${id}`, { method: 'DELETE' }),
};

/* ---- Certificates API ---- */
export const certificatesAPI = {
  getAll: () => apiFetch('/api/certificates'),
  getById: (id) => apiFetch(`/api/certificates/${id}`),
  create: (data) =>
    apiFetch('/api/certificates', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

/* ---- Contact API ---- */
export const contactAPI = {
  send: (data) =>
    apiFetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

/* ---- Payments API ---- */
export const paymentsAPI = {
  process: (data) =>
    apiFetch('/api/payments', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getHistory: () => apiFetch('/api/payments'),
};

/* ---- Admin API ---- */
export const adminAPI = {
  getStats: () => apiFetch('/api/admin/stats'),
  getUsers: () => apiFetch('/api/admin/users'),
  updateUserRole: (userId, role) =>
    apiFetch(`/api/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    }),
  deleteUser: (userId) =>
    apiFetch(`/api/admin/users/${userId}`, {
      method: 'DELETE',
    }),
};
