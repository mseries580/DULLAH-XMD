const fs = require('fs-extra');
const path = require('path');
const { Sequelize } = require('sequelize');

if (fs.existsSync(path.join(__dirname, 'set.env'))) {
    require('dotenv').config({ path: path.join(__dirname, 'set.env') });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL || databasePath;

const database =
    DATABASE_URL === databasePath
        ? new Sequelize({
              dialect: 'sqlite',
              storage: DATABASE_URL,
              logging: false,
          })
        : new Sequelize(DATABASE_URL, {
              dialect: 'postgres',
              ssl: true,
              protocol: 'postgres',
              dialectOptions: {
                  ssl: { require: true, rejectUnauthorized: false },
              },
              logging: false,
          });

const config = {
    session: process.env.SESSION_ID || process.env.SESSION || 'DULLAH-MD;;;H4sIAAAAAAAAA62VXZOiOBSG/0tutUZAAbGqqxb5UFQUWxBkay8iRED5MgkoTvnft7Dbma6a2d7equUqJOTkeU/Oe/gO8iIhaI4aMPoOSpzUkKJ2SJsSgREYV4cDwqALQkghGIHzqnLV/ULelfWcmjUxb2vCXUq4Ol/UXDpumdmEmkq9z7jiBdy7oKz2aRJ8ElDfKdHAKCb1cnK7LGLJgSfhgn3FmPmrUhdscU5m28nYOjnrF3BvI8IEJ3mklTHKEIbpHDUWTPDX8Ifm7lLka+fAmNktPux7yTiD146pwFlQyvNYgz4DhY5CdPNr+Memn9+SRWdwbAahvVhfqibPKndxWuzSXg8uySkWrkZyxNfhGz5JohyFRohymtDmy3lvZmi7nNTTVypEYr0OVBWVjA8VU9amqt87CnU9lzb6hHLM18A9RrUUsdnyUy/mm4Fn+2fpWp83A6V2z5dQDTWCJ5s094/FR3ALP2vl9F/ybkyDrWMdzWCVp6rcV2nTkczKnWx2SXKL/fH0sHZPfNNYjPM1fGVSIed6Egs0DTziLqVZx/B0aeFWfT9EOTxebXkaKeet+iHvkFb4M0pTmc4Ssq7KjbjlXHYeSceefBtbqx4OPfakMO4smIkXBnumcKp8kdnMa39he0W1lkOrpr0r97rAMjLs8FyPZ7YU0p4ivzwUnVBjhGDE3rsAoyghFEOaFPljjhG6AIb1BgUY0Ud6AZ3OX4MFv/SznMzr80oeu9cJCmDl+3hLrl5MLwq+6Z7vOS+gC0pcBIgQFE4TQgvcmIgQGCECRn8+bqoVjVFWUDRLQjACEtfneGnICwLL/0G+XWJICSzLbzmioAsOuMhMBEYUV6gLHhtknlX4/pgVJa4vcENB6Iu6zg90cchpnDDgW4nZ26F2kiFCYVaCESuKgsAO+8Lw3v2/OHiR4ySdH8uCpIisyGqSzmuSLjP6WB2MP+cQmf+PQ5YGnDgWZHnMSS0FK8p9UZMESdFURfmUY8CI97+6IEdX+uantgr6QhccEkyok1dlWsDwabbnIgyCosrppskDpR0gDEbcz2lEaZJHpFVW5RAHcVIjpdUBRgeYEvSj8BBG4VPLezNVirD1w3K3tDlZWYOWvQ30S25GEvtrenLYfg3mSR6BLkgfm7hBX2LZYZ/hhsJAeuxrF+4/eNvwIaIwSUlr58XeJZahaZbipuZwMpGdSFYiGfzU9/Tvmz/MSmPJPludtSxknNjyeSvlfX+3KIPlTRJyZbq6BIyvH5zLy2+CgBGw1k52uRyPwmaQZhxa71GD7CommsJTuYrO29uV1WxhpR1qh+ynR6p31HRg+3jA9YaeK+3FphJXjGXnPib4xNDbglOil/a0ENVJgD4e1tnB2+Fk7nGmLVTGO8rp1S965sx6nfO0XvXp9ZpKaMc6pOz0p8apbAo16/VkZ8tw0TLlzjwMckntcXWwWeGktB2UPA57drb0/Y+SvHs+ebweEvRo0O839K83+QbeFhxz736I8d7y/6Ftju1FvNxP+OM5nuWhbtgcsnnkuq4ieGrQQ+UlvpHpcvLqsSa4t5VfppAeCpyBESDZHoIuwEXVlq+RH4rPur5sGFoUGa3sFBIq/7TE77oO1wVZI5flhkL6dBKQ22cueeD+N/17nYn8CAAA',
    PREFIXE: process.env.PREFIX || '.',

    API: process.env.API_URL || 'https://api.akuari.my.id',
SIPUTZX: process.env.SIPUTZX || 'https://api.akuari.my.id',

    OWNER_NAME: process.env.OWNER_NAME || 'DULLAH-MD',
    NUMERO_OWNER: process.env.NUMERO_OWNER || process.env.OWNER_NUMBER || '255716945971',
    BOT_NAME: process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL: process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || 'yes',
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'yes',
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '',
    CHATBOT: process.env.CHATBOT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || 'no',
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1: process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2: process.env.ANTIDELETE2 || 'no',
    STATUS_MENTIONS: process.env.STATUS_MENTIONS || 'yes',
    ANTISTATUS: process.env.ANTISTATUS || 'yes',
    ANTICALL: process.env.ANTICALL || 'no',
    ANTIBAD: process.env.ANTIBAD || 'no',
    GROUP_ANTILINK: process.env.GROUP_ANTILINK || 'yes',
    AUTO_REACT: process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'no',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    AUTO_TAG_STATUS: process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER: process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || 'yes',
    RMBG_KEY: process.env.RMBG_KEY || 'MLt7fM4Sqv63U9FAt6FdPKRL',

    ANTI_VOICE: process.env.ANTI_VOICE || 'no',
    ANTI_SPAM: process.env.ANTI_SPAM || 'no',
    ANTI_REACT: process.env.ANTI_REACT || 'no',

    DATABASE_URL,
    database,
};

const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
