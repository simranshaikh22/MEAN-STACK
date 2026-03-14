// ========== CONFIGURATION ==========
// ========== CONFIGURATION ==========
const API_BASE_URL = 'http://localhost:3000/api';
// Make sure this matches your backend port
let currentLanguage = 'en';

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        // Navigation
        "weather": "Weather",
        "weather_desc": "Real-time weather updates",
        "mandi": "Mandi Rates",
        "mandi_desc": "Live market prices",
        "calculator": "Calculator",
        "calc_desc": "Calculate crop yield",
        "diseases": "Diseases",
        "disease_desc": "Plant diseases & treatment",
        
        // Weather
        "weather_forecast": "Live Weather Forecast",
        "select_city": "Select City",
        "city_placeholder": "Enter city name...",
        "get_weather": "Get Weather",
        "weather_info": "Weather Information",
        "select_city_prompt": "Select a city to view live weather",
        "temperature": "Temperature",
        "humidity": "Humidity",
        "wind_speed": "Wind Speed",
        "condition": "Condition",
        "feels_like": "Feels Like",
        "pressure": "Pressure",
        "sunrise": "Sunrise",
        "sunset": "Sunset",
        
        // Mandi
        "live_mandi": "Live Mandi Rates - Maharashtra",
        "commodity": "Commodity",
        "market": "Market",
        "district": "District",
        "min_price": "Min Price",
        "max_price": "Max Price",
        "modal_price": "Avg Price",
        "refresh_rates": "Refresh Rates",
        "loading_rates": "Loading live rates...",
        
        // Calculator
        "yield_calc": "Crop Yield Calculator",
        "select_crop": "Select Crop",
        "enter_area": "Enter Area",
        "select_unit": "Select Unit",
        "acre": "Acre",
        "hectare": "Hectare",
        "calculate": "Calculate Yield",
        "result": "Result",
        "enter_details": "Enter details to calculate",
        "estimated_yield": "Estimated Yield",
        "yield_per_acre": "Yield per Acre",
        "total_area": "Total Area",
        
        // Diseases
        "plant_diseases": "Plant Diseases & Treatment",
        "symptoms": "Symptoms",
        "treatment": "Treatment",
        "prevention": "Prevention",
        
        // Crops
        "crop_guide": "Crop Guide",
        "wheat": "Wheat",
        "rice": "Rice",
        "cotton": "Cotton",
        "sugarcane": "Sugarcane",
        
        // Soil Tips
        "soil_tips": "Soil Tips",
        "black_soil": "Black Soil Care",
        "black_soil_tip": "Best for cotton, requires good drainage, add organic compost regularly.",
        "red_soil": "Red Soil Improvement",
        "red_soil_tip": "Add lime to reduce acidity, use green manure, suitable for pulses.",
        
        // Footer
        "footer_title": "Krishi Sahay - Farmer First",
        "footer_sub": "No Reading Required | Everything Selectable | Made for Indian Farmers",
        "footer_contact": "Toll Free: 1800-XXX-XXXX | Email: help@krishisahay.gov.in",
        "api_status": "Live MongoDB: Weather ☀️ | Mandi Rates 📊 | Diseases 🌱"
    },
    hi: {
        // Navigation
        "weather": "मौसम",
        "weather_desc": "रियल-टाइम मौसम अपडेट",
        "mandi": "मंडी भाव",
        "mandi_desc": "लाइव बाजार भाव",
        "calculator": "कैलकुलेटर",
        "calc_desc": "फसल उत्पादन गणना",
        "diseases": "रोग",
        "disease_desc": "पौधों के रोग और उपचार",
        
        // Weather
        "weather_forecast": "लाइव मौसम पूर्वानुमान",
        "select_city": "शहर चुनें",
        "city_placeholder": "शहर का नाम दर्ज करें...",
        "get_weather": "मौसम जानकारी प्राप्त करें",
        "weather_info": "मौसम जानकारी",
        "select_city_prompt": "लाइव मौसम देखने के लिए शहर चुनें",
        "temperature": "तापमान",
        "humidity": "आर्द्रता",
        "wind_speed": "हवा की गति",
        "condition": "स्थिति",
        "feels_like": "अनुभव",
        "pressure": "दबाव",
        "sunrise": "सूर्योदय",
        "sunset": "सूर्यास्त",
        
        // Mandi
        "live_mandi": "लाइव मंडी भाव - महाराष्ट्र",
        "commodity": "वस्तु",
        "market": "बाजार",
        "district": "जिला",
        "min_price": "न्यूनतम मूल्य",
        "max_price": "अधिकतम मूल्य",
        "modal_price": "औसत मूल्य",
        "refresh_rates": "भाव रिफ्रेश करें",
        "loading_rates": "लाइव भाव लोड हो रहे हैं...",
        
        // Calculator
        "yield_calc": "फसल उत्पादन कैलकुलेटर",
        "select_crop": "फसल चुनें",
        "enter_area": "क्षेत्र दर्ज करें",
        "select_unit": "इकाई चुनें",
        "acre": "एकड़",
        "hectare": "हेक्टेयर",
        "calculate": "उपज गणना करें",
        "result": "परिणाम",
        "enter_details": "गणना के लिए विवरण दर्ज करें",
        "estimated_yield": "अनुमानित उपज",
        "yield_per_acre": "प्रति एकड़ उपज",
        "total_area": "कुल क्षेत्रफल",
        
        // Diseases
        "plant_diseases": "पौधों के रोग और उपचार",
        "symptoms": "लक्षण",
        "treatment": "उपचार",
        "prevention": "रोकथाम",
        
        // Crops
        "crop_guide": "फसल मार्गदर्शिका",
        "wheat": "गेहूं",
        "rice": "चावल",
        "cotton": "कपास",
        "sugarcane": "गन्ना",
        
        // Soil Tips
        "soil_tips": "मिट्टी के सुझाव",
        "black_soil": "काली मिट्टी की देखभाल",
        "black_soil_tip": "कपास के लिए सर्वोत्तम, अच्छे जल निकासी की आवश्यकता, नियमित रूप से जैविक खाद डालें।",
        "red_soil": "लाल मिट्टी सुधार",
        "red_soil_tip": "अम्लीयता कम करने के लिए चूना डालें, हरी खाद का प्रयोग करें, दालों के लिए उपयुक्त।",
        
        // Footer
        "footer_title": "कृषि सहाय - किसान प्रथम",
        "footer_sub": "पढ़ने की आवश्यकता नहीं | सब कुछ चयन योग्य | भारतीय किसानों के लिए बनाया गया",
        "footer_contact": "टोल फ्री: 1800-XXX-XXXX | ईमेल: help@krishisahay.gov.in",
        "api_status": "लाइव MongoDB: मौसम ☀️ | मंडी भाव 📊 | रोग 🌱"
    },
    mr: {
        // Navigation
        "weather": "हवामान",
        "weather_desc": "रिअल-टाइम हवामान अपडेट",
        "mandi": "मंडी दर",
        "mandi_desc": "लाइव बाजार भाव",
        "calculator": "कॅल्क्युलेटर",
        "calc_desc": "पीक उत्पादन मोजा",
        "diseases": "रोग",
        "disease_desc": "वनस्पतींचे रोग आणि उपचार",
        
        // Weather
        "weather_forecast": "लाइव हवामान अंदाज",
        "select_city": "शहर निवडा",
        "city_placeholder": "शहराचे नाम प्रविष्ट करा...",
        "get_weather": "हवामान माहिती मिळवा",
        "weather_info": "हवामान माहिती",
        "select_city_prompt": "लाइव हवामान पाहण्यासाठी शहर निवडा",
        "temperature": "तापमान",
        "humidity": "आर्द्रता",
        "wind_speed": "वारा गती",
        "condition": "स्थिती",
        "feels_like": "जाणवते",
        "pressure": "दबाव",
        "sunrise": "सूर्योदय",
        "sunset": "सूर्यास्त",
        
        // Mandi
        "live_mandi": "लाइव मंडी दर - महाराष्ट्र",
        "commodity": "माल",
        "market": "बाजार",
        "district": "जिल्हा",
        "min_price": "किमान किंमत",
        "max_price": "कमाल किंमत",
        "modal_price": "सरासरी किंमत",
        "refresh_rates": "दर रीफ्रेश करा",
        "loading_rates": "लाइव दर लोड होत आहेत...",
        
        // Calculator
        "yield_calc": "पीक उत्पादन कॅल्क्युलेटर",
        "select_crop": "पीक निवडा",
        "enter_area": "क्षेत्र प्रविष्ट करा",
        "select_unit": "युनिट निवडा",
        "acre": "एकर",
        "hectare": "हेक्टर",
        "calculate": "उत्पादन मोजा",
        "result": "निकाल",
        "enter_details": "मोजणीसाठी तपशील प्रविष्ट करा",
        "estimated_yield": "अंदाजे उत्पादन",
        "yield_per_acre": "प्रति एकर उत्पादन",
        "total_area": "एकूण क्षेत्रफळ",
        
        // Diseases
        "plant_diseases": "वनस्पती रोग आणि उपचार",
        "symptoms": "लक्षणे",
        "treatment": "उपचार",
        "prevention": "प्रतिबंध",
        
        // Crops
        "crop_guide": "पीक मार्गदर्शिका",
        "wheat": "गहू",
        "rice": "तांदूळ",
        "cotton": "कापूस",
        "sugarcane": "ऊस",
        
        // Soil Tips
        "soil_tips": "मातीचे सल्ले",
        "black_soil": "काळी माती काळजी",
        "black_soil_tip": "कापसासाठी सर्वोत्तम, चांगल्या ड्रेनेजची आवश्यकता, नियमितपणे जैविक कंपोस्ट घाला.",
        "red_soil": "लाल माती सुधारणा",
        "red_soil_tip": "आम्लता कमी करण्यासाठी चुना घाला, हिरव्या खताचा वापर करा, डाळींसाठी योग्य.",
        
        // Footer
        "footer_title": "कृषी सहाय - शेतकरी प्रथम",
        "footer_sub": "वाचण्याची गरज नाही | सर्व काही निवडण्यायोग्य | भारतीय शेतकऱ्यांसाठी बनवले",
        "footer_contact": "टोल फ्री: 1800-XXX-XXXX | ईमेल: help@krishisahay.gov.in",
        "api_status": "लाइव MongoDB: हवामान ☀️ | मंडी दर 📊 | रोग 🌱"
    }
};

