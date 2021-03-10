import { SettingsObject, SettingsType } from './types'

const BASE_URL = 'https://6048d5d60d4b661c357812b4--gallant-murdock-ef7526.netlify.app'
const settings: SettingsObject[] = [
  {
    name: 'ifos',
    url: `${BASE_URL}/ifos`,
    type: SettingsType.IFO,
  },
  {
    name: 'pools',
    url: `${BASE_URL}/pools`,
    type: SettingsType.POOL,
  },
  {
    name: 'farms',
    url: `${BASE_URL}/farms`,
    type: SettingsType.FARM,
  },
]
export default settings
