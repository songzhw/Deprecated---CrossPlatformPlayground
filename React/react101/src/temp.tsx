import React, { ComponentType } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";


// export interface ILoadingProps {
//   isLoading: boolean;
// }
//
// const withLoading: ComponentType = <P extends object>(InComponent: React.ComponentType<P>) => {
//   const loading = <div>loading...</div>;
//   return (props: P & ILoadingProps) => (
//     props.isLoading ? { loading } : <InComponent {...props}/>
//   );
// };
//
// interface IOneProps {
//   name?: string;
// }
//
// const One = (props: IOneProps) => {
//   return (<div>{props.name}</div>);
// };
//
// export const c: ComponentType = withLoading(One);
