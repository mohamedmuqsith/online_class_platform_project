import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { adminAPI } from '../../api';

const sidebarItems = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Courses', path: '/admin/add-courses' },
  { label: 'Users', path: '/admin/users' },
  { label: 'Schedule', path: '/admin/calendar-create' },
  { label: 'Online Classes', path: '/admin/online-classes' },
  { label: 'Schedules', path: '/admin/schedules' },
];

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeItem] = useState(2); // Users is index 2

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await adminAPI.getUsers();
        setUsers(data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleUpdate = async (userId, newRole) => {
    try {
      await adminAPI.updateUserRole(userId, newRole);
      setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
      alert('Role updated successfully');
    } catch (err) {
      alert(err.message || 'Failed to update role');
    }
  };

  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Are you sure you want to delete user "${username}"?`)) return;
    try {
      await adminAPI.deleteUser(userId);
      setUsers(users.filter(u => u._id !== userId));
      alert('User deleted successfully');
    } catch (err) {
      alert(err.message || 'Failed to delete user');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      <style>{`
                .admin-sidebar {
                    width: 240px; background: #fff; border-right: 1px solid #eee;
                    display: flex; flex-direction: column; height: 100vh;
                    position: sticky; top: 0;
                }
                .admin-nav { padding: 25px 20px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
                .admin-nav-item {
                    display: block; padding: 14px 20px; border-radius: 10px;
                    background: #ebdcdc; color: #333; font-weight: 700;
                    text-align: center; text-decoration: none; font-size: 0.95rem;
                    transition: all 0.3s ease;
                }
                .admin-nav-item.active { background: #c49696; color: #fff; }
                
                .admin-content { padding: 35px 40px; flex: 1; }
                .user-table-card {
                    background: #fff; border-radius: 18px; padding: 30px;
                    box-shadow: 0 4px 25px rgba(0,0,0,0.04);
                }
                .user-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                .user-table th { text-align: left; padding: 15px; border-bottom: 2px solid #f0f0f0; color: #888; font-size: 0.85rem; }
                .user-table td { padding: 15px; border-bottom: 1px solid #f0f0f0; vertical-align: middle; }
                .role-badge {
                    padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;
                    text-transform: capitalize;
                }
                .role-admin { background: #fee2e2; color: #991b1b; }
                .role-user { background: #d1fae5; color: #065f46; }
                .role-instructor { background: #dbeafe; color: #1e40af; }
            `}</style>

      <aside className="admin-sidebar">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <img src={logoImg} alt="Logo" style={{ height: '40px' }} />
        </div>
        <nav className="admin-nav">
          {sidebarItems.map((item, idx) => (
            <Link key={idx} to={item.path} className={`admin-nav-item ${activeItem === idx ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: '#555', fontSize: '0.9rem' }} onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}>
            <span>🚪</span> <span>Logout</span>
          </div>
        </div>
      </aside>

      <main className="admin-content">
        <h1 style={{ marginBottom: '30px', fontFamily: 'serif' }}>User Management</h1>

        <div className="user-table-card">
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id}>
                    <td style={{ fontWeight: 'bold' }}>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleUpdate(u._id, e.target.value)}
                        className={`role-badge role-${u.role}`}
                        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
                      >
                        <option value="user">User</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                      </select>
                    </td>
                    <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        style={{ background: '#fee2e2', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', color: '#991b1b', fontWeight: '600' }}
                        onClick={() => handleDeleteUser(u._id, u.username)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;
