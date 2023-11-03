const PlayHT = require('playht')

PlayHT.init({
  apiKey: process.env.PLAY_HT_API_KEY,
  userId: process.env.PLAY_HT_USER_ID,
  defaultVoiceId: 's3://peregrine-voices/oliver_narrative2_parrot_saad/manifest.json',
  defaultVoiceEngine: 'PlayHT2.0',
})

async function convertTextToSpeech(text) {
  const generated = await PlayHT.generate(text)
  const { audioUrl } = generated
  return audioUrl
}

module.exports = {
  convertTextToSpeech
}
