require('./assets/stylesheets/styles.scss')

class Car {
  manufacturer(car) {
    document.write(`I have a ${car}`)
  }
}

const volvo = new Car;

volvo.manufacturer('volvo');
