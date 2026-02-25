/**
 * Vehicle makes grouped by category for CarLinx
 * Backwards compatible with MAJOR_MAKES and ALL_MAKES exports
 */

export const MAKES = {
  car: {
    major: [
      'Audi', 'BMW', 'Citroën', 'Dacia', 'Fiat', 'Ford', 'Honda', 'Hyundai',
      'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Mazda', 'Mercedes-Benz',
      'MINI', 'Mitsubishi', 'Nissan', 'Peugeot', 'Porsche', 'Renault', 'SEAT',
      'Škoda', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Vauxhall', 'Volkswagen', 'Volvo'
    ],
    all: [
      'AC', 'Alfa Romeo', 'Ariel', 'Arrinera', 'Aston Martin', 'Audi',
      'Bentley', 'BMW', 'Bugatti',
      'Cadillac', 'Caterham', 'Chevrolet', 'Chrysler', 'Citroën',
      'Dacia', 'Daewoo', 'Daihatsu', 'Dodge', 'DS',
      'Ferrari', 'Fiat', 'Ford',
      'Genesis', 'GMC',
      'Honda', 'Hummer', 'Hyundai',
      'Infiniti', 'Isuzu',
      'Jaguar', 'Jeep',
      'Kia', 'Koenigsegg',
      'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lotus',
      'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-Benz',
      'MG', 'MINI', 'Mitsubishi', 'Morgan',
      'Nissan',
      'Pagani', 'Peugeot', 'Porsche', 'Polestar',
      'RAM', 'Renault', 'Rolls-Royce', 'Rover',
      'Saab', 'SEAT', 'Škoda', 'Smart', 'Subaru', 'Suzuki',
      'Tesla', 'Toyota',
      'Vauxhall', 'Volkswagen', 'Volvo',
      'Wiesmann'
    ]
  },

  commercial: [
    'DAF',
    'Fiat Professional',
    'Ford',
    'Iveco',
    'Isuzu',
    'MAN',
    'Mercedes-Benz',
    'Mitsubishi Fuso',
    'Nissan',
    'Peugeot',
    'Renault',
    'Volkswagen'
  ],

  motorbike: [
    'Aprilia',
    'BMW Motorrad',
    'Ducati',
    'Harley-Davidson',
    'Honda',
    'Kawasaki',
    'KTM',
    'Royal Enfield',
    'Suzuki',
    'Triumph',
    'Yamaha'
  ]
};

/**
 * Backwards compatibility exports
 * (used by SearchPanel.astro and possibly other components)
 */

export const MAJOR_MAKES = MAKES.car.major;
export const ALL_MAKES = MAKES.car.all;