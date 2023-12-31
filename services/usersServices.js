const { User } = require('../db/userModel')
const { NotAuthorizedError } = require('../helpers/errors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRegistration = async (email, password, name) => {
  const user = new User({ email, password, name })
  await user.save()
  const savedUser = await User.findOne({ email })
  const token = jwt.sign({
    _id: savedUser._id,
  }, process.env.JWT_SECRET)

  await User.findByIdAndUpdate(savedUser._id, { $set: { token } })
  return token
}

const userLogin = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new NotAuthorizedError(`No user with email '${email}' found`)
  }

  if (!await bcrypt.compare(password, user.password)) {
    throw new NotAuthorizedError('Wrong password')
  }

  const token = jwt.sign({
    _id: user._id,
  }, process.env.JWT_SECRET)

  await User.findByIdAndUpdate(user._id, { $set: { token } })

  return token
}

const userLogOut = async (userId) => {
  await User.findByIdAndUpdate(userId, { $set: { token: null } })
}

const getCurrentUser = async (userId) => {
  const user = await User.findById(userId)
  return user
}

module.exports = {
  userRegistration,
  userLogin,
  userLogOut,
  getCurrentUser,
}
