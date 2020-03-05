const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    frutas: [
      { nombre: "Manzana", cantidad: 10 },
      { nombre: "Pera", cantidad: 0 },
      { nombre: "Platano", cantidad: 27 }
    ],
    nuevaFruta: ""
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0
      });
    }
  }
});
