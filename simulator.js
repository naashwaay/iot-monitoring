
const URL = 'http://localhost:3000/api/readings';

setInterval(async () => {
  const data = {
    device_id: 'GH-01',
    suhu: +(25 + Math.random() * 12).toFixed(1), // 25-37 °C
    kelembapan: +(60 + Math.random() * 25).toFixed(1) // 60-85 %
  };

  try {
    // Mengirim data sensor ke backend menggunakan HTTP POST
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Membaca respons dari backend
    const result = await response.json();

    // Menampilkan status respons di console
    console.log('Data sensor terkirim:', data);
    console.log('Status HTTP:', response.status);
    console.log('Respons backend:', result);

  } catch (error) {
    console.error('Gagal mengirim data sensor:', error.message);
  }

}, 5000);
