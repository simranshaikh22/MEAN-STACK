console.log('🌱 Starting database seeding...');

require('dotenv').config();

try {
    const mongoose = require('mongoose');
    
    // Connect to MongoDB Atlas
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('✅ Connected to MongoDB Atlas');

            // Define schemas
            const Weather = mongoose.model('Weather', new mongoose.Schema({
                city: String,
                temperature: Number,
                condition: String,
                humidity: Number,
                wind_speed: Number,
                feels_like: Number,
                pressure: Number,
                sunrise: String,
                sunset: String,
                icon: String,
                description: String
            }));
            
            const MandiRate = mongoose.model('MandiRate', new mongoose.Schema({
                commodity: String,
                market: String,
                district: String,
                min_price: Number,
                max_price: Number,
                modal_price: Number,
                state: String
            }));
            
            // ADD DISEASE SCHEMA
            const Disease = mongoose.model('Disease', new mongoose.Schema({
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
            }));
            
            async function seed() {
                try {
                    // Clear old data
                    await Weather.deleteMany({});
                    await MandiRate.deleteMany({});
                    await Disease.deleteMany({}); // ADD THIS LINE
                    console.log('✅ Cleared old data');
                    
                    // Add weather data
                    await Weather.create([
                        {
                            city: 'Pune',
                            temperature: 28,
                            condition: 'Sunny',
                            humidity: 55,
                            wind_speed: 3.5,
                            feels_like: 29,
                            pressure: 1013,
                            sunrise: '6:30 AM',
                            sunset: '6:45 PM',
                            icon: 'https://openweathermap.org/img/wn/01d@2x.png',
                            description: 'Clear sky'
                        },
                        {
                            city: 'Mumbai',
                            temperature: 32,
                            condition: 'Partly Cloudy',
                            humidity: 65,
                            wind_speed: 4.2,
                            feels_like: 34,
                            pressure: 1012,
                            sunrise: '6:45 AM',
                            sunset: '6:30 PM',
                            icon: 'https://openweathermap.org/img/wn/02d@2x.png',
                            description: 'Partly cloudy'
                        }
                    ]);
                    console.log('✅ Added weather data');
                    
                    // Add mandi rates
                    await MandiRate.create([
                        {
                            commodity: 'Wheat',
                            market: 'Mumbai APMC',
                            district: 'Mumbai',
                            min_price: 2200,
                            max_price: 2400,
                            modal_price: 2300,
                            state: 'Maharashtra'
                        },
                        {
                            commodity: 'Rice',
                            market: 'Pune APMC',
                            district: 'Pune',
                            min_price: 2800,
                            max_price: 3200,
                            modal_price: 3000,
                            state: 'Maharashtra'
                        },
                        {
                            commodity: 'Cotton',
                            market: 'Nagpur APMC',
                            district: 'Nagpur',
                            min_price: 6500,
                            max_price: 7200,
                            modal_price: 6800,
                            state: 'Maharashtra'
                        }
                    ]);
                    console.log('✅ Added mandi rates');
                    
                    // ========== ADD DISEASES DATA ==========
                    await Disease.create([
                        {
                            name: "Wheat Rust",
                            name_hi: "गेहूं रस्ट",
                            name_mr: "गव्हाचा गंज",
                            crop: "Wheat",
                            symptoms: "Orange-yellow pustules on leaves and stems.",
                            symptoms_hi: "पत्तों और तनों पर नारंगी-पीले फुंसी।",
                            symptoms_mr: "पाने आणि देठांवर नारिंगी-पिवळे फोड.",
                            treatment: "Spray Propiconazole 1ml/litre.",
                            treatment_hi: "प्रोपिकोनाज़ोल 1ml/लीटर छिड़काव करें।",
                            treatment_mr: "प्रोपिकोनाजोल 1ml/लीटर फवारा करा.",
                            prevention: "Use resistant varieties, crop rotation.",
                            image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
                            severity: "High"
                        },
                        {
                            name: "Rice Blast",
                            name_hi: "धान का झुलसा रोग",
                            name_mr: "तांदळाचा ब्लास्ट रोग",
                            crop: "Rice",
                            symptoms: "Diamond-shaped lesions on leaves, nodes turn black.",
                            symptoms_hi: "पत्तों पर हीरे के आकार के घाव, गाँठें काली पड़ जाती हैं।",
                            symptoms_mr: "पानांवर हिर्याच्या आकाराचे घाव, गाठी काळ्या पडतात.",
                            treatment: "Spray Tricyclazole 1g/litre.",
                            treatment_hi: "ट्राइसाइक्लाज़ोल 1g/लीटर छिड़काव करें।",
                            treatment_mr: "ट्रायसायक्लाजोल 1g/लीटर फवारा करा.",
                            prevention: "Avoid excess nitrogen, use certified seeds.",
                            image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
                            severity: "Medium"
                        },
                        {
                            name: "Cotton Leaf Curl",
                            name_hi: "कपास लीफ कर्ल",
                            name_mr: "कापूस लीफ कर्ल",
                            crop: "Cotton",
                            symptoms: "Leaves curl upward, plants stunted.",
                            symptoms_hi: "पत्ते ऊपर की ओर मुड़ते हैं, पौधों की वृद्धि रुक जाती है।",
                            symptoms_mr: "पाने वर वळतात, वनस्पतींची वाढ थांबते.",
                            treatment: "Remove infected plants, control whiteflies.",
                            treatment_hi: "संक्रमित पौधे हटाएं, व्हाइटफ्लाई नियंत्रित करें।",
                            treatment_mr: "संसर्गित रोपे काढा, व्हाइटफ्लाय नियंत्रित करा.",
                            prevention: "Use resistant varieties, early planting.",
                            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop",
                            severity: "High"
                        }
                    ]);
                    console.log('✅ Added diseases data with images');
                    
                    console.log('\n🎉 Database seeded successfully!');
                    console.log('📊 Summary:');
                    console.log('   • 2 weather records');
                    console.log('   • 3 mandi rates');
                    console.log('   • 3 diseases with images');
                    
                    mongoose.connection.close();
                    
                } catch (err) {
                    console.error('❌ Error during seeding:', err.message);
                }
            }
            
            seed();
            
        })
        .catch(err => {
            console.error('❌ MongoDB connection failed:', err.message);
            console.log('💡 Make sure MongoDB is running:');
            console.log('   1. Open Command Prompt as Administrator');
            console.log('   2. Run: mongod');
            console.log('   3. Keep that window open');
        });
        
} catch (err) {
    console.error('❌ Module error:', err.message);
    console.log('💡 Install modules: npm install mongoose express cors dotenv');
}