import { AppService } from './app.service';

describe('AppService', () => {
  const appService = new AppService();

  it('getArchitecture', () => {
    const arch = appService.getArchitecture();
    expect(typeof arch).toBe('string');
  });

  it('getCpuCount', () => {
    const cpuCount = appService.getCpuCount();
    expect(typeof cpuCount).toBe('number');
  });

  it('getFreeMem', () => {
    const freeMem = appService.getFreeMem();
    expect(typeof freeMem).toBe('number');
  });

  it('getTotalMem', () => {
    const totalMem = appService.getTotalMem();
    expect(typeof totalMem).toBe('number');
  });
});
