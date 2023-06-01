import { createApp } from 'vue'
import { createPahoMqttPlugin } from 'vue-paho-mqtt';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
createApp(App).use(router,
    createPahoMqttPlugin({
    PluginOptions: {
      autoConnect: true,
      showNotifications: true,
    },

    MqttOptions: {
      host: 'test.mosquitto.org',
      port: 1883,
      clientId: `MyID-${Math.random() * 9999}`,
      mainTopic: 'esp32/mqtt',
    },
  }),).mount('#app')
