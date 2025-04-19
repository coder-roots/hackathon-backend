const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  heckathonBanner: {
    type: String,
    default: "no_image.jpg",
  },
  type: {
    type: String, // Type: College/ Intercollege
    default: null,
  },
  theme: [
    {
      themeName: {
        type: String,
        default: null,
      },
      themeImage: {
        type: String,
        default: null,
      },
      themeIdea: {
        type: String,
        default: null,
      },
      problemStatement: {
        type: String,
        default: null,
      },
      constraints: {
        type: String,
        default: null,
      },
    },
  ],
  minTeamSize: {
    type: Number,
    default: null,
  },
  maxTeamSize: {
    type: Number,
    default: null,
  },
  registerationStartDate: {
    type: Date,
    default: Date.now(),
  },
  registerationEndDate: {
    type: Date,
    default: Date.now(),
  },
  eligibilityCriteria: {
    type: String,
    default: null,
  },
  rules: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    default: null,
  },
  organizerDetail: [
    {
      societyHead: {
        type: String, // societyHead: teacher, student
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      contect: {
        type: String,
        default: null,
      },
      branch: {
        type: String,
        default: null,
      },
    },
    {
      athorityHeadName: {
        type: String,
        default: null,
      },
      designation: {
        type: String,
        default: null,
      },
      department: {
        type: String,
        default: null,
      },
      contactNumber: {
        type: String,
        default: null,
      },
    },
  ],
  judges: [
    {
      name: {
        type: String,
        default: null,
      },
      qualification: {
        type: String,
        default: null,
      },
      position: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
      password: {
        type: String,
        default: null,
      },
      company: {
        type: String,
        default: null,
      },
      image: {
        type: String,
        default: null,
      },
      expert: {
        type: String, // Theme expertise
        default: null,
      },
      heckathonId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to hackathon
        ref: "hackathon",
        default: null,
      },
    },
  ],
});

module.exports = mongoose.model("admin", adminSchema);
