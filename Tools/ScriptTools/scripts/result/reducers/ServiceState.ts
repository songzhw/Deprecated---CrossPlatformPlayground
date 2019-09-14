export class ServiceState {
  //TODO changed based your requirement
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
