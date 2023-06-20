import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const documentModel = mongoose.model("Document", documentSchema);

export default documentModel;
