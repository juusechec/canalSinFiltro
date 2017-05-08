import * as mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';

let mockgoose: Mockgoose = new Mockgoose(mongoose);

export function connectDB(t, done) {
  mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://localhost:27017/mern-test', err => {
      if (err) t.fail('Unable to connect to test database');
      done();
    });
  });
}

export function dropDB(t) {
  for (let i = 0; i < mockgoose.mongooseObj.connections.length; i++) {
    mockgoose.mongooseObj.connections[i].db.dropDatabase(function(err, result){
        if (err) t.fail('Unable to reset test database');
    });
  }

  // if ( mockgoose.helper.isMocked() === true ) {
  //   console.log('mongoose object is mocked');
  // }

  // It fails
  // mockgoose.helper.reset().then(() => {
  //   console.log('Db is erased');
  // }).catch((err) => {
  //   console.log('db is errrors', err);
  //   if (err) t.fail('Unable to reset test database');
  // });
}
