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

## 🛠️ Technology Stack

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

## 🚀 Getting Started

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

##  Project Structure

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
