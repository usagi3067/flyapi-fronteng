import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "light",
  "layout": "mix",
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "pwa": false,
  "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "footerRender": false,
  "title": "鸿鹄接口"
}

export default Settings;
