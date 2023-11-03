const {
  userRegistration,
  userLogin,
  userLogOut,
} = require('../services/usersServices')

const registrationController = async (req, res) => {
  const { email, password, name } = req.body
  const token = await userRegistration(email, password, name)
  res.json({ status: 'success', token })
}

const loginController = async (req, res) => {
  const { email, password } = req.body
  const token = await userLogin(email, password)
  res.json({ status: 'success', token })
}

const logoutController = async (req, res) => {
  const userId = req.user._id
  await userLogOut(userId)
  res.json({ status: '204 No Content' })
}

const getCurrentUserController = async (req, res) => {
  const user = req.user
  res.json({
    status: 'success',
    user: {
      name: user.name,
      email: user.email,
      subscription: user.subscription
    }
  })
}

module.exports = {
  registrationController,
  loginController,
  logoutController,
  getCurrentUserController,
}