// ========== WEATHER FROM MONGODB ==========
async function getLiveWeather(city) {
    if (!city) {
        alert(currentLanguage === 'en' ? 'Please enter city name' :
              currentLanguage === 'hi' ? 'कृपया शहर का नाम दर्ज करें' :
              'कृपया शहराचे नाम प्रविष्ट करा');
        return;
    }
    
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <div class="text-center py-4">
            <div class="loading mx-auto"></div>
            <p class="mt-2">${translations[currentLanguage].get_weather || 'Getting weather...'}</p>
        </div>
    `;
    
    try {
        const response = await fetch(`${API_BASE_URL}/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();
        
        if (data.success) {
            weatherResult.innerHTML = `
                <h4>${data.city}</h4>
                <div class="display-1 fw-bold">${data.temperature}°C</div>
                <h5>${data.condition}</h5>
                ${data.icon ? `<img src="${data.icon}" alt="Weather icon" class="my-2" style="width: 80px; height: 80px;">` : ''}
                
                <div class="row mt-4">
                    <div class="col-6">
                        <p><i class="fas fa-thermometer-half"></i> ${translations[currentLanguage].feels_like || 'Feels Like'}: ${data.feels_like}°C</p>
                        <p><i class="fas fa-tint"></i> ${translations[currentLanguage].humidity || 'Humidity'}: ${data.humidity}%</p>
                        <p><i class="fas fa-wind"></i> ${translations[currentLanguage].wind_speed || 'Wind Speed'}: ${data.wind_speed} m/s</p>
                    </div>
                    <div class="col-6">
                        <p><i class="fas fa-compress-alt"></i> ${translations[currentLanguage].pressure || 'Pressure'}: ${data.pressure} hPa</p>
                        <p><i class="fas fa-sun"></i> ${translations[currentLanguage].sunrise || 'Sunrise'}: ${data.sunrise}</p>
                        <p><i class="fas fa-moon"></i> ${translations[currentLanguage].sunset || 'Sunset'}: ${data.sunset}</p>
                    </div>
                </div>
                
                <div class="mt-3 text-center">
                    <small class="text-light opacity-75">
                        <i class="fas fa-database"></i> Data from MongoDB
                        | ${new Date(data.timestamp || Date.now()).toLocaleTimeString()}
                    </small>
                </div>
            `;
        } else {
            throw new Error(data.error || 'Weather data not available');
        }
    } catch (error) {
        console.error('Weather Error:', error);
        weatherResult.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-exclamation-triangle fa-2x text-warning"></i>
                <h5 class="mt-2">Weather Error</h5>
                <p>${error.message}</p>
                <button class="btn btn-light btn-sm" onclick="getLiveWeather('${city}')">
                    <i class="fas fa-redo"></i> Retry
                </button>
            </div>
        `;
    }
}

// ========== MANDI RATES FROM MONGODB ==========
async function loadMandiRates() {
    const tableBody = document.getElementById('mandi-table');
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="text-center py-4">
                <div class="loading mx-auto"></div>
                <p class="mt-2">${translations[currentLanguage].loading_rates || 'Loading live rates...'}</p>
            </td>
        </tr>
    `;
    
    try {
        const response = await fetch(`${API_BASE_URL}/mandi-rates`);
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
            let tableHTML = '';
            data.data.forEach((rate, index) => {
                tableHTML += `
                    <tr>
                        <td>${rate.commodity}</td>
                        <td>${rate.market}</td>
                        <td>${rate.district}</td>
                        <td>₹${rate.min_price}</td>
                        <td>₹${rate.max_price}</td>
                        <td class="fw-bold">₹${rate.modal_price}</td>
                    </tr>
                `;
            });
            
            tableBody.innerHTML = tableHTML;
            
            // Update footer
            const footer = document.querySelector('.mandi-card');
            const existingSource = footer.querySelector('.api-source');
            if (existingSource) existingSource.remove();
            
            const sourceDiv = document.createElement('div');
            sourceDiv.className = 'api-source text-center mt-3';
            sourceDiv.innerHTML = `
                <small class="text-light opacity-75">
                    <i class="fas fa-database"></i> Source: MongoDB Database
                    | ${data.count || data.data.length} records
                    | ${new Date().toLocaleTimeString()}
                </small>
            `;
            footer.appendChild(sourceDiv);
        } else {
            throw new Error('No data received');
        }
    } catch (error) {
        console.error('Mandi Rates Error:', error);
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-4">
                    <i class="fas fa-exclamation-triangle fa-2x text-warning"></i>
                    <h5 class="mt-2">Mandi API Error</h5>
                    <p>${error.message}</p>
                    <button class="btn btn-light btn-sm" onclick="loadMandiRates()">
                        <i class="fas fa-redo"></i> Retry
                    </button>
                </td>
            </tr>
        `;
    }
}

// ========== YIELD CALCULATOR ==========
async function calculateYield() {
    const crop = document.getElementById('crop-select').value;
    const area = parseFloat(document.getElementById('area-input').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    
    if (!area || area <= 0) {
        alert(currentLanguage === 'en' ? 'Please enter valid area' :
              currentLanguage === 'hi' ? 'कृपया वैध क्षेत्र दर्ज करें' :
              'कृपया वैध क्षेत्र प्रविष्ट करा');
        return;
    }
    
    const resultDiv = document.getElementById('result-content');
    resultDiv.innerHTML = `
        <div class="text-center py-3">
            <div class="loading mx-auto"></div>
            <p>${translations[currentLanguage].calculate || 'Calculating...'}</p>
        </div>
    `;
    
    try {
        const response = await fetch(`${API_BASE_URL}/calculate-yield`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ area, crop, unit })
        });
        
        const data = await response.json();
        
        if (data.success) {
            const cropNames = {
                'wheat': currentLanguage === 'en' ? 'Wheat' : currentLanguage === 'hi' ? 'गेहूं' : 'गहू',
                'rice': currentLanguage === 'en' ? 'Rice' : currentLanguage === 'hi' ? 'चावल' : 'तांदूळ',
                'cotton': currentLanguage === 'en' ? 'Cotton' : currentLanguage === 'hi' ? 'कपास' : 'कापूस',
                'sugarcane': currentLanguage === 'en' ? 'Sugarcane' : currentLanguage === 'hi' ? 'गन्ना' : 'ऊस',
                'soybean': currentLanguage === 'en' ? 'Soybean' : currentLanguage === 'hi' ? 'सोयाबीन' : 'सोयाबीन',
                'maize': currentLanguage === 'en' ? 'Maize' : currentLanguage === 'hi' ? 'मक्का' : 'मका'
            };
            
            resultDiv.innerHTML = `
                <div class="alert alert-success">
                    <h5><i class="fas fa-check-circle"></i> ${translations[currentLanguage].estimated_yield || 'Estimated Yield'}</h5>
                    <hr>
                    <p><strong>${translations[currentLanguage].select_crop || 'Crop'}:</strong> ${cropNames[crop] || crop}</p>
                    <p><strong>${translations[currentLanguage].total_area || 'Total Area'}:</strong> ${data.area} ${unit === 'acre' ? translations[currentLanguage].acre : translations[currentLanguage].hectare}</p>
                    <p><strong>${translations[currentLanguage].yield_per_acre || 'Yield per Acre'}:</strong> ${data.yield_per_acre} ${data.yield_unit}</p>
                    <hr>
                    <h4 class="text-success">${translations[currentLanguage].estimated_yield || 'Estimated Yield'}: ${data.total_yield} ${data.yield_unit}</h4>
                    <small class="text-muted">${translations[currentLanguage].total_area || 'Area'} in acres: ${data.area_in_acres}</small>
                </div>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>Error:</strong> ${error.message}
            </div>
        `;
    }
}

// ========== DISEASES FROM MONGODB ==========

async function loadDiseases() {
    try {
        const container = document.getElementById('diseases-container');
        container.innerHTML = '<div class="col-12 text-center"><div class="loading"></div><p>Loading diseases...</p></div>';
        
        const response = await fetch(`${API_BASE_URL}/diseases`);
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
            container.innerHTML = '';
            
            data.data.forEach(disease => {
                let name = disease.name;
                let symptoms = disease.symptoms;
                let treatment = disease.treatment;
                let prevention = disease.prevention || "Use certified seeds, proper crop rotation";
                
                // Apply translations
                if (currentLanguage === 'hi') {
                    name = disease.name_hi || name;
                    symptoms = disease.symptoms_hi || symptoms;
                    treatment = disease.treatment_hi || treatment;
                } else if (currentLanguage === 'mr') {
                    name = disease.name_mr || name;
                    symptoms = disease.symptoms_mr || symptoms;
                    treatment = disease.treatment_mr || treatment;
                }
                
                // Create disease card WITH IMAGE
                const diseaseCard = `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="disease-card card h-100 shadow-sm border-0">
                            <!-- Disease Image -->
                            <div class="position-relative">
                                <img src="${disease.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=250&fit=crop'}" 
                                     class="card-img-top" 
                                     alt="${name}"
                                     style="height: 200px; object-fit: cover; border-radius: 10px 10px 0 0;">
                                <span class="position-absolute top-0 end-0 m-2 badge ${disease.severity === 'High' ? 'bg-danger' : disease.severity === 'Medium' ? 'bg-warning' : 'bg-success'}">
                                    ${disease.severity || 'Medium'} Severity
                                </span>
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title text-success">${name}</h5>
                                <p class="card-text mb-1">
                                    <strong><i class="fas fa-seedling me-1"></i> ${translations[currentLanguage].crop_guide || 'Crop'}:</strong> 
                                    ${disease.crop}
                                </p>
                                
                                <div class="mt-3">
                                    <h6 class="text-warning">
                                        <i class="fas fa-exclamation-triangle me-1"></i> 
                                        ${translations[currentLanguage].symptoms || 'Symptoms'}:
                                    </h6>
                                    <p class="text-muted small">${symptoms}</p>
                                </div>
                                
                                <div class="mt-2">
                                    <h6 class="text-primary">
                                        <i class="fas fa-medkit me-1"></i> 
                                        ${translations[currentLanguage].treatment || 'Treatment'}:
                                    </h6>
                                    <p class="text-muted small">${treatment}</p>
                                </div>
                                
                                <div class="mt-2">
                                    <h6 class="text-info">
                                        <i class="fas fa-shield-alt me-1"></i> 
                                        ${translations[currentLanguage].prevention || 'Prevention'}:
                                    </h6>
                                    <p class="text-muted small">${prevention}</p>
                                </div>
                            </div>
                            
                            <div class="card-footer bg-transparent border-top-0">
                                <small class="text-muted">
                                    <i class="fas fa-database"></i> Data from MongoDB
                                </small>
                            </div>
                        </div>
                    </div>
                `;
                
                container.innerHTML += diseaseCard;
            });
        } else {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-leaf fa-3x text-muted mb-3"></i>
                    <h4>No Diseases Data Found</h4>
                    <p>Try seeding the database again</p>
                    <button class="btn btn-outline-success" onclick="loadDiseases()">
                        <i class="fas fa-redo"></i> Reload
                    </button>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading diseases:', error);
        document.getElementById('diseases-container').innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                <h4>Error Loading Diseases</h4>
                <p>${error.message}</p>
                <button class="btn btn-outline-danger" onclick="loadDiseases()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
    }
}
function loadMockDiseases() {
    const mockDiseases = [
        {
            name: "Wheat Rust",
            name_hi: "गेहूं रस्ट",
            name_mr: "गव्हाचा गंज",
            crop: "Wheat",
            symptoms: "Orange-yellow pustules on leaves, stems reduce yield",
            symptoms_hi: "पत्तों पर नारंगी-पीले पुस्ट्यूल, तने उपज कम करते हैं",
            symptoms_mr: "पानांवर नारिंगी-पिवळे पुस्ट्यूल, देठ उत्पादन कमी करतात",
            treatment: "Use resistant varieties, spray fungicides like Propiconazole",
            treatment_hi: "प्रतिरोधी किस्में उपयोग करें, प्रोपिकोनाज़ोल जैसे फंगीसाइड्स स्प्रे करें",
            treatment_mr: "प्रतिरोधक प्रजाती वापरा, प्रोपिकोनाजोल सारख्या फंगीसाइड्स स्प्रे करा",
            prevention: "Crop rotation, field sanitation"
            
        },
        {
            name: "Rice Blast",
            name_hi: "चावल ब्लास्ट",
            name_mr: "तांदळाचा ब्लास्ट",
            crop: "Rice",
            symptoms: "Diamond-shaped lesions on leaves, nodes cause panicle breakage",
            symptoms_hi: "पत्तों पर हीरे के आकार के घाव, नोड्स पैनिकल तोड़ने का कारण बनते हैं",
            symptoms_mr: "पानांवर हिर्याच्या आकाराचे घाव, नोड्स पॅनिकल तोडण्याचे कारण बनतात",
            treatment: "Apply Tricyclazole, Isoprothiolane fungicides",
            treatment_hi: "ट्राइसाइक्लाज़ोल, आइसोप्रोथियोलेन फंगीसाइड्स लगाएं",
            treatment_mr: "ट्रायसायक्लाजोल, आयसोप्रोथिओलेन फंगीसाइड्स लावा",
            prevention: "Avoid excess nitrogen, use certified seeds"
        }
    ];
    
    const container = document.getElementById('diseases-container');
    container.innerHTML = '';
    
    mockDiseases.forEach(disease => {
        let name = disease.name;
        let symptoms = disease.symptoms;
        let treatment = disease.treatment;
        
        if (currentLanguage === 'hi') {
            name = disease.name_hi || name;
            symptoms = disease.symptoms_hi || symptoms;
            treatment = disease.treatment_hi || treatment;
        } else if (currentLanguage === 'mr') {
            name = disease.name_mr || name;
            symptoms = disease.symptoms_mr || symptoms;
            treatment = disease.treatment_mr || treatment;
        }
        
        container.innerHTML += `
            <div class="col-md-6 mb-3">
                <div class="disease-card">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><strong>${translations[currentLanguage].crop_guide || 'Crop'}:</strong> ${disease.crop}</p>
                        <p class="card-text"><strong>${translations[currentLanguage].symptoms || 'Symptoms'}:</strong> ${symptoms}</p>
                        <p class="card-text"><strong>${translations[currentLanguage].treatment || 'Treatment'}:</strong> ${treatment}</p>
                        <p class="card-text"><strong>${translations[currentLanguage].prevention || 'Prevention'}:</strong> ${disease.prevention}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// ========== LANGUAGE MANAGEMENT ==========
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all text with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Refresh data with new language
    if (document.getElementById('mandi-section').style.display !== 'none') {
        loadMandiRates();
    }
    if (document.getElementById('diseases-section').style.display !== 'none') {
        loadDiseases();
    }
}

