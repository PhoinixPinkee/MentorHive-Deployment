const ServiceModel = require("../models/service.model");
const UserModel = require("../models/user.model");

const getAllMentors = async () => {
  return await UserModel.find({ role: "mentor" });
};

const getMentorById = async (id) => {
  return await UserModel.findOne({ _id: id, role: "mentor" });
};

const getMentorByUsername = async (username) => {
  const mentor = await UserModel.findOne({ username, role: "mentor" });
  if (!mentor) return null;

  // Log mentor and services for debugging
  console.log("Mentor found:", mentor);

  const services = await ServiceModel.find({ mentor: mentor._id });

  // Log services for debugging
  console.log("Services for this mentor:", services);

  return { mentor, services };
};

const getMentorServices = async (id) => {
  return await ServiceModel.find({ mentor: id, active: true });
};

module.exports = {
  getAllMentors,
  getMentorById,
  getMentorByUsername,
  getMentorServices,
};
