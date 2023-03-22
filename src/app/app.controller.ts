import { Controller, Get } from '@nestjs/common';

import { Prefix } from '../constants/prefix';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(Prefix.STATS)
  getStats(): object {
    return {
      cpuCount: this.appService.getCpuCount(),
      freeMem: this.appService.getFreeMem(),
      totalMem: this.appService.getTotalMem(),
      arch: this.appService.getArchitecture(),
    };
  }
}