// ========== SECTION MANAGEMENT ==========
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(sectionId + '-section').style.display = 'block';
    
    // Load data for section
    if (sectionId === 'weather') {
        if (!document.getElementById('weather-result').querySelector('.display-1')) {
            getLiveWeather('Pune');
        }
    } else if (sectionId === 'mandi') {
        loadMandiRates();
    } else if (sectionId === 'diseases') {
        loadDiseases();
    }
    
    // Scroll to section
    document.getElementById(sectionId + '-section').scrollIntoView({ behavior: 'smooth' });
}

// ========== CROP INFO ==========
async function showCropInfo(crop) {
    try {
        const response = await fetch(`${API_BASE_URL}/crops/${crop}`);
        const data = await response.json();
        
        if (data.success) {
            const cropData = data.data;
            let description = cropData.description;
            
            if (currentLanguage === 'hi' && cropData.description_hi) {
                description = cropData.description_hi;
            } else if (currentLanguage === 'mr' && cropData.description_mr) {
                description = cropData.description_mr;
            }
            
            alert(`
🌾 ${cropData.name} Farming Guide

• Soil: ${cropData.soil_type}
• Season: ${cropData.season}
• Water: ${cropData.water_requirements}
• Fertilizer: ${cropData.fertilizer}
• Yield: ${cropData.yield_per_acre} per acre
• Duration: ${cropData.duration}

${description}
            `);
        } else {
            throw new Error('Crop data not found');
        }
    } catch (error) {
        console.error('Crop Info Error:', error);
        // Fallback to local data
        showLocalCropInfo(crop);
    }
}

