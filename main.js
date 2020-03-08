const fetch = require('node-fetch')
var sleep = require('sleep');


const TOKEN = 'hoge'
const CHANNEL_IDs = []

const SLACK_API_BASE = 'https://slack.com/api'

function fetchChannel(channelId) {
  return fetch(`${SLACK_API_BASE}/channels.info?token=${TOKEN}&channel=${channelId}&pretty=1`)
    .then(res => res.json())
    .then((res) => {
      if (!res.ok) throw new Error(res.error)
      return res.channel
    })
    .catch(err => console.error(err))
}

function fetchMembers(ids) {
  return Promise.all(ids.map((id) => {
    return fetch(`${SLACK_API_BASE}/users.info?token=${TOKEN}&user=${id}&pretty=1`)
      .then(res => res.json())
      .then((res) => {
        if (!res.ok) throw new Error(res.error)
        return res.user
      })
      .catch(err => console.error(err))
  }))
  .then(users => users.filter(x => x && !x.deleted))
  .catch(err => console.error(err))
}

  (async () => {
    for (const id of CHANNEL_IDs) {
      const channel = await fetchChannel(id)
      sleep.sleep(2)
      const members = await fetchMembers(channel.members)
      let names = members.map(x => x.real_name).sort()
      tabNames = names.map(x => x + '\t')
      console.log(id, '\t', data[id],'\t', ...tabNames)
    }
  })()
    .catch(err => console.error(err))

