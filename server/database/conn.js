import mongoose, { connect } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";


const connectdatabase = async()=>{
// here we mongodb-memory-server
const mongod = await MongoMemoryServer.create();

const geturi = mongod.getUri();

const db = await mongoose.connect(geturi);
console.log("database connected")
return db ;

}

export default connectdatabase