import documentModel from "../models/documentModel.js";

export const getDocument = async (id) => {
  if (id === null) {
    return;
  }

  const document = await documentModel.findById(id);

  if (document) {
    return document;
  }

  return await documentModel.create({ _id: id, data: "" });
};

export const updateDocument = async (id, data) => {
  return await documentModel.findByIdAndUpdate(id, { data });
};
