import React, { Component, ComponentType } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

interface IWork{
  name: string;
  id:number;
}
type One = Omit<IWork, "name">  // Omit要ts >= 3.5.1
const one : One = {id:200}

// export interface ILoadingProps {
//   isLoading: boolean;
// }
//
// export const withLoading2 = <P extends object>(InComponent: ComponentType) => {
//   class WithLoading3 extends Component<ILoadingProps> {
//     loading = <div>loading...</div>;
//
//     render() {
//       return (
//         this.props.isLoading ? { this.loading } : <InComponent {...this.props}/>
//       );
//     }
//   }
//
//   return hoistNonReactStatics(withLoading2, WithLoading3);
// };


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
