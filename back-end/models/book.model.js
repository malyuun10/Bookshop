import mongoose from "mongoose";

const bookschema = mongoose.Schema(
    {
        title:{
            type:String,
            require:[true, "please aad book titel"]
        },
        author:{
            type:String,
             require:[true, "please aad author name"]
        },
        price:{
            type:String,
             require:[true, "please aad price"]
        },
        description:{
            type:String,
             require:[true, "please aad description"]
        },
        coverimage:{
            type:String,
             require:false
        },

    },
    {
        timestamps: true
    }
)


const bookTable = mongoose.model("bookTables", bookschema);

export default bookTable;