import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce",
    }).then((connect => console.log(`connected db ${connect.connection.host}`)))
        .catch((e) => console.log(e, "error in connecting Db"));
};
