const mockItems = [
  { id: 1, name: "Mouse Gamer X7", price: 29.99, description: "Mouse ergonómico con 7 botones programables", category: "perifericos", img: "https://picsum.photos/300/200" },
  { id: 2, name: "Teclado Mecánico RGB", price: 79.99, description: "Teclado con switches mecánicos y retroiluminación RGB", category: "perifericos", img: "https://picsum.photos/300/200" },
  { id: 3, name: "Auriculares Inalámbricos H700", price: 59.99, description: "Auriculares con sonido envolvente y micrófono", category: "perifericos", img: "https://picsum.photos/300/200" },

  { id: 4, name: "NVIDIA RTX 4060", price: 299.99, description: "Tarjeta gráfica con soporte para Ray Tracing", category: "graficas", img: "https://picsum.photos/300/200" },
  { id: 5, name: "AMD Radeon RX 7600", price: 269.99, description: "Gráfica de alto rendimiento para gaming", category: "graficas", img: "https://picsum.photos/300/200" },
  { id: 6, name: "NVIDIA GTX 1660 Super", price: 199.99, description: "Tarjeta ideal para juegos en 1080p", category: "graficas", img: "https://picsum.photos/300/200" },

  { id: 7, name: "Intel Core i5-13600K", price: 319.99, description: "Procesador de alto rendimiento para multitarea", category: "procesadores", img: "https://picsum.photos/300/200" },
  { id: 8, name: "AMD Ryzen 5 5600X", price: 199.99, description: "CPU eficiente y rápida para gaming", category: "procesadores", img: "https://picsum.photos/300/200" },
  { id: 9, name: "Intel Core i7-13700K", price: 449.99, description: "Procesador para aplicaciones exigentes", category: "procesadores", img: "https://picsum.photos/300/200" },

  { id: 10, name: "SSD Kingston 1TB NVMe", price: 89.99, description: "SSD de alto rendimiento y capacidad", category: "almacenamientos", img: "https://picsum.photos/300/200" },
  { id: 11, name: "HDD Seagate 2TB", price: 59.99, description: "Disco duro para almacenamiento masivo", category: "almacenamientos", img: "https://picsum.photos/300/200" },
  { id: 12, name: "SSD Samsung 980 Pro 500GB", price: 129.99, description: "SSD ultra rápido con tecnología PCIe 4.0", category: "almacenamientos", img: "https://picsum.photos/300/200" }
];

  export const getItems = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(mockItems)
        }, 500)
    })
  }