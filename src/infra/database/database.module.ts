import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository, // abstract
      useClass: PrismaNotificationsRepository, // provide this class
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