function showLocalCropInfo(crop) {
    const cropInfo = {
        'wheat': {
            en: '🌾 **Wheat Farming Guide**\n\n• Soil: Loamy soil with good drainage\n• Season: Rabi (Oct-Mar)\n• Water: Moderate irrigation needed\n• Fertilizer: Nitrogen-rich fertilizers\n• Yield: 18-20 quintals/acre\n• Duration: 120-140 days',
            hi: '🌾 **गेहूं की खेती मार्गदर्शिका**\n\n• मिट्टी: अच्छे जल निकासी वाली दोमट मिट्टी\n• मौसम: रबी (अक्टूबर-मार्च)\n• पानी: मध्यम सिंचाई की आवश्यकता\n• उर्वरक: नाइट्रोजन युक्त उर्वरक\n• उपज: 18-20 क्विंटल/एकड़\n• अवधि: 120-140 दिन',
            mr: '🌾 **गव्हाची शेती मार्गदर्शिका**\n\n• माती: चांगल्या ड्रेनेज असलेली चिकणमाती\n• हंगाम: रब्बी (ऑक्टोबर-मार्च)\n• पाणी: मध्यम सिंचाई आवश्यक\n• खते: नायट्रोजनयुक्त खते\n• उत्पादन: 18-20 क्विंटल/एकर\n• कालावधी: 120-140 दिवस'
        },
        'rice': {
            en: '🌾 **Rice Farming Guide**\n\n• Soil: Clayey soil that retains water\n• Season: Kharif (Jun-Nov)\n• Water: Requires standing water\n• Fertilizer: NPK balanced fertilizer\n• Yield: 25-30 quintals/acre\n• Duration: 150-180 days',
            hi: '🌾 **चावल की खेती मार्गदर्शिका**\n\n• मिट्टी: पानी रोकने वाली चिकनी मिट्टी\n• मौसम: खरीफ (जून-नवंबर)\n• पानी: खड़े पानी की आवश्यकता\n• उर्वरक: एनपीके संतुलित उर्वरक\n• उपज: 25-30 क्विंटल/एकड़\n• अवधि: 150-180 दिन',
            mr: '🌾 **तांदळाची शेती मार्गदर्शिका**\n\n• माती: पाणी धरून ठेवणारी चिकणमाती\n• हंगाम: खरीप (जून-नोव्हेंबर)\n• पाणी: उभ्या पाण्याची आवश्यकता\n• खते: एनपीके संतुलित खते\n• उत्पादन: 25-30 क्विंटल/एकर\n• कालावधी: 150-180 दिवस'
        }
    };
    
    const info = cropInfo[crop] || cropInfo['wheat'];
    alert(info[currentLanguage] || info.en);
}
function createSmartMandiCard(prediction) {
    // Format recommendations as bullet points
    const recommendations = prediction.recommendation.map(rec => {
        const cleanRec = rec.replace(/^•\s*/, '');
        return `• ${cleanRec}`;
    }).join('<br>');
    
    return `
        <div class="col-md-12 mb-4">
            <div class="card border-0 shadow" style="
                background: linear-gradient(135deg, #f8fff8 0%, #f0fff0 100%);
                border-left: 5px solid #28a745;
                font-family: 'Courier New', monospace;
            ">
                <div class="card-body p-4">
                    <!-- Header -->
                    <div class="mb-3" style="border-bottom: 2px solid #ddd; padding-bottom: 10px;">
                        <h4 style="color: #28a745; margin: 0;">
                            ✅ ${prediction.commodity} (${prediction.market})
                        </h4>
                    </div>
                    
                    <!-- Current Price -->
                    <div class="mb-4" style="font-size: 1.2rem;">
                        <span style="color: #007bff;">💰 Current:</span> 
                        <strong style="color: #000; font-size: 1.4rem;">₹${prediction.currentPrice}</strong>
                    </div>
                    
                    <!-- Weather Section -->
                    <div class="mb-4" style="
                        background: #e3f2fd;
                        padding: 15px;
                        border-radius: 8px;
                        border-left: 3px solid #2196f3;
                    ">
                        <h5 style="color: #1976d2; margin-top: 0; margin-bottom: 10px;">
                            ${prediction.weather.icon} ${prediction.city} WEATHER:
                        </h5>
                        <div style="line-height: 1.6; color: #333;">
                            <div>• Today: ${prediction.weather.today}</div>
                            <div>• Tomorrow: ${prediction.weather.tomorrow}</div>
                            <div style="color: #d32f2f; font-weight: bold;">
                                • Impact: ${prediction.weather.impact}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Prediction Section -->
                    <div class="mb-4" style="
                        background: #fff3e0;
                        padding: 15px;
                        border-radius: 8px;
                        border-left: 3px solid #ff9800;
                    ">
                        <h5 style="color: #e65100; margin-top: 0; margin-bottom: 10px;">
                            📊 PREDICTION:
                        </h5>
                        <div style="line-height: 1.8;">
                            <div>
                                <span style="font-size: 1.3rem;">${prediction.prediction.trendIcon}</span>
                                <strong style="color: #388e3c; margin-left: 8px;">
                                    ${prediction.prediction.trend}
                                </strong>
                            </div>
                            <div style="margin-top: 8px;">
                                <span style="color: #007bff;">📅 Tomorrow:</span>
                                <strong style="color: #000; font-size: 1.2rem; margin-left: 10px;">
                                    ₹${prediction.prediction.tomorrowPrice}
                                </strong>
                                <span style="
                                    background-color: ${prediction.prediction.changePercent > 0 ? '#4caf50' : '#f44336'};
                                    color: white;
                                    padding: 2px 8px;
                                    border-radius: 12px;
                                    font-size: 0.9rem;
                                    margin-left: 10px;
                                ">
                                    ${prediction.prediction.changePercent > 0 ? '+' : ''}${prediction.prediction.changePercent}%
                                </span>
                            </div>
                            <div style="margin-top: 8px;">
                                <span style="color: #9c27b0;">🎯 3-day:</span>
                                <strong style="color: #000; font-size: 1.1rem; margin-left: 10px;">
                                    ${prediction.prediction.forecast3Day}
                                </strong>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recommendation Section -->
                    <div style="
                        background: #e8f5e9;
                        padding: 15px;
                        border-radius: 8px;
                        border-left: 3px solid #4caf50;
                    ">
                        <h5 style="color: #2e7d32; margin-top: 0; margin-bottom: 10px;">
                            ⭐ RECOMMENDATION:
                        </h5>
                        <div style="line-height: 1.6; color: #333;">
                            ${recommendations}
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div class="mt-3 text-center" style="
                        color: #666;
                        font-size: 0.85rem;
                        border-top: 1px dashed #ddd;
                        padding-top: 10px;
                    ">
                        <span style="margin-right: 15px;">
                            <i class="fas fa-clock"></i> Updated: ${prediction.updated}
                        </span>
                        <span style="margin-right: 15px;">
                            <i class="fas fa-chart-line"></i> Confidence: ${prediction.confidence}
                        </span>
                        <span>
                            <i class="fas fa-database"></i> Data: MongoDB
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// ========== SMART MANDI FUNCTIONS ==========

function showSimpleView() {
    document.getElementById('simple-view').style.display = 'block';
    document.getElementById('smart-view').style.display = 'none';
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.btn-group .btn:first-child').classList.add('active');
}

function showSmartView() {
    document.getElementById('simple-view').style.display = 'none';
    document.getElementById('smart-view').style.display = 'block';
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.btn-group .btn:last-child').classList.add('active');
    loadSmartPredictions();
}

async function loadSmartPredictions() {
    const container = document.getElementById('smart-predictions-container');
    container.innerHTML = '<div class="text-center py-5"><div class="loading mx-auto"></div><p class="mt-2">Calculating predictions...</p></div>';
    
    try {
        const response = await fetch(API_BASE_URL + '/smart-mandi');
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
            let html = '';
            
            data.data.forEach(pred => {
                html += `
                    <div class="card mb-4 border-0 shadow-sm" style="background: rgba(255,255,255,0.9);">
                        <div class="card-body p-4">
                            <!-- Header -->
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="mb-0 text-success">
                                    <i class="fas fa-check-circle"></i> ${pred.commodity} (${pred.market})
                                </h4>
                                <span class="badge bg-primary">${pred.confidence}</span>
                            </div>
                            
                            <!-- Current Price -->
                            <div class="alert alert-light mb-3">
                                <h3 class="mb-0">💰 Current: ₹${pred.currentPrice}</h3>
                            </div>
                            
                            <!-- Weather -->
                            <div class="card mb-3 border-warning">
                                <div class="card-body">
                                    <h5 class="text-warning">${pred.weather.icon} ${pred.city} WEATHER:</h5>
                                    <p class="mb-1">• Today: ${pred.weather.today}</p>
                                    <p class="mb-1">• Tomorrow: ${pred.weather.tomorrow}</p>
                                    <p class="mb-0 text-warning"><strong>Impact:</strong> ${pred.weather.impact}</p>
                                </div>
                            </div>
                            
                            <!-- Prediction -->
                            <div class="card mb-3 border-primary">
                                <div class="card-body">
                                    <h5 class="text-primary">📊 PREDICTION:</h5>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            <h1>${pred.prediction.trendIcon}</h1>
                                            <h5>${pred.prediction.trend}</h5>
                                            <small>Using SMA/WMA</small>
                                        </div>
                                        <div class="col-md-4 text-center border-start border-end">
                                            <h4>Tomorrow</h4>
                                            <h3 class="${pred.prediction.changePercent > 0 ? 'text-success' : 'text-danger'}">
                                                ₹${pred.prediction.tomorrowPrice}
                                            </h3>
                                            <span class="badge ${pred.prediction.changePercent > 0 ? 'bg-success' : 'bg-danger'}">
                                                ${pred.prediction.changePercent > 0 ? '+' : ''}${pred.prediction.changePercent}%
                                            </span>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <h4>🎯 3-day</h4>
                                            <h5>${pred.prediction.forecast3Day}</h5>
                                            <small>Price forecast</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Recommendation -->
                            <div class="card border-success">
                                <div class="card-body">
                                    <h5 class="text-success">⭐ RECOMMENDATION:</h5>
                                    ${pred.recommendation.map(rec => `<p class="mb-1">• ${rec}</p>`).join('')}
                                </div>
                            </div>
                            
                            <!-- Footer -->
                            <div class="text-center mt-3">
                                <small class="text-muted">
                                    <i class="fas fa-clock"></i> Updated: ${pred.updated} | 
                                    <i class="fas fa-calculator"></i> ${pred.algorithm}
                                </small>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        } else {
            container.innerHTML = '<div class="alert alert-warning">No prediction data available</div>';
        }
    } catch (error) {
        console.error('Prediction error:', error);
        container.innerHTML = `<div class="alert alert-danger">Error loading predictions: ${error.message}</div>`;
    }
}
// ========== SMART MANDI VIEW FUNCTIONS ==========
function showSimpleView() {
    document.getElementById('simple-view').style.display = 'block';
    document.getElementById('smart-view').style.display = 'none';
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.btn-group .btn:first-child').classList.add('active');
}

