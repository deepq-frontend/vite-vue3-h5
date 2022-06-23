import Dayjs from 'dayjs';
import { promiseWait } from '@/utils/util';
interface IApiLoopOptions<T> {
  api: (param?: unknown) => Promise<T>;
  success?: (data: T) => void;
  interval?: number;
  error?: (error: unknown | Error) => void;
}

export class ApiLoop<T> {
  private api;
  private interval = 1000;
  private preTime;
  private _options;
  public isStop = true;
  private requestTimes = 0;

  constructor(options: IApiLoopOptions<T>) {
    this.api = options.api;
    this.interval = options.interval || 1000;
    this.preTime = Dayjs().subtract(this.interval, 'ms');
    this._options = options;
  }

  private async createLoop() {
    if (this.isStop) {
      return false;
    }
    const now = Dayjs();
    const diff = now.diff(this.preTime);
    if (diff < this.interval) {
      await promiseWait(this.interval - diff);
    }
    try {
      const res = await this.api();
      this.requestTimes += 1;
      this._options.success && this._options.success(res);
      this.preTime = Dayjs();
      this.createLoop();
    } catch (error: unknown) {
      this._options.error && this._options.error(error);
    }
  }

  public start() {
    if (this.isStop) {
      this.isStop = false;
      this.createLoop();
    }
  }

  public stop() {
    this.isStop = true;
  }

  public toggleStatus(status: boolean) {
    this.isStop = status;
  }

  public resetInterval(interval: number) {
    this.interval = interval;
  }

  public destroy() {
    this.stop();
  }
}
