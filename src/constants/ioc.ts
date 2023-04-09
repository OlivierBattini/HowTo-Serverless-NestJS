/**
 * Dependency injection tokens for NestJS
 */
export enum Ioc {
  TASK_USECASES = 'TASK_USECASES',
  TASK_FACTORY = 'TASK_FACTORY',
  TASK_REPOSITORY = 'TASK_REPOSITORY',
  TASK_MODEL = 'TASK_MODEL',

  SEQUELIZE = 'SEQUELIZE',
}
