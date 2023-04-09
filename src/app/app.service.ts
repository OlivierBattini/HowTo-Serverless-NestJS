import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {
  getArchitecture(): string {
    return os.arch();
  }

  getCpuCount(): number {
    return os.cpus().length;
  }

  getFreeMem(): number {
    return os.freemem();
  }

  getTotalMem(): number {
    return os.totalmem();
  }
}