function showSmartView() {
    document.getElementById('simple-view').style.display = 'none';
    document.getElementById('smart-view').style.display = 'block';
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.btn-group .btn:last-child').classList.add('active');
    loadSmartPredictions();
}

async function loadSmartPredictions() {
    const container = document.getElementById('smart-predictions-container');
    container.innerHTML = '<div class="text-center py-5"><div class="loading"></div><p>Loading smart predictions...</p></div>';
    
    try {
        const response = await fetch(API_BASE_URL + '/smart-mandi');
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
            container.innerHTML = '';
            
            // Add header
            container.innerHTML += `
                <div class="text-center mb-4">
                    <h4 class="text-warning">
                        <i class="fas fa-brain"></i> Smart Mandi Predictions
                    </h4>
                    <p class="text-light">Using SMA/WMA algorithms with weather data</p>
                </div>
            `;
            
            // Add each prediction card
            data.data.forEach(prediction => {
                container.innerHTML += createSmartMandiCard(prediction);
            });
            
        } else {
            container.innerHTML = `
                <div class="alert alert-warning text-center">
                    <i class="fas fa-exclamation-triangle"></i>
                    No prediction data available
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `
            <div class="alert alert-danger text-center">
                <i class="fas fa-times-circle"></i>
                Error: ${error.message}
            </div>
        `;
    }
}
// ========== INITIALIZE ==========
window.onload = function() {
    // Set default language
    changeLanguage('en');
    
    // Load initial data
    getLiveWeather('Pune');
    loadMandiRates();
    loadDiseases();
    
    // Show weather section by default
    showSection('weather');
    
    console.log('🚀 Farmer App Initialized!');
    console.log('📡 Using MongoDB Backend');
    console.log('🌐 API Base URL:', API_BASE_URL);
};