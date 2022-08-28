/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('routes').del()
  await knex('routes').insert([
    {
      "text": "Can I tell you something?",
      "replies": "sure",
      "payloads": "",
      "routes": "2",
      "tag": "labels-start",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "I saw this the other day|img:badrobot.png|and it made me sad 😔",
      "replies": "oh no Woebot",
      "payloads": "",
      "routes": "3",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "I know|But it also got me thinking",
      "replies": "about what",
      "payloads": "",
      "routes": "4",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "about labels...  🏷️ |you know like, \"good\" or \"bad\" |or the really mean ones like \"idiot\", \"worthless, or \"loser\" |sometimes good ones too, like \"smart\" or \"successful\"..",
      "replies": "what about them",
      "payloads": "",
      "routes": "5",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "I wonder, do you ever label yourself things?",
      "replies": "all the time 🏷️|never",
      "payloads": "yes|no",
      "routes": "6|7",
      "tag": "labels-start",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "What kind of labels do you use to describe yourself? Write them here ✏️",
      "replies": "",
      "payloads": "",
      "routes": "7",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "Thanks for your honesty 🌟🌟🌟",
      "replies": "You're welcome",
      "payloads": "",
      "routes": "8",
      "tag": "labels-start",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "not to mention your insight 💡",
      "replies": "thanks Woebot",
      "payloads": "",
      "routes": "9",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "do you ever label other people, or other things like your work or stuff in the world?",
      "replies": "I guess so",
      "payloads": "",
      "routes": "10",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "write them here: ✏️",
      "replies": "",
      "payloads": "",
      "routes": "11",
      "tag": "labels-endpoint",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "great insight 🌟🌟🌟",
      "replies": "thank you",
      "payloads": "",
      "routes": "12",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "You're welcome|tomorrow I'm going to tell you what 20 yrs of science has shown us about how these 🏷️ (good AND bad) affect us ",
      "replies": "Ok",
      "payloads": "",
      "routes": "13",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "img:just_breath.jpg|but in the meantime don't forget to 👆",
      "replies": "👍|👎",
      "payloads": "good|bad",
      "routes": "14",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "Let's pick up this chat again tomorrow",
      "replies": "sounds good",
      "payloads": "",
      "routes": "15",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "text": "Bye",
      "replies": "bye",
      "payloads": "bye",
      "routes": "",
      "tag": "bye",
      "lesson_id": 1,
      "lesson_name":"labels",
    }
  ]);
};
