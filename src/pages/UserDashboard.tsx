import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award } from 'lucide-react';

interface Enrollment {
  _id: string;
  status: string;
  createdAt: string;
  internship: {
    title: string;
    description: string;
    duration_weeks: number;
  };
}

const UserDashboard = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserEnrollments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/enrollments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setEnrollments(data);
        }
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserEnrollments();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">My Dashboard</h1>

        <div className="grid grid-cols-1 gap-6">
          {enrollments.map((enrollment) => (
            <div key={enrollment._id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {enrollment.internship.title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {enrollment.internship.description}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    enrollment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {enrollment.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-300">Course Progress: 45%</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-300">
                      Duration: {enrollment.internship.duration_weeks} weeks
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-300">
                      Started: {new Date(enrollment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 rounded-full h-2" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {enrollments.length === 0 && (
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-gray-400">
                You haven't enrolled in any internships yet.
              </p>
              <button
                onClick={() => navigate('/internships')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Browse Internships
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;