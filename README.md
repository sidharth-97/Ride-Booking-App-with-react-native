# Ride-Booking App with Expo

This project is a Ride-Booking App built with React Native and Expo. It includes features like maps integration, location services, bottom navigation, and more. The project leverages modern tools like Expo Router, TypeScript, Tailwind CSS, and Zustand for state management.


---

## Features
- Map integration using `react-native-maps`.
- Directions and route calculation with `react-native-maps-directions`.
- Bottom navigation using `@react-navigation/bottom-tabs`.
- Smooth animations with `react-native-reanimated`.
- Tailwind CSS support via `nativewind`.
- Authentication with `@clerk/clerk-expo`.
- State management with `zustand`.
- API calls using `@neondatabase/serverless`.

---


## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sidharth-97/Ride-Booking-App-with-react-native.git
   cd Ride-Booking-App-with-react-native
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file at the root of your project and add the required keys for services like Clerk, Stripe, and Neon. Example:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_api_key
   EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   DATABASE_URL=your_neon_api_key
   EXPO_PUBLIC_SERVER_URL=your_server_url
   EXPO_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key
   EXPO_PUBLIC_GOOGLE_API_KEY=your_google_api_key
   ```

4. **Start the Development Server:**
   ```bash
   npm run start
   ```

5. **Run on Specific Platforms:**
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

---