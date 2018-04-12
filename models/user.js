const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const WORK_FACTOR = 10;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, index: { unique: true}},
  password: { type: String, required: true },
  aliasOrg: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  musicGenres: {type: String, required: true},
  barClub: {type: String, required: true},
  djPerformer: {type: String, required: true},
  picture: {type: String},
  soundcloud: {type: String},
  twitter: {type: String},
  facebook: {type: String},
  instagram: {type: String}
});

UserSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next();
    }

    // generate a salt
    bcrypt.genSalt(WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            // let mongoose know we're done now that we've hashed the plaintext password
            next();
        });
    });
});



// Here, we define a method that will be available on each instance of the User.
// This method will validate a given password with the actual password, and resolve
// true if the password is a match, or false if it is not.
// This code returns a Promise rather than using the callback style
UserSchema.methods.validatePassword = function (candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) return reject(err);
            resolve(isMatch);
        });
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
