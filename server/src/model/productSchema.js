import mongoose,{Schema} from "mongoose";

const ProductSchhema = new Schema(
    {
        name : {type : String},
        description : {type : String},
        price : {type : Number},
        image : {type : String},
    }
)

export default mongoose.model("productModelExam",ProductSchhema)