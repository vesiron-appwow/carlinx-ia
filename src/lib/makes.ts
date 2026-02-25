/**
 * CarLinx-IA — Vehicle makes organised by Type
 * Three selectable types: Cars · Commercial · Motorbikes
 * Each has its own Major + Full makes list.
 */

// ── CARS ────────────────────────────────────────────────────────────────────

export const CAR_MAJOR_MAKES = [
  'Alfa Romeo', 'Audi', 'BMW', 'Citroën', 'Dacia', 'Fiat', 'Ford', 'Honda',
  'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Mazda',
  'Mercedes-Benz', 'MG', 'MINI', 'Mitsubishi', 'Nissan', 'Peugeot', 'Polestar',
  'Porsche', 'Renault', 'SEAT', 'Škoda', 'Subaru', 'Suzuki', 'Tesla',
  'Toyota', 'Vauxhall', 'Volkswagen', 'Volvo',
];

export const CAR_ALL_MAKES = [
  'AC', 'Alfa Romeo', 'Alpine', 'Ariel', 'Aston Martin', 'Audi',
  'Bentley', 'BMW', 'Bugatti',
  'Cadillac', 'Caterham', 'Chevrolet', 'Chrysler', 'Citroën',
  'Dacia', 'Daewoo', 'Daihatsu', 'Dodge', 'DS',
  'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC',
  'Honda', 'Hummer', 'Hyundai',
  'Infiniti', 'Isuzu',
  'Jaguar', 'Jeep',
  'Kia', 'Koenigsegg',
  'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lotus',
  'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-Benz',
  'MG', 'MINI', 'Mitsubishi', 'Morgan',
  'Nissan',
  'Pagani', 'Peugeot', 'Polestar', 'Porsche',
  'RAM', 'Renault', 'Rolls-Royce', 'Rover',
  'Saab', 'SEAT', 'Škoda', 'Smart', 'Subaru', 'Suzuki',
  'Tesla', 'Toyota',
  'Vauxhall', 'Volkswagen', 'Volvo',
  'Wiesmann',
];

// ── COMMERCIAL ───────────────────────────────────────────────────────────────

export const COMMERCIAL_MAJOR_MAKES = [
  'DAF', 'Ford', 'Isuzu', 'Iveco', 'LDV', 'MAN', 'Mercedes-Benz',
  'Mitsubishi', 'Nissan', 'Peugeot', 'Renault', 'Scania', 'Toyota',
  'Vauxhall', 'Volkswagen', 'Volvo',
];

export const COMMERCIAL_ALL_MAKES = [
  'Ashok Leyland', 'Avia',
  'BharatBenz',
  'Caetano', 'Citroën',
  'DAF', 'Dennis',
  'ERF',
  'FAW', 'Fiat', 'Ford', 'Foton',
  'Hino',
  'Isuzu', 'Iveco',
  'JAC', 'JCB',
  'Kenworth',
  'LDV', 'Leyland', 'Leyland DAF',
  'MAN', 'Mercedes-Benz', 'Mitsubishi Fuso',
  'Nissan',
  'Peugeot', 'Peterbilt',
  'Renault', 'Renault Trucks',
  'Scania', 'Seddon Atkinson', 'Sinotruk',
  'Toyota', 'TruckMAN',
  'UD Trucks',
  'Vauxhall', 'Volkswagen', 'Volvo',
  'Western Star',
];

// ── MOTORBIKES ────────────────────────────────────────────────────────────────

export const MOTORBIKE_MAJOR_MAKES = [
  'Aprilia', 'BMW', 'Ducati', 'Harley-Davidson', 'Honda', 'Husqvarna',
  'Kawasaki', 'KTM', 'Royal Enfield', 'Suzuki', 'Triumph', 'Yamaha',
];

export const MOTORBIKE_ALL_MAKES = [
  'Aprilia',
  'Benelli', 'Beta', 'BMW', 'Brough Superior',
  'CCM', 'CF Moto',
  'Ducati',
  'Gas Gas',
  'Harley-Davidson', 'Honda', 'Husaberg', 'Husqvarna',
  'Indian',
  'Kawasaki', 'KTM',
  'Kymco',
  'Lambretta',
  'MV Agusta',
  'Norton',
  'Piaggio',
  'Royal Enfield',
  'Sherco', 'Suzuki',
  'Triumph',
  'Ural',
  'Vespa',
  'Yamaha', 'Zero Motorcycles',
];

// ── LOOKUP HELPERS ────────────────────────────────────────────────────────────

export const MAKES_BY_TYPE: Record<string, { major: string[]; all: string[] }> = {
  car:        { major: CAR_MAJOR_MAKES,        all: CAR_ALL_MAKES },
  commercial: { major: COMMERCIAL_MAJOR_MAKES, all: COMMERCIAL_ALL_MAKES },
  motorbike:  { major: MOTORBIKE_MAJOR_MAKES,  all: MOTORBIKE_ALL_MAKES },
};

export type VehicleType = 'car' | 'commercial' | 'motorbike';

export const VEHICLE_TYPES: { value: VehicleType; label: string; icon: string; desc: string }[] = [
  { value: 'car',        label: 'Cars',       icon: '🚗', desc: 'All passenger cars & sports vehicles' },
  { value: 'commercial', label: 'Commercial', icon: '🚐', desc: 'Vans, trucks, HGVs & fleet vehicles' },
  { value: 'motorbike',  label: 'Motorbikes', icon: '🏍️', desc: 'Motorcycles, scooters & mopeds' },
];
