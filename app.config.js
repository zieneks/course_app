import 'dotenv/config';

export default {
  expo: {
    name: 'yt_app',
    slug: 'yt_app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      [
        "expo-notifications",
        {
          "icon": "./assets/notification-icon.png",
          "color": "#ffffff"
        }
      ],
      'expo-router',
      [
        "react-native-video"],
      
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      ['expo-font', { fonts: ['./assets/fonts/Poppins-Black.ttf'] }],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    },
  },
};
