require('dotenv').config(); // This must be line 1
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();

// MongoDB connection
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('✅ MongoDB Atlas Connected!');
})
.catch(err => {
    console.log('❌ MongoDB Error:', err);
});
// ========== SCHEMAS ==========

// Weather Schema
const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    condition: String,
    humidity: Number,
    wind_speed: Number,
    feels_like: Number,
    pressure: Number,
    timestamp: { type: Date, default: Date.now }
});

// Mandi Schema
const mandiSchema = new mongoose.Schema({
    commodity: String,
    market: String,
    district: String,
    min_price: Number,
    max_price: Number,
    modal_price: Number,
    date: { type: Date, default: Date.now }
});

// Disease Schema
const diseaseSchema = new mongoose.Schema({
    name: String,
    name_hi: String,
    name_mr: String,
    crop: String,
    symptoms: String,
    symptoms_hi: String,
    symptoms_mr: String,
    treatment: String,
    treatment_hi: String,
    treatment_mr: String,
    prevention: String,
    image: String,
    severity: String
});

// Crop Schema
const cropSchema = new mongoose.Schema({
    name: String,
    soil_type: String,
    season: String,
    water_requirements: String,
    fertilizer: String,
    yield_per_acre: String,
    duration: String,
    description: String,
    description_hi: String,
    description_mr: String
});

// Models
const Weather = mongoose.model('Weather', weatherSchema);
const Mandi = mongoose.model('Mandi', mandiSchema);
const Disease = mongoose.model('Disease', diseaseSchema);
const Crop = mongoose.model('Crop', cropSchema);

// ========== API ROUTES ==========

