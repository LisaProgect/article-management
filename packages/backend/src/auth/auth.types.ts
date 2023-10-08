import type { User } from '@prisma/client';

export interface IRequest {
  user: User;
}
