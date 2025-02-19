# 🌱 AgriCare - AI-Powered Farming Assistant

AgriCare is a React Native Expo mobile application that helps smallholder farmers detect plant diseases and pests using AI-powered image recognition. The app works offline and online, utilizing TensorFlow.js for on-device processing, Gemini API for AI assistance (online), and Gemma API for offline AI assistance. It also integrates SQLite for local data storage.

## 🚀 Features

- ✅ **Plant Disease Detection:** – Capture plant images and identify diseases using VGG16 model.
- ✅ **Pest Detection:** – Detect harmful pests affecting crops.
- ✅ **AI Assistance:** – Get farming recommendations using Gemini API (online) or Gemma API (offline).
- ✅ **Offline Support:** – Store and retrieve data with SQLite.
- ✅ **User-Friendly UI** – Built with React Native and Expo for seamless experience.

## 📌 Tech Stack

- **FrontEnd:** React Native (Expo CLI)

- **AI MOdel:** TensorFlow.js (VGG16 for disease & pest detection)
- **Database:** SQLite (for offline storage)
- **AI Assistance:**
  - **Gemini API** (for online AI-based insights)
  - **Gemma API** (for offline AI-based insights)

## 🔧 Installation & Setup

1️⃣ **Install Expo CLI (If Not Installed)**

```bash
  npm install -g expo-cli
```

2️⃣ **Create the Project**

```bash
  npx create-expo-app AgriCare
```

3️⃣ **Move Into the Project Folder**

```bash
  cd AgriCare
```

4️⃣ **Install Dependencies**

```bash
  npm install @tensorflow/tfjs @tensorflow-models/mobilenet
```

5️⃣ **Start the Development Server**

```bash
  npx expo start
```

Scan the QR Code with Expo Go App on your phone to test it! 📱

## 🛠 Future Enhancements

- 🌍 Multi-language Support for wider farmer adoption.
- 🌱 Weather & Soil Analysis integration.
- 📊 Dashboard for crop health insights.

## 🤝 Contributing

We welcome contributions! Fork this repo, create a branch, and submit a pull request.

## 📜 License

[MIT License](https://choosealicense.com/licenses/mit/)

🌍 Empowering Farmers with AI! 🚜🌾
