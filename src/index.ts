import { User } from './models/User';

const user = new User({name: 'Sawyer', age: 7});

user.save();