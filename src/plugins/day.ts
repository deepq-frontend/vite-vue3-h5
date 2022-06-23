import Day from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/zh-cn';
Day.locale('zh-cn');
Day.extend(isBetween);
