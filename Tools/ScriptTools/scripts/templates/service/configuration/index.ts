export interface IStoreConfiguration {
  namespace: string;
}

export interface ILibrarySyncConfiguration {
  store: IStoreConfiguration | null | undefined;
}

export const Configuration: ILibrarySyncConfiguration = Object.seal({
  store: null
});
