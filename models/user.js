const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Campground = require('./campground');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: "email is required",
      lowercase: true,
      trim: true,
      unique: true,
    },
    /* emailToken to be implemented at a later date */
    // emailToken: String,

    /* isVerified to be added at a later date */
    // isVerified: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },

    image: {
      secure_url: {
        type: String,
        default: "/images/no-user.jpg",
      },
      public_id: String,
    },
    /* expiresDateCheck to be implemented at a later date */
    /* This is used along with isVerified... account will be removed if not verified in 24 hours */
    // expiresDateCheck: {
    //   type: Date,
    //   default: undefined,
    //   expires: 86400,
    // },
    campgrounds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campground",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose, {
  limitAttempts: true,
  interval: 100,
  // 300000ms is 5 min
  maxInterval: 300000,
  // This will completely lock out an account and requires user intervention.
  maxAttempts: 10,
  usernameLowerCase: true,
});

module.exports = mongoose.model("User", UserSchema);
