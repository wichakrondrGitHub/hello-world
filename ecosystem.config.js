module.exports = {
  apps: [{
    name: 'Petshop', // กำหนดชื่อของ script อันนี้ เราเอาไว้เรียกใช้ได้ภายหลัง
    script: 'app.js', //กำหนด Script ชี้ไปยัง server.js เพราะคือไฟล์ Web server ที่ได้ขียนไว้ก่อนหน้า
    instances: 1,
    autorestart: true, //กำหนดเป็น turn เพราะต้องการให้ restart โปรแกรมขึ้นมาใหม่เมื่อมี error หรืออื่นๆ
    watch: true, //กำหนดเป็น turn เพราะต้องการให้เมื่อเราแก้ไข code แล้วกดเซฟ จะทำการ รันใหม่ 
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 80
    },
    env_sit: {
      NODE_ENV: 'sit',
      PORT: 3001
    }
  }],

};