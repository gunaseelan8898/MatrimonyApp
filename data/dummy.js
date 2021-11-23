import User from '../models/user';

const USER = [
    new User(
        'u1',
        'Male',
        require('../assets/user/santo.jpg'),
        'Santhosh',
        26,
        5.11,
        75,
        'Software Engineer',
        40000
    ),
    new User(
        'u2',
        'Female',
        require('../assets/user/deepika.jpg'),
        'Deepika',
        24,
        5.8,
        58,
        'Doctor',
         80000
    ),
    new User(
        'u3',
        'Female',
        require('../assets/user/jose.jpg'),
        'Jose',
        25,
        5.2,
        64,
        'Teacher',
         30000
    ),
    new User(
        'u4',
        'Male',
        require('../assets/user/ranveer.jpg'),
        'Ranveer',
        28,
        6.0,
        82,
        'Actor',
         100000
    ),
    new User(
        'u5',
        'Female',
        require('../assets/user/menon.jpeg'),
        'Aishwarya',
        27,
        5.3,
        68,
        'Entrepreneur',
         70000
    ),
    new User(
        'u6',
        'Male',
        require('../assets/user/sidd.jpg'),
        'siddharth',
        25,
        5.10,
        70,
        'Singer',
         35000
    ),
    new User(
        'u7',
        'Female',
        require('../assets/user/priya.jpeg'),
        'Priya',
        23,
        5.8,
        70,
        'Makeup-artist',
         50000
    ),
    new User(
        'u8',
        'Male',
        require('../assets/user/salman.jpg'),
        'Salman',
        29,
        6.0,
        75,
        'Actor',
         150000
    ),
    new User(
        'u9',
        'Female',
        require('../assets/user/mirnal.jpeg'),
        'Mirnalini',
        23,
        5.6,
        60,
        'Fashion Model',
         50000
    ),
    new User(
        'u10',
        'Male',
        require('../assets/user/bala.jpeg'),
        'Bala',
        27,
        6.1,
        85,
        'Fitness Model',
         60000
    ),
]

export default  USER;