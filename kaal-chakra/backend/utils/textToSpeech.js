const fs = require('fs');
const path = require('path');
const { getAllAudioUrls } = require('google-tts-api');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const ffmpeg = require('fluent-ffmpeg');

// ✅ Optional: Set ffmpeg + ffprobe path if needed (Windows specific)
const ffmpegPath = 'C:/ffmpeg/bin/ffmpeg.exe';
const ffprobePath = 'C:/ffmpeg/bin/ffprobe.exe';

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);
;

const generateVoice = async (text, outputPath) => {
  try {
    const urls = getAllAudioUrls(text, {
      lang: 'en',
      slow: false,
      host: 'https://translate.google.com',
      splitPunct: ',.?!',
    });

    const tempDir = path.join(__dirname, '../tmp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const tempFiles = [];

    // ✅ Download each chunk correctly
    for (let i = 0; i < urls.length; i++) {
      const { url } = urls[i];  // ✅ correct way to access URL
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
      });

      const tempFilePath = path.join(tempDir, `${uuidv4()}.mp3`);
      fs.writeFileSync(tempFilePath, response.data);
      tempFiles.push(tempFilePath);
    }

    return new Promise((resolve, reject) => {
      const command = ffmpeg();
      tempFiles.forEach((file) => command.input(file));

      command
        .on('error', (err) => {
          console.error("FFmpeg error:", err);
          reject(err);
        })
        .on('end', () => {
          // ✅ Clean up temp files after merge
          tempFiles.forEach((file) => fs.unlinkSync(file));
          resolve();
        })
        .mergeToFile(outputPath, tempDir);
    });

  } catch (error) {
    console.error("TTS generation error:", error);
    throw error;
  }
};

module.exports = generateVoice;
