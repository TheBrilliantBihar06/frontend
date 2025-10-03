import React, { useState, useEffect, useCallback } from 'react';

// Enhanced SVG icons
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm10.293 9.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L15 14.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z" clipRule="evenodd" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

const SendAllIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const AdmitCardDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [generatingId, setGeneratingId] = useState(null);
  const [sendingAll, setSendingAll] = useState(false);
  const [bulkProgress, setBulkProgress] = useState({ current: 0, total: 0 });
  const [stats, setStats] = useState({ total: 0, sent: 0, pending: 0 });

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('token') || 'demo-token';
      
      const response = await fetch('http://localhost:5000/api/admitcard/applications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      
      const data = await response.json();
      setApplications(data);
      
      // Calculate stats
      const total = data.length;
      const sent = data.filter(app => app.admitCardStatus === 'Sent').length;
      const pending = total - sent;
      setStats({ total, sent, pending });
    } catch (err) {
      setError('Failed to fetch applications. You may not be authorized.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleGenerateClick = async (applicationId) => {
    if (!window.confirm(`Generate and send admit card for ${applicationId}?`)) return;

    setGeneratingId(applicationId);
    try {
      const token = localStorage.getItem('token') || 'demo-token';
      
      const response = await fetch(`http://localhost:5000/api/admitcard/generate/${applicationId}`, {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate admit card');
      }
      
      const data = await response.json();
      alert(data.message);
      fetchApplications();
    } catch (err) {
      alert(`Failed to generate admit card: ${err.message || 'An error occurred.'}`);
    } finally {
      setGeneratingId(null);
    }
  };

  // Method 1: Batch API call (if your backend supports it)
  const handleSendAllBatch = async () => {
    const pendingApps = applications.filter(app => app.admitCardStatus !== 'Sent');
    
    if (pendingApps.length === 0) {
      alert('No pending admit cards to send!');
      return;
    }

    if (!window.confirm(`Generate and send admit cards for ${pendingApps.length} pending applications?`)) return;

    setSendingAll(true);
    setBulkProgress({ current: 0, total: pendingApps.length });

    try {
      const token = localStorage.getItem('token') || 'demo-token';
      const applicationIds = pendingApps.map(app => app.applicationId);
      
      const response = await fetch('http://localhost:5000/api/admitcard/generate-bulk', {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ applicationIds })
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate admit cards in bulk');
      }
      
      const data = await response.json();
      alert(`Bulk operation completed!\nSuccess: ${data.successCount}\nFailed: ${data.failCount}`);
      fetchApplications();
    } catch (err) {
      // Fallback to individual calls if batch API doesn't exist
      console.log('Batch API not available, falling back to individual calls');
      await handleSendAllIndividual(pendingApps);
    } finally {
      setSendingAll(false);
      setBulkProgress({ current: 0, total: 0 });
    }
  };

  // Method 2: Individual calls with progress tracking
  const handleSendAllIndividual = async (pendingApps = null) => {
    const apps = pendingApps || applications.filter(app => app.admitCardStatus !== 'Sent');
    
    if (apps.length === 0) {
      alert('No pending admit cards to send!');
      return;
    }

    if (!pendingApps && !window.confirm(`Generate and send admit cards for ${apps.length} pending applications?`)) return;

    setSendingAll(true);
    setBulkProgress({ current: 0, total: apps.length });
    let successCount = 0;
    let failCount = 0;

    try {
      const token = localStorage.getItem('token') || 'demo-token';
      
      // Process all applications concurrently for faster execution
      const promises = apps.map(async (app, index) => {
        try {
          const response = await fetch(`http://localhost:5000/api/admitcard/generate/${app.applicationId}`, {
            method: 'POST',
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          
          setBulkProgress(prev => ({ ...prev, current: prev.current + 1 }));
          
          if (response.ok) {
            successCount++;
            return { success: true, applicationId: app.applicationId };
          } else {
            failCount++;
            return { success: false, applicationId: app.applicationId, error: 'Request failed' };
          }
        } catch (err) {
          failCount++;
          setBulkProgress(prev => ({ ...prev, current: prev.current + 1 }));
          return { success: false, applicationId: app.applicationId, error: err.message };
        }
      });

      // Wait for all requests to complete
      const results = await Promise.all(promises);
      
      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;

      alert(`Bulk operation completed!\nSuccess: ${successful}\nFailed: ${failed}`);
      fetchApplications();
    } catch (err) {
      alert('An error occurred during bulk operation.');
      console.error(err);
    } finally {
      setSendingAll(false);
      setBulkProgress({ current: 0, total: 0 });
    }
  };

  // Method 3: Sequential processing with real-time UI updates
  const handleSendAllSequential = async () => {
    const pendingApps = applications.filter(app => app.admitCardStatus !== 'Sent');
    
    if (pendingApps.length === 0) {
      alert('No pending admit cards to send!');
      return;
    }

    if (!window.confirm(`Generate and send admit cards for ${pendingApps.length} pending applications?`)) return;

    setSendingAll(true);
    setBulkProgress({ current: 0, total: pendingApps.length });
    let successCount = 0;
    let failCount = 0;

    try {
      const token = localStorage.getItem('token') || 'demo-token';
      
      for (let i = 0; i < pendingApps.length; i++) {
        const app = pendingApps[i];
        try {
          const response = await fetch(`http://localhost:5000/api/admitcard/generate/${app.applicationId}`, {
            method: 'POST',
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          
          if (response.ok) {
            successCount++;
            // Update the specific application in the state for real-time UI update
            setApplications(prevApps => 
              prevApps.map(prevApp => 
                prevApp.applicationId === app.applicationId 
                  ? { ...prevApp, admitCardStatus: 'Sent' }
                  : prevApp
              )
            );
          } else {
            failCount++;
          }
        } catch (err) {
          failCount++;
          console.error(`Failed to generate admit card for ${app.applicationId}:`, err);
        }
        
        setBulkProgress({ current: i + 1, total: pendingApps.length });
      }

      alert(`Bulk operation completed!\nSuccess: ${successCount}\nFailed: ${failCount}`);
      fetchApplications(); // Final refresh
    } catch (err) {
      alert('An error occurred during bulk operation.');
    } finally {
      setSendingAll(false);
      setBulkProgress({ current: 0, total: 0 });
    }
  };

  const pendingCount = applications.filter(app => app.admitCardStatus !== 'Sent').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Admit Card Dashboard</h1>
                <p className="text-gray-600">Manage and distribute admit cards for all applications</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={fetchApplications}
                  disabled={loading}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <RefreshIcon />
                  <span className="ml-2">Refresh</span>
                </button>
                <button
                  onClick={handleSendAllBatch} // Using batch method by default
                  disabled={sendingAll || pendingCount === 0}
                  className="flex items-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {sendingAll ? <LoadingSpinner /> : <SendAllIcon />}
                  <span className="ml-2">
                    {sendingAll 
                      ? `Processing... ${bulkProgress.current}/${bulkProgress.total}` 
                      : `Send All (${pendingCount})`
                    }
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar for Bulk Operations */}
          {sendingAll && bulkProgress.total > 0 && (
            <div className="mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Processing Applications</span>
                <span className="text-sm text-gray-500">
                  {bulkProgress.current} of {bulkProgress.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(bulkProgress.current / bulkProgress.total) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Applications</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Admit Cards Sent</p>
                  <p className="text-3xl font-bold text-green-600">{stats.sent}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckIcon />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Main Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {loading ? (
              <div className="text-center py-20">
                <LoadingSpinner />
                <p className="mt-4 text-gray-600">Loading applications...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <p className="text-red-600 font-medium">{error}</p>
                <button
                  onClick={fetchApplications}
                  className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : applications.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <p className="text-gray-600 font-medium">No applications found</p>
                <p className="text-gray-500 text-sm mt-2">Applications will appear here once submitted</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Application ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Applicant Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((app, index) => (
                      <tr key={app._id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-mono text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md inline-block">
                            {app.applicationId}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium text-sm">
                                {app.fullName.charAt(0).toUpperCase()}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{app.fullName}</div>
                              <div className="text-sm text-gray-500">{app.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            app.admitCardStatus === 'Sent' 
                              ? 'bg-green-100 text-green-800 border border-green-200' 
                              : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                          }`}>
                            {app.admitCardStatus === 'Sent' && <CheckIcon />}
                            <span className={app.admitCardStatus === 'Sent' ? 'ml-1' : ''}>
                              {app.admitCardStatus}
                            </span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleGenerateClick(app.applicationId)}
                            disabled={app.admitCardStatus === 'Sent' || generatingId === app.applicationId || sendingAll}
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                              app.admitCardStatus === 'Sent'
                                ? 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200'
                                : generatingId === app.applicationId || sendingAll
                                ? 'bg-indigo-100 text-indigo-700 cursor-not-allowed border border-indigo-200'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md border border-indigo-600'
                            }`}
                          >
                            {generatingId === app.applicationId ? (
                              <>
                                <LoadingSpinner />
                                <span className="ml-2">Processing...</span>
                              </>
                            ) : app.admitCardStatus === 'Sent' ? (
                              <>
                                <CheckIcon />
                                <span className="ml-1">Sent</span>
                              </>
                            ) : sendingAll ? (
                              <>
                                <LoadingSpinner />
                                <span className="ml-2">In Queue...</span>
                              </>
                            ) : (
                              <>
                                <SendIcon />
                                <span className="ml-2">Generate & Send</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Footer */}
          {applications.length > 0 && (
            <div className="mt-8 text-center text-gray-500 text-sm">
              Showing {applications.length} applications • Last updated: {new Date().toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmitCardDashboard;