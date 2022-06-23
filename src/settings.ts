import dayjs from 'dayjs';

interface ISettings {
  title: string; // Overrides the default title
  showSettings: boolean; // Controls settings panel display
  showTagsView: boolean; // Controls tagsview display
  showSidebarLogo: boolean; // Controls siderbar logo display
  fixedHeader: boolean; // If true, will fix the header component
  errorLog: string[]; // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean; // If true, will change active text color for sidebar based on theme
  hideHeader: boolean;
}

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_PICKER_SHORTCUTS_LIST = [
  {
    times: 1,
    type: 'day'
  },
  {
    times: 7,
    type: 'day'
  },
  {
    times: 14,
    type: 'day'
  },
  {
    times: 30,
    type: 'day'
  }
];

export const DATE_PICKER_SHORTCUTS = DATE_PICKER_SHORTCUTS_LIST.map(el => {
  return {
    text: `最近${el.times}天`,
    value: () => {
      const end = dayjs();
      const start = end.subtract(el.times, el.type);
      return [start.format(TIME_FORMAT), end.format(TIME_FORMAT)];
    }
  };
});

// You can customize below settings :)
const settings: ISettings = {
  title: '采编运营中台',
  showSettings: false,
  showTagsView: false,
  fixedHeader: true,
  showSidebarLogo: true,
  errorLog: ['production'],
  sidebarTextTheme: false,
  hideHeader: false
};

export const INLINE_RICH_EDITOR = `bold italic underline link forecolor | alignleft aligncenter alignright | bullist numlist`;

export default settings;