// 1. WEATHER API
app.get('/api/weather', async (req, res) => {
    try {
        const city = req.query.city;
        // Pehle database mein check karo
        let weather = await Weather.findOne({ city }).sort({ timestamp: -1 });
        
        // Agar data nahi hai to dummy data bhejo
        if (!weather) {
            weather = {
                city: city,
                temperature: 32,
                condition: 'Sunny',
                humidity: 65,
                wind_speed: 12,
                feels_like: 34,
                pressure: 1013,
                timestamp: new Date()
            };
        }
        
        res.json({
            success: true,
            ...weather._doc || weather
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. MANDI RATES API
app.get('/api/mandi-rates', async (req, res) => {
    try {
        let mandiData = await Mandi.find().sort({ date: -1 }).limit(10);
        
        // Agar data nahi hai to dummy data bhejo
        if (mandiData.length === 0) {
            mandiData = [
                { commodity: 'Wheat', market: 'Lasalgaon', district: 'Nashik', min_price: 2150, max_price: 2350, modal_price: 2250 },
                { commodity: 'Rice', market: 'Nagpur', district: 'Nagpur', min_price: 1850, max_price: 2100, modal_price: 1975 },
                { commodity: 'Soybean', market: 'Latur', district: 'Latur', min_price: 3600, max_price: 3850, modal_price: 3725 },
                { commodity: 'Cotton', market: 'Akola', district: 'Akola', min_price: 6050, max_price: 6350, modal_price: 6200 },
                { commodity: 'Sugarcane', market: 'Kolhapur', district: 'Kolhapur', min_price: 3100, max_price: 3350, modal_price: 3225 }
            ];
        }
        
        res.json({
            success: true,
            data: mandiData,
            count: mandiData.length
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 3. DISEASES API
app.get('/api/diseases', async (req, res) => {
    try {
        let diseases = await Disease.find().limit(6);
        
        // Agar data nahi hai to dummy data bhejo
        if (diseases.length === 0) {
            diseases = [
                {
                    name: 'Wheat Rust',
                    name_hi: 'गेहूं रस्ट',
                    name_mr: 'गव्हाचा गंज',
                    crop: 'Wheat',
                    symptoms: 'Orange-brown pustules on leaves',
                    treatment: 'Propiconazole fungicide',
                    prevention: 'Use resistant varieties'
                },
                {
                    name: 'Rice Blast',
                    name_hi: 'चावल ब्लास्ट',
                    name_mr: 'तांदळाचा ब्लास्ट',
                    crop: 'Rice',
                    symptoms: 'Diamond-shaped lesions on leaves',
                    treatment: 'Tricyclazole fungicide',
                    prevention: 'Avoid excess nitrogen'
                },
                {
                    name: 'Cotton Wilt',
                    name_hi: 'कपास विल्ट',
                    name_mr: 'कापूस विल्ट',
                    crop: 'Cotton',
                    symptoms: 'Yellowing and wilting of leaves',
                    treatment: 'Soil treatment with Carbendazim',
                    prevention: 'Crop rotation'
                }
            ];
        }
        
        res.json({
            success: true,
            data: diseases
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 4. CALCULATE YIELD API
app.post('/api/calculate-yield', async (req, res) => {
    try {
        const { area, crop, unit } = req.body;
        
        // Yield data (per acre in quintals)
        const yieldData = {
            wheat: 20,
            rice: 28,
            cotton: 14,
            sugarcane: 400,
            soybean: 12,
            maize: 22
        };
        
        const areaInAcre = unit === 'hectare' ? area * 2.47 : area;
        const yieldPerAcre = yieldData[crop] || 15;
        const totalYield = areaInAcre * yieldPerAcre;
        
        res.json({
            success: true,
            area: area,
            area_in_acres: areaInAcre.toFixed(2),
            yield_per_acre: yieldPerAcre,
            total_yield: totalYield.toFixed(2),
            yield_unit: 'quintals',
            crop: crop
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 5. SMART MANDI PREDICTIONS
app.get('/api/smart-mandi', async (req, res) => {
    try {
        const predictions = [
            {
                commodity: 'Wheat',
                market: 'Lasalgaon',
                city: 'Nashik',
                currentPrice: 2250,
                prediction: {
                    tomorrowPrice: 2350,
                    changePercent: 4.4,
                    trend: 'UP',
                    trendIcon: '📈',
                    forecast3Day: '₹2380-2420'
                },
                weather: {
                    today: 'Sunny, 32°C',
                    tomorrow: 'Partly cloudy, 30°C',
                    impact: 'Favorable for harvesting',
                    icon: '☀️'
                },
                recommendation: [
                    'Consider selling next week',
                    'Good quality expected'
                ],
                confidence: '85%',
                algorithm: 'SMA + Weather',
                updated: new Date().toLocaleTimeString()
            },
            {
                commodity: 'Soybean',
                market: 'Latur',
                city: 'Latur',
                currentPrice: 3725,
                prediction: {
                    tomorrowPrice: 3650,
                    changePercent: -2.0,
                    trend: 'DOWN',
                    trendIcon: '📉',
                    forecast3Day: '₹3600-3680'
                },
                weather: {
                    today: 'Rainy, 28°C',
                    tomorrow: 'Light rain, 27°C',
                    impact: 'Storage issues possible',
                    icon: '🌧️'
                },
                recommendation: [
                    'Sell immediately',
                    'Check moisture levels'
                ],
                confidence: '78%',
                algorithm: 'WMA + Weather',
                updated: new Date().toLocaleTimeString()
            }
        ];
        
        res.json({
            success: true,
            data: predictions
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 6. CROP INFO API
app.get('/api/crops/:crop', async (req, res) => {
    try {
        const crop = req.params.crop;
        let cropData = await Crop.findOne({ name: crop });
        
        if (!cropData) {
            cropData = {
                name: crop,
                soil_type: 'Well-drained loamy soil',
                season: 'Rabi/Kharif',
                water_requirements: 'Moderate',
                fertilizer: 'NPK balanced',
                yield_per_acre: '18-20 quintals',
                duration: '120-140 days',
                description: 'Suitable for all regions'
            };
        }
        
        res.json({
            success: true,
            data: cropData
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ========== DATA SEEDING ==========
app.post('/api/seed-data', async (req, res) => {
    try {
        // Pehle purana data delete karo
        await Weather.deleteMany({});
        await Mandi.deleteMany({});
        await Disease.deleteMany({});
        
        // Weather data insert karo
        await Weather.insertMany([
            { city: 'Pune', temperature: 32, condition: 'Sunny', humidity: 65, wind_speed: 12, feels_like: 34, pressure: 1013 },
            { city: 'Mumbai', temperature: 30, condition: 'Partly Cloudy', humidity: 78, wind_speed: 15, feels_like: 33, pressure: 1011 },
            { city: 'Nagpur', temperature: 35, condition: 'Clear', humidity: 55, wind_speed: 10, feels_like: 37, pressure: 1014 }
        ]);
        
        // Mandi data insert karo
        await Mandi.insertMany([
            { commodity: 'Wheat', market: 'Lasalgaon', district: 'Nashik', min_price: 2150, max_price: 2350, modal_price: 2250 },
            { commodity: 'Rice', market: 'Nagpur', district: 'Nagpur', min_price: 1850, max_price: 2100, modal_price: 1975 },
            { commodity: 'Cotton', market: 'Akola', district: 'Akola', min_price: 6050, max_price: 6350, modal_price: 6200 }
        ]);
        
        // Disease data insert karo
        await Disease.insertMany([
            {
                name: 'Wheat Rust',
                name_hi: 'गेहूं रस्ट',
                name_mr: 'गव्हाचा गंज',
                crop: 'Wheat',
                symptoms: 'Orange-brown pustules on leaves',
                treatment: 'Propiconazole fungicide',
                prevention: 'Use resistant varieties',
                severity: 'Medium'
            },
            {
                name: 'Rice Blast',
                name_hi: 'चावल ब्लास्ट',
                name_mr: 'तांदळाचा ब्लास्ट',
                crop: 'Rice',
                symptoms: 'Diamond-shaped lesions on leaves',
                treatment: 'Tricyclazole fungicide',
                prevention: 'Avoid excess nitrogen',
                severity: 'High'
            }
        ]);
        
        res.json({ success: true, message: '✅ Seed data inserted successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Server start karo
// Server start
const PORT = process.env.PORT || 10000; 
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});