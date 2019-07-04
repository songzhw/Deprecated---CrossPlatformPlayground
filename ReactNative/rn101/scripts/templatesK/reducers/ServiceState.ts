export class ServiceState {
  id: string | null;
  offset: number;

  constructor(
    id: string | null = null,
    offset = 0
  ) {
    this.id = id;
    this.offset = offset;
  }
}
