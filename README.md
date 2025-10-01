#  EcoHome - Smart Energy Management System

![EcoHome Banner](https://via.placeholder.com/800x200/4CAF50/FFFFFF?text=EcoHome+-+Smart+Home+Automation)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![IoT](https://img.shields.io/badge/IoT-Enabled-green.svg)]()
[![AI](https://img.shields.io/badge/AI-Powered-orange.svg)]()

##  Overview

**EcoHome** is an intelligent smart home automation system that monitors energy consumption and optimizes device usage for maximum efficiency and sustainability. By leveraging IoT sensors, AI-driven analytics, and real-time data visualization, EcoHome helps homeowners reduce their carbon footprint while saving money on energy bills.

###  Key Features

- **Real-Time Monitoring** - Track energy consumption across all connected devices
- **AI-Powered Optimization** - Machine learning algorithms identify patterns and suggest improvements
- **Remote Control** - Manage devices from anywhere via mobile or web app
- **Predictive Maintenance** - Receive alerts before equipment failures occur
- **Cost Analysis** - Detailed breakdown of energy costs and savings potential
- **Room-Level Insights** - Monitor consumption by room for targeted optimization
- **Automated Scheduling** - Smart device scheduling based on usage patterns
- **Carbon Footprint Tracking** - Visualize environmental impact

##  Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      EcoHome System                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐      ┌──────────────┐      ┌───────────┐ │
│  │   IoT Layer  │ ───> │   AI Hub     │ ───> │  Frontend │ │
│  │              │      │              │      │           │ │
│  │  • Sensors   │      │  • Analysis  │      │  • Web    │ │
│  │  • Actuators │      │  • ML Models │      │  • Mobile │ │
│  │  • Devices   │      │  • Rules     │      │  • API    │ │
│  └──────────────┘      └──────────────┘      └───────────┘ │
│         ↓                      ↓                     ↓       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Data Pipeline & Storage                  │  │
│  │  • Time-series DB  • Message Queue  • Cloud Storage  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

##  Technology Stack

### Hardware & IoT
- **Microcontrollers**: ESP32, Arduino, Raspberry Pi
- **Sensors**: 
  - Current/Voltage sensors (ACS712, INA219)
  - Temperature/Humidity (DHT22, BME280)
  - Motion sensors (PIR)
  - Light sensors (LDR)
- **Communication**: 
  - MQTT (Message Queue Telemetry Transport)
  - CoAP (Constrained Application Protocol)
  - Zigbee/Z-Wave for device control
  - Wi-Fi/Bluetooth for connectivity

### Backend
- **Language**: Python 3.9+
- **Framework**: FastAPI / Flask
- **Database**: 
  - InfluxDB (time-series data)
  - PostgreSQL (relational data)
  - Redis (caching)
- **Message Broker**: RabbitMQ / Apache Kafka
- **AI/ML**: 
  - TensorFlow / PyTorch
  - scikit-learn
  - Prophet (time-series forecasting)

### Frontend
- **Web**: React / Next.js
- **Mobile**: React Native / Flutter
- **Visualization**: Recharts, D3.js
- **UI Framework**: Tailwind CSS

### DevOps & Cloud
- **Containerization**: Docker, Kubernetes
- **Cloud Platform**: AWS / Google Cloud / Azure
- **CI/CD**: GitHub Actions, Jenkins
- **Monitoring**: Prometheus, Grafana

##  Getting Started

### Prerequisites

```bash
# System requirements
- Python 3.9+
- Node.js 16+
- Docker & Docker Compose
- MQTT Broker (Mosquitto)

# Hardware (optional for full setup)
- ESP32/Arduino boards
- Current sensors
- Smart plugs/relays
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ecohome.git
cd ecohome
```

#### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
python manage.py migrate

# Start the server
python main.py
```

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API endpoints

# Start development server
npm run dev
```

#### 4. IoT Device Setup

```bash
cd iot-devices

# Flash firmware to ESP32
# Using Arduino IDE or PlatformIO
# 1. Open device_firmware.ino
# 2. Configure WiFi credentials
# 3. Set MQTT broker address
# 4. Upload to device
```

#### 5. Docker Deployment (Recommended)

```bash
# Start all services
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

## 📁 Project Structure

```
EcoHome/
├── backend/                    # Backend API server
│   ├── api/                   # API endpoints
│   │   ├── devices.py        # Device management
│   │   ├── energy.py         # Energy data endpoints
│   │   └── analytics.py      # Analytics & insights
│   ├── ml/                    # Machine learning models
│   │   ├── predictor.py      # Energy prediction
│   │   ├── optimizer.py      # Optimization algorithms
│   │   └── anomaly.py        # Anomaly detection
│   ├── services/              # Business logic
│   │   ├── mqtt_handler.py   # MQTT message processing
│   │   ├── data_processor.py # Data processing pipeline
│   │   └── scheduler.py      # Task scheduling
│   ├── models/                # Database models
│   ├── config/                # Configuration files
│   └── requirements.txt       # Python dependencies
│
├── frontend/                   # Web & Mobile frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Application pages
│   │   ├── services/         # API services
│   │   ├── hooks/            # Custom React hooks
│   │   └── utils/            # Utility functions
│   ├── public/               # Static assets
│   └── package.json          # Node dependencies
│
├── iot-devices/               # IoT device firmware
│   ├── esp32/                # ESP32 sketches
│   │   ├── energy_monitor/   # Energy monitoring code
│   │   ├── relay_control/    # Device control code
│   │   └── sensors/          # Sensor integration
│   ├── arduino/              # Arduino code
│   └── raspberry-pi/         # Raspberry Pi scripts
│
├── ml-models/                 # Trained ML models
│   ├── energy_predictor.pkl  # Energy prediction model
│   ├── anomaly_detector.pkl  # Anomaly detection model
│   └── optimizer.pkl         # Optimization model
│
├── data/                      # Data storage
│   ├── raw/                  # Raw sensor data
│   ├── processed/            # Processed datasets
│   └── models/               # Model artifacts
│
├── scripts/                   # Utility scripts
│   ├── data_migration.py     # Database migrations
│   ├── train_models.py       # ML model training
│   └── setup.sh              # Setup automation
│
├── docs/                      # Documentation
│   ├── api.md                # API documentation
│   ├── hardware.md           # Hardware setup guide
│   └── deployment.md         # Deployment guide
│
├── docker-compose.yml         # Docker services
├── .env.example              # Environment template
└── README.md                 # This file
```

##  IoT Communication Protocols

### MQTT Topics Structure

```
ecohome/
├── devices/
│   ├── {device_id}/
│   │   ├── status          # Device online/offline
│   │   ├── power           # Power consumption (watts)
│   │   ├── control         # Control commands
│   │   └── telemetry       # Sensor data
│   └── discovery           # Device discovery
├── rooms/
│   └── {room_id}/
│       └── aggregate       # Room-level aggregation
└── system/
    ├── alerts              # System alerts
    └── commands            # System-wide commands
```

### Message Format (JSON)

```json
{
  "device_id": "living_room_ac_01",
  "timestamp": "2025-10-01T10:30:00Z",
  "type": "telemetry",
  "data": {
    "power": 1200,
    "temperature": 24.5,
    "humidity": 45,
    "status": "on"
  }
}
```

## 🤖 AI & Machine Learning

### Energy Prediction Model

Uses LSTM neural networks to forecast energy consumption:

```python
# Train the model
python scripts/train_models.py --model energy_predictor

# Features used:
# - Historical consumption patterns
# - Time of day / day of week
# - Weather data
# - Occupancy patterns
# - Device states
```

### Anomaly Detection

Identifies unusual energy patterns that may indicate:
- Device malfunction
- Energy waste
- Security concerns (unexpected device usage)

### Optimization Engine

Multi-objective optimization considering:
- **Energy efficiency** - Minimize consumption
- **Comfort** - Maintain user preferences
- **Cost** - Reduce electricity bills
- **Sustainability** - Lower carbon footprint

##  Key Metrics & Analytics

### Energy Metrics
- Real-time power consumption (kW)
- Daily/weekly/monthly trends
- Peak usage hours
- Device-level breakdown
- Room-level analysis

### Cost Analysis
- Current electricity costs
- Projected monthly bills
- Savings from optimization
- Time-of-use rate analysis
- Comparative analysis (vs. similar homes)

### Environmental Impact
- Carbon footprint (kg CO₂)
- Equivalent trees planted
- Environmental savings
- Renewable energy usage

##  API Documentation

### REST API Endpoints

#### Devices

```bash
# Get all devices
GET /api/v1/devices

# Get specific device
GET /api/v1/devices/{device_id}

# Control device
POST /api/v1/devices/{device_id}/control
{
  "action": "turn_on",
  "schedule": "immediate"
}

# Update device settings
PUT /api/v1/devices/{device_id}
{
  "name": "Living Room AC",
  "room": "living_room",
  "auto_mode": true
}
```

#### Energy Data

```bash
# Get current consumption
GET /api/v1/energy/current

# Get historical data
GET /api/v1/energy/history?start=2025-10-01&end=2025-10-07&interval=1h

# Get predictions
GET /api/v1/energy/predict?horizon=24h

# Get room breakdown
GET /api/v1/energy/by-room
```

#### Analytics

```bash
# Get insights and recommendations
GET /api/v1/analytics/insights

# Get anomalies
GET /api/v1/analytics/anomalies?days=7

# Get efficiency score
GET /api/v1/analytics/efficiency-score

# Get cost analysis
GET /api/v1/analytics/cost-breakdown
```

#### Automation

```bash
# Create automation rule
POST /api/v1/automation/rules
{
  "name": "Night mode",
  "trigger": {
    "type": "time",
    "value": "22:00"
  },
  "actions": [
    {
      "device_id": "living_room_lights",
      "action": "turn_off"
    }
  ]
}

# Get all rules
GET /api/v1/automation/rules

# Update rule
PUT /api/v1/automation/rules/{rule_id}

# Delete rule
DELETE /api/v1/automation/rules/{rule_id}
```

### WebSocket API

Real-time data streaming:

```javascript
// Connect to WebSocket
const ws = new WebSocket('ws://localhost:8000/ws');

// Subscribe to device updates
ws.send(JSON.stringify({
  type: 'subscribe',
  topic: 'devices/updates'
}));

// Receive real-time data
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Device update:', data);
};
```

## 🔧 Hardware Setup Guide

### Basic Setup (Starter Kit)

**Components Required:**
- 1x ESP32 Development Board
- 3x ACS712 Current Sensors (30A)
- 1x DHT22 Temperature/Humidity Sensor
- 3x Relay Module (for device control)
- Jumper wires and breadboard
- 5V Power Supply

**Wiring Diagram:**

```
ESP32               ACS712 Sensor 1
┌────────┐         ┌──────────┐
│   3.3V ├────────>│ VCC      │
│    GND ├────────>│ GND      │
│   GPIO36├────────>│ OUT      │
│        │         └──────────┘
│        │         
│        │         DHT22
│        │         ┌──────────┐
│   GPIO4├────────>│ DATA     │
│   3.3V ├────────>│ VCC      │
│    GND ├────────>│ GND      │
└────────┘         └──────────┘
```

### Advanced Setup (Full Home)

**Additional Components:**
- Multiple ESP32 nodes (one per room)
- Smart plugs with energy monitoring
- Central hub (Raspberry Pi 4)
- MQTT broker
- Network infrastructure

**Installation Steps:**

1. **Install MQTT Broker on Raspberry Pi**
```bash
sudo apt-get update
sudo apt-get install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
```

2. **Configure Network**
```bash
# Set static IP for hub
sudo nano /etc/dhcpcd.conf

# Add:
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
```

3. **Flash ESP32 Devices**
```bash
# Use PlatformIO
pio run --target upload --upload-port /dev/ttyUSB0
```

4. **Register Devices**
```bash
# Use CLI tool
./ecohome-cli register-device \
  --id living_room_ac \
  --type hvac \
  --ip 192.168.1.101
```

##  Security Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- OAuth2 integration
- Multi-factor authentication (MFA)

### Data Security
- End-to-end encryption for sensitive data
- TLS/SSL for all communications
- Secure MQTT (port 8883)
- Regular security audits

### Network Security
- VLAN isolation for IoT devices
- Firewall rules
- Intrusion detection
- Regular firmware updates

### Privacy
- Local data processing option
- GDPR compliance
- Data anonymization
- User consent management

##  Testing

### Unit Tests

```bash
# Run all tests
pytest tests/

# Run with coverage
pytest --cov=backend tests/

# Run specific test suite
pytest tests/test_devices.py
```

### Integration Tests

```bash
# Test API endpoints
pytest tests/integration/

# Test MQTT communication
python tests/integration/test_mqtt.py

# Test ML models
pytest tests/ml/
```

### Hardware Testing

```bash
# Test sensor readings
python scripts/test_sensors.py

# Test relay control
python scripts/test_relays.py

# Run full system test
python scripts/system_test.py
```

## 📈 Performance Metrics

### System Requirements

**Minimum:**
- 2 CPU cores
- 4GB RAM
- 20GB storage
- 10 Mbps internet

**Recommended:**
- 4+ CPU cores
- 8GB+ RAM
- 50GB SSD storage
- 50 Mbps internet

### Scalability

- **Devices**: Supports up to 100 devices per hub
- **Data Points**: 10,000+ data points per second
- **Users**: 50+ concurrent users
- **History**: 2 years of historical data

### Response Times

- API response: < 100ms
- Real-time updates: < 500ms latency
- ML predictions: < 2 seconds
- Mobile app load: < 3 seconds

##  Use Cases

### 1. Smart Energy Management
Automatically optimize HVAC systems based on occupancy and weather forecasts.

### 2. Load Balancing
Distribute energy consumption to avoid peak-time charges.

### 3. Preventive Maintenance
Detect anomalies in appliance behavior before failure occurs.

### 4. Solar Integration
Optimize solar panel usage and battery storage.

### 5. Multi-Property Management
Monitor and control multiple properties from a single dashboard.

##  Advanced Features

### Machine Learning Models

#### 1. Energy Forecasting
```python
from ecohome.ml import EnergyPredictor

predictor = EnergyPredictor()
forecast = predictor.predict(horizon='24h')
print(f"Expected consumption: {forecast.total_kwh} kWh")
```

#### 2. Anomaly Detection
```python
from ecohome.ml import AnomalyDetector

detector = AnomalyDetector()
anomalies = detector.detect(device_id='living_room_ac')
for anomaly in anomalies:
    print(f"Anomaly detected: {anomaly.description}")
```

#### 3. Optimization Engine
```python
from ecohome.ml import EnergyOptimizer

optimizer = EnergyOptimizer()
schedule = optimizer.optimize(
    constraints={
        'max_cost': 100,
        'comfort_level': 'high'
    }
)
```

### Automation Rules Engine

Create complex automation scenarios:

```yaml
# Example: Smart cooling automation
name: Smart Cooling
triggers:
  - type: temperature
    condition: above
    value: 26
    sensor: living_room_temp
  - type: occupancy
    condition: present
    room: living_room

actions:
  - device: living_room_ac
    action: turn_on
    settings:
      temperature: 24
      mode: eco

conditions:
  - time_range:
      start: "08:00"
      end: "22:00"
  - energy_price:
      below: 0.20
```

## 📚 Learning Resources

### Documentation
- [API Reference](docs/api.md)
- [Hardware Setup Guide](docs/hardware.md)
- [ML Model Training](docs/ml-training.md)
- [Deployment Guide](docs/deployment.md)

### Tutorials
- [Getting Started with EcoHome](docs/tutorials/getting-started.md)
- [Building Custom Sensors](docs/tutorials/custom-sensors.md)
- [Creating Automation Rules](docs/tutorials/automation.md)
- [Training ML Models](docs/tutorials/ml-training.md)

### Video Guides
- System Overview (YouTube)
- Hardware Installation (YouTube)
- Mobile App Tutorial (YouTube)
- Advanced Configuration (YouTube)

##  Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow PEP 8 for Python code
- Use ESLint for JavaScript/React
- Write unit tests for new features
- Update documentation
- Keep commits atomic and descriptive

##  Troubleshooting

### Common Issues

#### MQTT Connection Failed
```bash
# Check broker status
sudo systemctl status mosquitto

# Test connection
mosquitto_sub -h localhost -t '#' -v

# Check firewall
sudo ufw status
```

#### Device Not Responding
```bash
# Check device connectivity
ping 192.168.1.101

# View device logs
./ecohome-cli logs --device living_room_ac

# Reset device
./ecohome-cli reset-device --id living_room_ac
```

#### High CPU Usage
```bash
# Check service status
docker stats

# Review logs
docker-compose logs -f api

# Optimize database
python scripts/optimize_db.py
```

##  Roadmap

### Q4 2025
-  Core functionality
-  Basic ML models
-  Web dashboard
-  Mobile app (iOS/Android)

### Q1 2026
-  Voice assistant integration (Alexa, Google Home)
-  Advanced automation rules
-  Community marketplace for plugins
-  Multi-language support

### Q2 2026
-  Solar panel integration
-  Electric vehicle charging optimization
-  Weather API integration
-  Energy trading features

### Q3 2026
-  Blockchain for energy credits
-  Peer-to-peer energy sharing
-  Advanced predictive maintenance
-  AR visualization for energy flow

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team

- **Lead Developer**: [Your Name] - System Architecture & ML
- **IoT Engineer**: [Team Member] - Hardware Integration
- **Full-Stack Developer**: [Team Member] - Frontend & API
- **Data Scientist**: [Team Member] - ML Models & Analytics
- **DevOps Engineer**: [Team Member] - Infrastructure & Deployment

##  Acknowledgments

- OpenEnergyMonitor for sensor integration inspiration
- Home Assistant community for automation ideas
- TensorFlow team for ML frameworks
- MQTT.org for protocol documentation


##  Environmental Impact

By using EcoHome, you're contributing to:
- **Reduced carbon emissions** - Average 25% reduction
- **Energy savings** - Up to $500/year per household
- **Sustainable living** - Smart resource management
- **Global awareness** - Data-driven environmental decisions

---

**Made with love for a sustainable future**

*EcoHome - Making smart homes smarter, one watt at a time.*
