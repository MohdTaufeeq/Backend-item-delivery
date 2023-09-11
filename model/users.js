const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxLength: [40, "Name should be at most 40 characters long"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      default: "user",
    },
    photo: {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });