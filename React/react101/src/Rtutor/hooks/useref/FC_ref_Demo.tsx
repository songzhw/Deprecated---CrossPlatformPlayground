import React from "react";

/*@deprecated (error = "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?")*/
export class FC_ref_Demo extends React.Component {
  ref = React.createRef();

  render() {
    return (
      <div>
        <MyFc3 ref={this.ref}/>
      </div>
    );
  }
}


const MyFc3 = ({ ref }: { ref: any }) => <h1>FC 003</h1>;

