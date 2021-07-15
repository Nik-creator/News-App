import DescriptionIcon from '@material-ui/icons/Description';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';

const listItems = [
  {
    text: 'Новости',
    icon: DescriptionIcon,
    path: '/'
  },
  {
    text: 'Помощь',
    icon: HelpOutlineIcon,
    path: '/help'
  },
  {
    text: 'Настройки',
    icon: SettingsIcon,
    path: '/settings'
  },
  {
    text: 'О нас',
    icon: InfoIcon,
    path: '/about'
  },
];

export default listItems;
