import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Power, Lightbulb, Thermometer, Droplet, AlertTriangle, TrendingDown, Zap, Home, Settings, Activity, Bell } from 'lucide-react';

const EcoHome = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room Lights', type: 'lighting', status: 'on', power: 45, room: 'Living Room', icon: Lightbulb },
    { id: 2, name: 'Bedroom AC', type: 'hvac', status: 'on', power: 1200, room: 'Bedroom', icon: Thermometer },
    { id: 3, name: 'Kitchen Fridge', type: 'appliance', status: 'on', power: 150, room: 'Kitchen', icon: Power },
    { id: 4, name: 'Water Heater', type: 'appliance', status: 'on', power: 3000, room: 'Bathroom', icon: Droplet },
    { id: 5, name: 'Office Lights', type: 'lighting', status: 'off', power: 0, room: 'Office', icon: Lightbulb },
    { id: 6, name: 'Living Room TV', type: 'appliance', status: 'on', power: 120, room: 'Living Room', icon: Power },
  ]);

  const [energyData, setEnergyData] = useState([
    { time: '00:00', consumption: 2.1, cost: 0.31 },
    { time: '04:00', consumption: 1.8, cost: 0.27 },
    { time: '08:00', consumption: 4.2, cost: 0.63 },
    { time: '12:00', consumption: 5.8, cost: 0.87 },
    { time: '16:00', consumption: 6.5, cost: 0.98 },
    { time: '20:00', consumption: 7.2, cost: 1.08 },
  ]);

  const [roomData, setRoomData] = useState([
    { room: 'Living Room', consumption: 165 },
    { room: 'Bedroom', consumption: 1200 },
    { room: 'Kitchen', consumption: 150 },
    { room: 'Bathroom', consumption: 3000 },
    { room: 'Office', consumption: 0 },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Water Heater running at peak hours - Consider scheduling', time: '2 min ago' },
    { id: 2, type: 'info', message: 'Bedroom AC filter maintenance due in 3 days', time: '1 hour ago' },
    { id: 3, type: 'success', message: 'Energy usage 23% below average today!', time: '3 hours ago' },
  ]);

  const [totalPower, setTotalPower] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const total = devices.reduce((sum, device) => sum + device.power, 0);
    setTotalPower(total);
    setMonthlyCost((total * 24 * 30 * 0.15 / 1000).toFixed(2));
    setSavings(((total * 0.23 * 24 * 30 * 0.15) / 1000).toFixed(2));

    const interval = setInterval(() => {
      setEnergyData(prev => {
        const newData = [...prev];
        const lastPoint = newData[newData.length - 1];
        const newConsumption = (Math.random() * 2 + 5).toFixed(1);
        const newCost = (newConsumption * 0.15).toFixed(2);
        const currentTime = new Date();
        const timeStr = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
        
        if (newData.length >= 12) {
          newData.shift();
        }
        newData.push({ time: timeStr, consumption: parseFloat(newConsumption), cost: parseFloat(newCost) });
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [devices]);

  const toggleDevice = (id) => {
    setDevices(devices.map(device => {
      if (device.id === id) {
        const newStatus = device.status === 'on' ? 'off' : 'on';
        const basePower = device.type === 'hvac' ? 1200 : device.type === 'lighting' ? 45 : device.name.includes('Heater') ? 3000 : device.name.includes('Fridge') ? 150 : 120;
        return { ...device, status: newStatus, power: newStatus === 'on' ? basePower : 0 };
      }
      return device;
    }));
  };

  const getStatusColor = (status) => {
    return status === 'on' ? 'bg-green-500' : 'bg-gray-400';
  };

  const getAlertColor = (type) => {
    switch(type) {
      case 'warning': return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case 'info': return 'bg-blue-100 border-blue-400 text-blue-800';
      case 'success': return 'bg-green-100 border-green-400 text-green-800';
      default: return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  const COLORS = ['#4CAF50', '#2196F3', '#FF9800', '#F44336', '#9C27B0'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Home className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">EcoHome</h1>
                <p className="text-sm text-gray-600">Smart Energy Management</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'dashboard' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('devices')}
                className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'devices' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Devices
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'analytics' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Analytics
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Current Usage</p>
                    <p className="text-3xl font-bold text-gray-800">{(totalPower / 1000).toFixed(2)} kW</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Zap className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Monthly Cost</p>
                    <p className="text-3xl font-bold text-gray-800">${monthlyCost}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Activity className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Est. Savings</p>
                    <p className="text-3xl font-bold text-green-600">${savings}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingDown className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Devices</p>
                    <p className="text-3xl font-bold text-gray-800">{devices.filter(d => d.status === 'on').length}/{devices.length}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Power className="text-purple-600" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Real-Time Energy Consumption</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="consumption" stroke="#4CAF50" strokeWidth={2} name="kWh" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Energy by Room</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={roomData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ room, percent }) => `${room}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="consumption"
                    >
                      {roomData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="text-gray-700" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Alerts & Recommendations</h3>
              </div>
              <div className="space-y-3">
                {alerts.map(alert => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.type)}`}>
                    <div className="flex items-start justify-between">
                      <p className="font-medium">{alert.message}</p>
                      <span className="text-xs">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Devices Tab */}
        {activeTab === 'devices' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Device Control</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {devices.map(device => {
                const Icon = device.icon;
                return (
                  <div key={device.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${device.status === 'on' ? 'bg-green-100' : 'bg-gray-100'}`}>
                          <Icon className={device.status === 'on' ? 'text-green-600' : 'text-gray-400'} size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{device.name}</h4>
                          <p className="text-sm text-gray-600">{device.room}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleDevice(device.id)}
                        className={`w-12 h-6 rounded-full transition relative ${getStatusColor(device.status)}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${device.status === 'on' ? 'right-1' : 'left-1'}`} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Power Draw:</span>
                      <span className="font-bold text-gray-800">{device.power}W</span>
                    </div>
                    <div className="mt-2 text-xs">
                      <span className={`px-2 py-1 rounded-full ${device.status === 'on' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                        {device.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Energy Pattern</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="consumption" fill="#4CAF50" name="Energy (kWh)" />
                  <Bar dataKey="cost" fill="#2196F3" name="Cost ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Efficiency Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Peak Efficiency Hours</span>
                    <span className="font-bold text-green-600">23:00 - 06:00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Average Daily Usage</span>
                    <span className="font-bold text-blue-600">38.4 kWh</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">Carbon Footprint</span>
                    <span className="font-bold text-purple-600">12.8 kg CO₂</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Optimization Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-500 rounded-full p-1 mt-1">
                      <TrendingDown className="text-white" size={12} />
                    </div>
                    <span className="text-sm text-gray-700">Schedule water heater during off-peak hours to save $45/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-500 rounded-full p-1 mt-1">
                      <TrendingDown className="text-white" size={12} />
                    </div>
                    <span className="text-sm text-gray-700">Enable smart cooling: AC efficiency can improve by 15%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-500 rounded-full p-1 mt-1">
                      <TrendingDown className="text-white" size={12} />
                    </div>
                    <span className="text-sm text-gray-700">Replace living room lights with LED to reduce consumption by 80%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EcoHome;
