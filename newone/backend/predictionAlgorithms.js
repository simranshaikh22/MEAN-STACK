// predictionAlgorithms.js
class MandiPredictor {
    // Simple Moving Average
    calculateSMA(prices) {
        if (!prices || prices.length === 0) return 0;
        const sum = prices.reduce((a, b) => a + b, 0);
        return sum / prices.length;
    }
    
    // Weighted Moving Average (recent prices have more weight)
    calculateWMA(prices) {
        if (!prices || prices.length === 0) return 0;
        let weightedSum = 0, weightSum = 0;
        for (let i = 0; i < prices.length; i++) {
            const weight = prices.length - i; // More weight to recent prices
            weightedSum += prices[i] * weight;
            weightSum += weight;
        }
        return weightedSum / weightSum;
    }
    
    // Main prediction function
    predictPrice(crop, currentPrice, historical, weather) {
        // If no historical data, return current price
        if (!historical || historical.length === 0) {
            return {
                price: currentPrice,
                change: 0,
                confidence: "65%",
                reason: "insufficient historical data"
            };
        }
        
        // Calculate SMA and WMA
        const sma = this.calculateSMA(historical);
        const wma = this.calculateWMA(historical);
        
        // Combine predictions (weighted average)
        // WMA gets more weight because recent prices matter more
        const predicted = (wma * 0.6) + (sma * 0.4);
        
        // Apply weather impact
        let weatherMultiplier = 1.0;
        let reason = "normal market conditions";
        
        if (weather.temp > 37) {
            weatherMultiplier = 1.042; // +4.2% for heat wave
            reason = "heat wave stress on crops";
        } else if (weather.temp > 35) {
            weatherMultiplier = 1.025; // +2.5% for high temperature
            reason = "high temperature affecting yield";
        }
        
        const finalPredicted = predicted * weatherMultiplier;
        
        // Calculate percentage change
        const change = ((finalPredicted - currentPrice) / currentPrice * 100).toFixed(2);
        
        // Calculate confidence based on data points
        const confidence = Math.min(95, 70 + (historical.length * 2));
        
        return {
            price: Math.round(finalPredicted),
            change: parseFloat(change),
            confidence: confidence + "%",
            reason: reason
        };
    }
    
    // Generate 3-day forecast
    get3DayForecast(currentPrice, prediction) {
        const forecast = [];
        let price = prediction.price;
        
        // Day 1: Use predicted price
        forecast.push(prediction.price);
        
        // Day 2 and 3: Continue trend with diminishing effect
        for (let i = 2; i <= 3; i++) {
            const dailyChange = prediction.change / i; // Diminishing effect
            price = price * (1 + dailyChange / 100);
            forecast.push(Math.round(price));
        }
        
        return forecast;
    }
    
    // Get trend based on percentage change
    getTrend(change) {
        if (change > 3) {
            return { icon: "📈", text: "STRONG UP" };
        } else if (change > 1) {
            return { icon: "↗️", text: "UP" };
        } else if (change < -3) {
            return { icon: "📉", text: "STRONG DOWN" };
        } else if (change < -1) {
            return { icon: "↘️", text: "DOWN" };
        } else {
            return { icon: "➡️", text: "STABLE" };
        }
    }
    
    // Get farmer recommendations
    getRecommendation(crop, change, weather) {
        const recommendations = [];
        
        // Price trend advice
        if (change > 2) {
            recommendations.push("Wait 2-3 days (prices rising)");
        } else if (change < -2) {
            recommendations.push("Sell now (prices falling)");
        } else {
            recommendations.push("Monitor daily (stable prices)");
        }
        
        // Market advice
        recommendations.push("Best market: Check local APMC");
        
        // Weather alerts
        if (weather.temp > 37) {
            recommendations.push("Alert: Heat wave may damage quality!");
        }
        
        return recommendations;
    }
}

module.exports = MandiPredictor;