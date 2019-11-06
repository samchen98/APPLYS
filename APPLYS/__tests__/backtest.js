const {MongoClient} = require('mongodb');
const server = require('../backend/server');
describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const dbRoute = "mongodb+srv://sam:samchen1131@cluster0-xwslr.mongodb.net/test?retryWrites=true&w=majority";
    connection = await MongoClient.connect(dbRoute, {
      useNewUrlParser: true,
    });
    const nameofdatabase = "test";
    db = await connection.db(global.nameofdatabase);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});