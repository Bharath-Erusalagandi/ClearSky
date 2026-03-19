# ClearSky - Respiratory Health Dashboard

ClearSky is an AI-powered respiratory health monitoring dashboard designed to help individuals with asthma and allergies stay informed about their environment. By integrating real-time air quality, pollen data, and weather insights, ClearSky empowers users to make healthier decisions for safer living.

## 🚀 Features

- **Real-time Air Quality Monitoring**: Detailed insights into AQI, PM2.5, PM10, O3, NO2, SO2, and CO levels.
- **Pollen Tracking**: Current and forecasted pollen counts for grass, trees, and weeds.
- **Weather Insights**: Accurate weather data including temperature, humidity, wind speed, and UV index.
- **Personalized Health Tips**: AI-driven recommendations based on current environmental conditions.
- **Interactive Map**: Visualize environmental data geographically (Pollen Map).
- **Modern UI/UX**: A premium, responsive interface with smooth animations and dark mode support.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Animations**: [Shaders](https://github.com/v0-internal/shaders), [Framer Motion](https://www.framer.com/motion/)
- **Mapping**: [Leaflet](https://leafletjs.com/)
- **Data Fetching**: Server-side API routes with integration to Ambee and OpenWeatherMap APIs.

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- `npm`, `yarn`, or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mach.git
   cd mach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   AMBEE_API_KEY=your_ambee_api_key
   NEXT_PUBLIC_AMBEE_API_KEY=your_ambee_api_key
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎥 Demo

Check out the video explaining how the application works: [Vimeo Link](https://vimeo.com/1132353069?share=copy&fl=sv&fe=ci)
