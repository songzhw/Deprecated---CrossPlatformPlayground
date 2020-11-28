export interface ILoadingProps {
  isLoading: boolean;
}

const withLoading = <P extends object>(InComponent: React.ComponentType<P>) => {
  const loading = <div>loading...</div>;
  return (props: P & ILoadingProps) => (
    props.isLoading ? { loading } : <InComponent {...props}/>
  );
};

